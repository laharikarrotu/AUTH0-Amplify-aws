// src/services/shopifyClient.ts
const STOREFRONT_API_URL = 'https://multiverse-laharicollections.myshopify.com//api/2024-01/graphql.json';
const ACCESS_TOKEN = '7cde6f698f79d40de98952fa4930de7c';
export const fetchProducts = async () => {
    try {
        const response = await fetch(STOREFRONT_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Storefront-Access-Token': ACCESS_TOKEN
            },
            body: JSON.stringify({
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
       `
            })
        });
        const data = await response.json();
        return data.data.products.edges.map(({ node }) => ({
            id: node.id,
            name: node.title,
            description: node.description,
            logo: node.images.edges[0]?.node.url,
            website: node.onlineStoreUrl,
            categories: [node.productType],
            vendor: node.vendor
        }));
    }
    catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};
