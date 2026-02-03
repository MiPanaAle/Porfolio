import React from "react";
import dataFront from "./data/front.json";
import dataBack from "./data/back.json";
import "./App.css";

function App() {
  const front = Object.values(dataFront);
  const back = Object.values(dataBack);

  return (
    <>
      <header>
        <h1>ALE NAVARRO</h1>
        <p>PROGRAMADORA WEB</p>
      </header>

      <section className="section">
        <h2>Sobre mí</h2>
        <p className="yo">
          Soy estudiante de Programación Multiplataforma con gran interés por el
          desarrollo frontend y la creación de aplicaciones. Disfruto
          transformando ideas en interfaces claras, funcionales y atractivas,
          cuidando tanto el diseño como el código.
        </p>
      </section>

      <section className="section">
        <h2>Tecnologías</h2>
        <div className="tecContenedor">
          <h3>Frontend</h3>
          <div className="contenedor">
            {front.map(({ key, tecnologia, img }) => (
              <div className="tec" key={key}>
                <div className="contenedorImg">
                  <img src={img} alt={tecnologia} className="img" />
                </div>
                <p>{tecnologia}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="tecContenedor">
          <h3>Backend</h3>
          <div className="contenedor">
            {back.map(({ key, tecnologia, img }) => (
              <div key={key} className="tec">
                <div className="contenedorImg">
                  <img src={img} alt={tecnologia} className="img" />
                </div>
                <p>{tecnologia}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="tecContenedor">
          <h3>Control de versiones</h3>
          <div className="contenedor">
            <div className="tec">
              <div className="contenedorImg">
                <img
                  src="https://i.pinimg.com/originals/01/e5/00/01e500fca29c045d432b64f285f9c229.png"
                  alt="Git"
                  className="img"
                />
              </div>
              <p>Git</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="titulo">Proyectos</h2>
        <article>
          <h3>Ascenso Real (TFG)</h3>
          <p>
            Juego en el que un Peón quiere llegar a ser algo más que un simple
            peón, teniendo que superar diferentes pruebas que le ponen otras
            piezas.
          </p>
          <div className="links">
            <p>
              <a href="https://github.com/TFG-DAM-G1/front.git">
                Haga click para ver el repositorio del frontend
              </a>
            </p>
            <p>
              <a href="https://github.com/TFG-DAM-G1/back.git">
                Haga click para ver el repositorio del backend
              </a>
            </p>
          </div>
        </article>
        <article>
          <h3>Dashboard del Titanic</h3>
          <p>
            Es un dashboard del Titanic que muestra los supervivientes y los
            fallecidos que hubo, con animaciones.
          </p>
          <div className="links">
            <p>
              <a href="https://github.com/MiPanaAle/Dashboard-Titanic-React.git">
                Haga click para ver el repositorio
              </a>
            </p>
            <p>
              <a href="https://dashboard-titanic-react-iei5.vercel.app/">
                Haga click para ver el despliegue del proyecto
              </a>
            </p>
          </div>
        </article>
        <article>
          <h3>Tienda de cómics (intermodular)</h3>
          <p>
            Tienda en la que se puede comprar, vender e intercambiar cómics.
          </p>
          <div className="links">
            <p>
              <a href="https://github.com/Proyecto-DAW-Segundo-Curso/tienda-de-comics.git">
                Haga click para ver el repositorio del frontend
              </a>
            </p>
            <p>
              <a href="https://github.com/Proyecto-DAW-Segundo-Curso/tienda-de-comics-bbdd.git">
                Haga click para ver el repositorio del backend
              </a>
            </p>
          </div>
        </article>
      </section>

      <footer>
        <p>Contacto: ale.naengram@gmail.com</p>
        <p>Teléfono: +34 722636670</p>
      </footer>
    </>
  );
}

export default App;
