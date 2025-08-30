import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import BookGrid from "./components/BookGrid";
import Pager from "./components/Pager";
import DarkModeToggle from "./components/DarkModeToggle";
import useOpenLibrary from "./hooks/useOpenLibrary";

export default function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const { data, loading, error } = useOpenLibrary({ query, page });
  const books = data?.docs || [];
  const totalPages = Math.min(50, Math.ceil((data?.numFound || 0) / 100)); // max 50 pages allowed

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="bg-blue-600 dark:bg-gray-800 text-white shadow-md p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold">📚 Book Finder</h1>
          <DarkModeToggle />
        </div>
      </header>

      {/* Search */}
      <main className="max-w-6xl mx-auto p-4">
        <SearchBar value={query} onChange={setQuery} onClear={() => setQuery("")} />

        {/* Loading / Error / Results */}
        {loading && <p className="mt-6 animate-pulse">Loading books...</p>}
        {error && <p className="mt-6 text-red-500">Error: {error}</p>}
        {!loading && !error && books.length === 0 && query && (
          <p className="mt-6 text-gray-500">No results found.</p>
        )}

        <BookGrid books={books} />

        {/* Pagination */}
        {books.length > 0 && (
          <Pager
            page={page}
            totalPages={totalPages}
            onPage={setPage}
            disabled={loading}
          />
        )}
      </main>
    </div>
  );
}
