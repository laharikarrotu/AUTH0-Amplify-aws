import axios from 'axios';
// You can replace this with your actual API endpoint
const BASE_URL = 'https://fakestoreapi.com';
export const fetchProducts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/products`);
        // Transform the API response to match our Product interface
        return response.data.map((item) => ({
            id: item.id.toString(),
            name: item.title,
            description: item.description,
            price: item.price,
            inStock: true,
            storeId: 'store1',
            brand: item.category,
            originalUrl: '#',
            imageUrl: item.image
        }));
    }
    catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
};
