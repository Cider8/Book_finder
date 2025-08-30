import React from "react";

export default function Pager({ page, totalPages, onPage, disabled }) {
  return (
    <div className="flex items-center gap-3 justify-center mt-8">
      <button
        onClick={() => onPage(1)}
        disabled={disabled || page === 1}
        className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-40"
      >
        ⏮
      </button>
      <button
        onClick={() => onPage(Math.max(1, page - 1))}
        disabled={disabled || page === 1}
        className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-40"
      >
        Prev
      </button>
      <span className="font-medium text-gray-800 dark:text-gray-100">
        Page {page} / {totalPages}
      </span>
      <button
        onClick={() => onPage(Math.min(totalPages, page + 1))}
        disabled={disabled || page >= totalPages}
        className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-40"
      >
        Next
      </button>
      <button
        onClick={() => onPage(totalPages)}
        disabled={disabled || page >= totalPages}
        className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-40"
      >
        ⏭
      </button>
    </div>
  );
}
