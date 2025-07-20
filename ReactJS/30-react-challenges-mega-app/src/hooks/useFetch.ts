import { useState, useEffect } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);

    async function fetchData() {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const result = await res.json();
        setLoading(false);
        setData(result);
      } catch (err) {
        setLoading(false);
        setError(err instanceof Error ? err.message : "An error occurred");
      }
    }

    fetchData();
  }, []);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
