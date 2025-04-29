import { useState } from "react";

interface SortDropdownProps {
  onSortChange: (sortOption: number) => void;
}

export default function SortDropdown({ onSortChange }: SortDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Default");

  const sortOptions = [
    { value: 0, label: "Default" },
    { value: 1, label: "Price: Low to High" },
    { value: 2, label: "Price: High to Low" },
  ];

  const handleOptionClick = (value: number, label: string) => {
    setSelectedOption(label);
    onSortChange(value);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <span>Sort by: {selectedOption}</span>
        <svg
          className={`w-5 h-5 ml-2 transition-transform duration-200 ${
            isOpen ? "transform rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 w-full mt-1 bg-white rounded-md shadow-lg">
          <ul className="py-1">
            {sortOptions.map((option) => (
              <li key={option.value}>
                <button
                  onClick={() => handleOptionClick(option.value, option.label)}
                  className={`block w-full px-4 py-2 text-sm text-left ${
                    selectedOption === option.label
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {option.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
