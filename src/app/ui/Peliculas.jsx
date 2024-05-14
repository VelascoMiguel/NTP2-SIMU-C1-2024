import Pelicula from "./Pelicula";

export default function Peliculas({ peliculas }) {
  return (
    <>
      <section
        className="peliculas"
        style={{ display: "flex", flexWrap: "wrap", gap: "3vw" }}
      >
        {peliculas.map((pelicula, index) => (
          <Pelicula
            key={index}
            poster={pelicula.poster}
            title={pelicula.title}
            fullplot={pelicula.fullplot}
          ></Pelicula>
        ))}
      </section>
    </>
  );
}
