import { useEffect, useState } from "react";

export function useMovies(query, callback) {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const KEY = "bc73829";

  useEffect(() => {
    callback?.();
    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );
        const data = await res.json();
        console.log(data);
        if (data.Response === "False")
          throw new Error(data.Error ? data.Error : "Movie not found");
        setMovies(data.Search);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    if (query.length === 0) {
      setMovies([]);
      setError("");
      return;
    }
    //closeSelectMovie();
    fetchMovies();
  }, [query]);

  return { error, isLoading, movies };
}
