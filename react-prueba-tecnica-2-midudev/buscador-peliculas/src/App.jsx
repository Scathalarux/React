import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import debounce from "just-debounce-it";
import "./App.css";
import { useCallback, useEffect, useRef, useState } from "react";

/*

  Forma no controlada de manejar los datos del formulario. 2 opciones:
    - const { search } = Object.fromEntries(new FormData(event.target));
    - useRef()

*/
/*

  Forma controlada de manejar los datos del formulario
    * Es más lento; cada vez que cambia se renderiza
    * Controlado por React; puede ayudar en validación; no se depende del DOM

    - Input [onChange() + value] + useState()
 

*/

function useSearch() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  /* Alternativa 1 para validad y mostrar errores  */

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }

    if (search === "") {
      setError("No se puede buscar una película vacía");
      return;
    }

    if (search.match(/^\d+$/)) {
      setError("No se puede buscar una película con un número");
      return;
    }
    if (search.length < 2) {
      setError("La búsquecda debe tener al menos 2 caracteres");
      return;
    }

    setError(null);
  }, [search]);

  /* Alternativa 2 para validad y mostrar errores

  const handleChange = (event) => {
    const newQuery = event.target.value;

    //Prevalidación
    if(newQuery.statsWith(' ')) return;

    setQuery(newQuery);

    //Se puede introducir aquí la validación
    if (newQuery === "") {
      setError("No se puede buscar una película vacía");
      return;
    };

    if (newQuery.match(/^\d+$/)) {
      setError("No se puede buscar una película con un número");
      return;
    };

    if (newQuery.length < 2) {
      setError("La búsquecda debe tener al menos 2 caracteres");
      return;
    };

    setError(null);
  };
  
  
  
  */

  return { search, setSearch, error };
}

function App() {
  const [sort, setSort] = useState(false);
  const { search, setSearch, error } = useSearch();
  const { movies, getMovies, loading, errorMovies } = useMovies({
    search,
    sort,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    //Se podría utilizar el hook useRef pero es más eficiente así
    /* Alternativa para manejar 1 única variable
    const data = new FormData(event.target);
    const search = data.get("search");*/
    // const { search } = Object.fromEntries(new FormData(event.target));

    //se inyecta el valor del search por parámetro para que la función se pueda crear una única vez y no cada vez que cambiaba el search
    getMovies({ search });
  };

  //Como esto se crearía en cada renderizado, empleamos useCallback
  const deboucedGetMovies = useCallback(
    debounce((search) => getMovies({ search }), 300), [getMovies]
  );

  const handleChange = (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);

    //getMovies({ search: newSearch });
    deboucedGetMovies(newSearch);

    //Se puede introducir aquí la validación
  };

  const handleSort = () => {
    setSort(!sort);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form onSubmit={handleSubmit} className="form">
          <input
            /*ref={inputRef}*/
            type="text"
            name="search"
            onChange={handleChange}
            value={search}
            placeholder="Coco, Star Wars, The Matrix..."
          />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button>Buscar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </header>
      <main>
        {loading ? <p>Cargando...</p> : <Movies movies={movies} />}
        {errorMovies && <p style={{ color: "red" }}>{errorMovies}</p>}
      </main>
    </div>
  );
}

export default App;
