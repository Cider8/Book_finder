import { useEffect, useState } from "react";

const BASE = "https://openlibrary.org/search.json";

export default function useOpenLibrary({ query, page = 1 }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
      setData(null);
      return;
    }

    const controller = new AbortController();
    const params = new URLSearchParams({ title: query, page: page.toString() });

    async function run() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`${BASE}?${params.toString()}`, { signal: controller.signal });
        if (!res.ok) throw new Error("Network error");
        const json = await res.json();
        setData(json);
      } catch (e) {
        if (e.name !== "AbortError") setError(e.message);
      } finally {
        setLoading(false);
      }
    }

    run();
    return () => controller.abort();
  }, [query, page]);

  return { data, loading, error };
}
