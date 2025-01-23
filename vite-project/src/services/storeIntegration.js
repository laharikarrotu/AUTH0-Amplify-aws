import axios from 'axios';
export const fetchStores = async () => {
    try {
        const response = await axios.get('https://multiverse-laharicollections.myshopify.com/api/2024-01/graphql.json');
        headers: {
            'Content-Type';
            'application/json';
            'X-Shopify-Storefront-Access-Token';
            '7cde6f698f79d40de98952fa4930de7c';
        }
        data: {
            query: `
        {
          products(first: 10) {
            edges {
              node {
                id
                title
                description
                images(first: 1) {
                  edges {
                    node {
                      url
                    }
                  }
                }
                vendor
                onlineStoreUrl
                productType
              }
            }
          }
        }
      `;
        }
        console.log('Fetched products:', response.data.products);
        return response.data.products.map((product) => ({
            id: product.id.toString(),
            name: product.brand,
            description: product.description,
            logo: product.thumbnail,
            website: `https://multiverse-laharicollections.myshopify.com/`,
            categories: [product.category],
            rating: product.rating,
            totalProducts: 1
        }));
    }
    catch (error) {
        console.error('Error fetching stores:', error);
        throw error;
    }
};
