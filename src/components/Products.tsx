import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { Product } from "../types/product.type";
import AddProduct from "./AddProduct";
import { fetchProducts } from "../lib/api";
import FilterPriceBar from "./FilterPriceBar";

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [sortOption, setSortOption] = useState(0);
  const [priceFrom, setPriceFrom] = useState(0);
  const [priceTo, setPriceTo] = useState(1000);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchProductsData = async () => {
      const products = await fetchProducts(sortOption, priceFrom, priceTo, searchTerm);
      setProducts(products);
    };
    fetchProductsData();
  }, [sortOption, priceFrom, priceTo, searchTerm]);

  const handleSortChange = (newSortOption: number) => {
    setSortOption(newSortOption);
  };

  const handlePriceChange = (from: number, to: number) => {
    setPriceFrom(from);
    setPriceTo(to);
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <>
      <FilterPriceBar 
        onSortChange={handleSortChange} 
        onPriceChange={handlePriceChange}
        onSearchChange={handleSearchChange}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-32">
              <img
                src={product.image_url}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {product.title}
              </h2>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {product.description}
              </p>
              <div className="flex justify-between items-center">
                <p className="text-2xl font-bold text-blue-600">
                  ${product.price}
                </p>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors duration-300"
                  aria-label="Add to cart"
                >
                  <ShoppingCartIcon className="h-6 w-6" />
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                <span className="mr-1">Delivery:</span>
                <span className="font-medium">${product.delivery_fee}</span>
              </p>
            </div>
          </div>
        ))}

        {selectedProduct && (
          <AddProduct
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </div>
    </>
  );
}
