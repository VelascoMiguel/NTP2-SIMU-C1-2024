const express = require("express");
const path = require("path");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = process.env.PORT ? process.env.PORT : 8000;

app.use(express.json());
app.use(cors());

app.get("/getPeliculas", async (req, res) => {
  let peliculas = await axios.get(
    "https://mflixbackend.azurewebsites.net/api/movies?pageSize=20&page=1"
  );

  let peliculasData = peliculas.data;

  console.log(peliculasData);

  res.json({ peliculasData });
});

app.post("/getPeliculasByPage", async (req, res) => {
  let cantidadPeliculas = req.body.cantPeliculas;
  let cantidadPaginas = req.body.cantPaginas;

  try {
    let peliculas = await axios.get(
      `https://mflixbackend.azurewebsites.net/api/movies?pageSize=${cantidadPeliculas}&page=${cantidadPaginas}`
    );

    let peliculasData = peliculas.data;

    console.log(peliculasData);

    res.json({ peliculasData });
  } catch (error) {
    console.error("Hubo un problema al obtener las películas:", error);
    res
      .status(500)
      .json({ error: "Hubo un problema al obtener las películas" });
  }
});

app.listen(port, () => {
  console.log("Listening at", port);
});
