import { useState } from "react";
import SortDropdown from "./SortDropdown";

interface FilterPriceBarProps {
  onSortChange: (sortOption: number) => void;
  onPriceChange: (priceFrom: number, priceTo: number) => void;
  onSearchChange: (searchTerm: string) => void;
}

export default function FilterPriceBar({ 
  onSortChange, 
  onPriceChange,
  onSearchChange 
}: FilterPriceBarProps) {
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handlePriceChange = () => {
    onPriceChange(
      parseFloat(priceFrom) || 0,
      parseFloat(priceTo) || 1000
    );
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearchChange(value);
  };

  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <div className="w-64">
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="w-64">
        <input
          type="number"
          placeholder="Price from"
          value={priceFrom}
          onChange={(e) => setPriceFrom(e.target.value)}
          onBlur={handlePriceChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="w-64">
        <input
          type="number"
          placeholder="Price to"
          value={priceTo}
          onChange={(e) => setPriceTo(e.target.value)}
          onBlur={handlePriceChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="w-64">
        <SortDropdown onSortChange={onSortChange} />
      </div>
    </div>
  );
}
