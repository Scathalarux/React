import { useState, useRef, useMemo, useCallback } from "react";
import { searchMovies } from "../services/movies.js";
//import ejemploRespuesta from "../mock/ejemploRespuesta.json";
//import ejemploRespuestaSinResultados from "../mock/ejemploRespuestaSinResultados.json";

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMovies, setErrorMovies] = useState(null);
  const previousSearch = useRef(search);

  /* useCallback es lo mismo que el useMemo enfocado a las funciones, por lo
    que se podría utilizar useMemo tranquilamente pero es más eficiente el
    useCalback (useCallback, por debajo utiliza useMemo, pero simplifica sintaxis)
  */

  const getMovies = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return;

    try {
      setLoading(true);
      setErrorMovies(null);
      previousSearch.current = search;
      const newMovies = await searchMovies({ search });
      setMovies(newMovies);
    } catch (e) {
      setErrorMovies(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies;
  }, [sort, movies]);

  return { movies: sortedMovies, getMovies, loading, errorMovies };
}
