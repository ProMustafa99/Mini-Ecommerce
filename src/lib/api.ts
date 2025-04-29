import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const fetchProducts = async (
  sort?: number,
  priceFrom?: number,
  priceTo?: number,
  searchTerm?: string
) => {
  try {
    const response = await api.get("/product", {
      params: {
        sort,
        price_from: priceFrom,
        price_to: priceTo,
        search_term: searchTerm
      },
    });
    return response.data.data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const fetchProductById = async (id: string) => {
  try {
    const response = await api.get(`/product/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};
