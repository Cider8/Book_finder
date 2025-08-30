import React from "react";

export default function SearchBar({ value, onChange, onClear }) {
  return (
    <div className="flex gap-2 mt-6">
      <input
        type="text"
        placeholder="Search books by title..."
        className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-800 dark:border-gray-700"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button
          onClick={onClear}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Clear
        </button>
      )}
    </div>
  );
}
