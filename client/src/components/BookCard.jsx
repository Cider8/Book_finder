import React from "react";

function coverUrl(doc) {
  
  if (doc.cover_i) {
    return `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg`;
  }

  if (doc.isbn && doc.isbn.length > 0) {
    return `https://covers.openlibrary.org/b/isbn/${doc.isbn[0]}-M.jpg`;
  }
  
  return "https://via.placeholder.com/180x260?text=No+Cover";
}

export default function BookCard({ book }) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition transform hover:-translate-y-1">
      <img
        src={coverUrl(book)}
        alt={book.title}
        className="w-full h-60 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100 truncate">
          {book.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {(book.author_name || []).join(", ") || "Unknown author"}
        </p>
        <span className="inline-block mt-2 text-xs px-2 py-1 bg-blue-100 dark:bg-blue-600 text-blue-700 dark:text-white rounded-full">
          First published: {book.first_publish_year ?? "—"}
        </span>
      </div>
      <div className="p-4 pt-0">
        <a
          className="block text-center w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          href={`https://openlibrary.org${book.key}`}
          target="_blank"
          rel="noreferrer"
        >
          📖 Details
        </a>
      </div>
    </article>
  );
}
