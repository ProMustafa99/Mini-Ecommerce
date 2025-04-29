import { useState } from "react";

interface QuantitySelectorProps {
  initialQuantity?: number;
  onQuantityChange: (quantity: number) => void;
}

export default function QuantitySelector({ 
  initialQuantity = 1, 
  onQuantityChange 
}: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleChange = (value: number) => {
    if (value >= 1) {
      setQuantity(value);
      onQuantityChange(value);
    }
  };

  return (
    <div className="flex items-center border rounded-lg">
      <button 
        onClick={() => handleChange(quantity - 1)}
        className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-l-lg"
      >
        -
      </button>
      <input
        type="number"
        value={quantity}
        onChange={(e) => handleChange(parseInt(e.target.value))}
        className="w-12 text-center border-x py-1 focus:outline-none"
        min="1"
      />
      <button 
        onClick={() => handleChange(quantity + 1)}
        className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-r-lg"
      >
        +
      </button>
    </div>
  );
} 