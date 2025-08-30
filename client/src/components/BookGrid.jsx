import React from "react";
import BookCard from "./BookCard";

export default function BookGrid({ books }) {
  if (!books || books.length === 0) return null;

  return (
    <div className="grid gap-6 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {books.map((book) => (
        <BookCard key={book.key} book={book} />
      ))}
    </div>
  );
}
