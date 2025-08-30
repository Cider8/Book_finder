import React, { useEffect, useState } from "react";

export default function SearchBar({ value, onChange, onSubmit, loading }) {
  const [local, setLocal] = useState(value);

  useEffect(() => setLocal(value), [value]);

  useEffect(() => {
    const id = setTimeout(() => {
      onChange(local);
    }, 400);
    return () => clearTimeout(id);
  }, [local]);

  function handle(e) {
    const { name, value } = e.target;
    setLocal((s) => ({ ...s, [name]: value }));
  }

  return (
    <div className="space-y-4">
      {/* Input fields */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <input
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
          name="title"
          placeholder="Title"
          value={local.title}
          onChange={handle}
        />
        <input
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
          name="author"
          placeholder="Author"
          value={local.author}
          onChange={handle}
        />
        <input
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
          name="subject"
          placeholder="Subject"
          value={local.subject}
          onChange={handle}
        />
        <input
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600"
          name="isbn"
          placeholder="ISBN"
          value={local.isbn}
          onChange={handle}
        />
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-3 items-center">
        <select
          className="px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:ring-2 focus:ring-blue-500 outline-none"
          name="sort"
          value={local.sort}
          onChange={handle}
        >
          <option value="relevance">Relevance</option>
          <option value="new">Newest</option>
        </select>

        <button
          className={`px-5 py-2 rounded-lg text-white font-medium transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
          onClick={onSubmit}
          disabled={loading}
        >
          {loading ? "Searching…" : "Search"}
        </button>

        <button
          className="px-5 py-2 rounded-lg border border-gray-400 text-gray-700 dark:text-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          onClick={() =>
            setLocal({
              title: "",
              author: "",
              subject: "",
              isbn: "",
              sort: "relevance",
              page: 1,
            })
          }
          disabled={loading}
        >
          Clear
        </button>
      </div>
    </div>
  );
}
