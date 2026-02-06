import React from "react";
import dataFront from "./data/front.json";
import dataBack from "./data/back.json";
import dataProyects from "./data/projects.json";
import "./App.css";

function App() {
  const front = Object.values(dataFront);
  const back = Object.values(dataBack);
  const proyectos = Object.values(dataProyects);

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
        <h2 className="proyectos">Proyectos</h2>
        <div className="contenedorProyectos">
          {proyectos.map(({ key, name, estado, tecnology, about, links }) => {
            const linkEntries = Object.entries(links || {});

            return (
              <div className="proyecto" key={key}>
                <h3>{name}</h3>
                <div className="estado">
                  <h4>Estado:</h4> 
                  <p>{estado}</p>
                </div>

                <div className="tecnologias">
                  <h4>Tecnologías:</h4>
                  <div className="tecnologias-lista">
                    <p>
                      <strong>Frontend: </strong>
                      {tecnology.front.join(", ")}
                    </p>
                    {tecnology.back && tecnology.back.length ? (
                      <p>
                        <strong>Backend: </strong>
                        {tecnology.back.join(", ")}
                      </p>
                    ) : (
                      <p />
                    )}
                  </div>
                </div>

                <div className="descripcion">
                  <h4>Descripción:</h4>
                  <p className="textDescript">{about}</p>
                </div>

                {linkEntries.length > 0 && (
                  <div className="enlaces">
                    {linkEntries.map(([tipo, url]) => (
                      <a
                        key={tipo}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="enlace"
                      >
                        {tipo === "front" && "Frontend"}
                        {tipo === "back" && "Backend"}
                        {tipo === "demo" && "Demo"}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <footer>
        <p>Contacto: ale.naengram@gmail.com</p>
        <p>Teléfono: +34 722636670</p>
      </footer>
    </>
  );
}

export default App;
