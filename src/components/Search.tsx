import { useState } from "react";

interface SearchProps {
  onSearch: (params: {
    searchTerm: string;
    priceFrom: number;
    priceTo: number;
    sort: number;
    page: number;
  }) => void;
}

export default function Search({ onSearch }: SearchProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [sort, setSort] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      searchTerm,
      priceFrom: parseFloat(priceFrom) || 0,
      priceTo: parseFloat(priceTo) || 1000,
      sort,
      page: 1,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Min price"
            value={priceFrom}
            onChange={(e) => setPriceFrom(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Max price"
            value={priceTo}
            onChange={(e) => setPriceTo(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <select
            value={sort}
            onChange={(e) => setSort(Number(e.target.value))}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value={0}>Sort by: Default</option>
            <option value={1}>Price: Low to High</option>
            <option value={2}>Price: High to Low</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
      >
        Search
      </button>
    </form>
  );
} 