import { useCart } from "../context/CartContext";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      return total + (item.product.price * item.quantity);
    }, 0);
  };

  if (cart.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Cart</h2>
        <p className="text-gray-600">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
        <button
          onClick={clearCart}
          className="text-red-600 hover:text-red-800 text-sm font-medium"
        >
          Clear Cart
        </button>
      </div>

      <div className="space-y-4">
        {cart.map((item) => (
          <div key={item.product.id} className="flex items-center gap-4 border-b pb-4">
            <img
              src={item.product.image_url}
              alt={item.product.title}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">{item.product.title}</h3>
              <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
              <p className="text-blue-600 font-semibold">
                ${(item.product.price * item.quantity).toFixed(2)}
              </p>
            </div>
            <button
              onClick={() => removeFromCart(item.product.id)}
              className="text-gray-500 hover:text-red-600"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">Total:</span>
          <span className="text-xl font-bold text-blue-600">
            ${calculateTotal().toFixed(2)}
          </span>
        </div>
        <button
          className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Checkout
        </button>
      </div>
    </div>
  );
} 