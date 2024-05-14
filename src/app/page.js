"use client";

import Peliculas from "./ui/Peliculas";
import { useState, useEffect } from "react";
import Pagination from "./ui/Pagination";

export default function Home() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/getPeliculas")
      .then((response) => response.json())
      .then((data) => {
        setPeliculas(data.peliculasData);
      })
      .catch((error) => {
        console.error("Hubo un problema al obtener las películas:", error);
      });
  }, []);

  const updateMovies = (newMovies) => {
    setPeliculas(newMovies);
  };

  return (
    <>
      <section>
        <Peliculas peliculas={peliculas} />
        <Pagination updateMovies={updateMovies} />
      </section>
    </>
  );
}
