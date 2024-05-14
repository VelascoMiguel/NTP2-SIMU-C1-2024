import { useEffect, useCallback } from "react";
import { useState } from "react";

export default function Pagination({ updateMovies }) {
  const [cantPaginas, setCantPaginas] = useState(1);
  const cantidadPeliculas = 20;

  const changePage = (increment) => {
    setCantPaginas((prevCantPaginas) => prevCantPaginas + increment);
  };

  const fetchData = useCallback(async () => {
    const data = {
      cantPaginas: cantPaginas,
      cantPeliculas: cantidadPeliculas,
    };

    try {
      const response = await fetch("http://localhost:8000/getPeliculasByPage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const newData = await response.json();
      console.log(newData);
      updateMovies(newData.peliculasData); // Actualiza las películas
    } catch (error) {
      console.error(
        "Hubo un problema al obtener las películas por página:",
        error
      );
    }
  }, [cantPaginas, cantidadPeliculas, updateMovies]);

  useEffect(() => {
    fetchData();
  }, [fetchData]); // Se ejecutará cada vez que cambie fetchData

  return (
    <>
      <button
        style={{ width: "200px", height: "200px", backgroundColor: "red" }}
        onClick={() => changePage(1)}
      >
        +
      </button>
      <button
        style={{ width: "200px", height: "200px", backgroundColor: "red" }}
        onClick={() => changePage(-1)}
      >
        -
      </button>
    </>
  );
}
