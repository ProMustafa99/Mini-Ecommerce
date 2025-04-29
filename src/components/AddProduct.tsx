import { useState } from "react";
import { Product } from "../types/product.type";
import { XMarkIcon } from "@heroicons/react/24/outline";
import QuantitySelector from "./QuantitySelector";
import { useCart } from "../context/CartContext";

interface AddProductProps {
  product: Product;
  onClose: () => void;
}

export default function AddProduct({ product, onClose }: AddProductProps) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        
        <div className="mb-4">
          <img 
            src={product.image_url} 
            alt={product.title} 
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>

        <div className="mb-4">
          <p className="text-gray-600 mb-2">{product.description}</p>
          <p className="text-2xl font-bold text-blue-600 mb-2">${product.price}</p>
          <p className="text-sm text-gray-500">
            <span className="mr-1">Delivery:</span>
            <span className="font-medium">${product.delivery_fee}</span>
          </p>
        </div>

        <div className="flex items-center justify-between mb-6">
          <QuantitySelector 
            initialQuantity={quantity}
            onQuantityChange={handleQuantityChange}
          />
          <p className="text-lg font-semibold">
            Total: ${(product.price * quantity).toFixed(2)}
          </p>
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
