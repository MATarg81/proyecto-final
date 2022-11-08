import React from "react";
import futbolretro from "../imagesTeam/Regional.jpg";
import fundadores from "../imagesTeam/fundadores byn.PNG";
import cancha from "../imagesTeam/atenas-cancha.jpg";
import pileta from "../imagesTeam/pileta.jpg";

function About() {
  return (
    <div className="">
      <div className="d-flex justify-content-between nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical" >
        <div>
          <h1> Athenas Club</h1>
        </div>
        <div className="d-flex">
          <div>
            <button className="btn btn-primary" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="true">El club</button>
          </div>
          <div>
            <button className="btn btn-primary" id="v-pills-history-tab" data-bs-toggle="pill" data-bs-target="#v-pills-history" type="button" role="tab" aria-controls="v-pills-history" aria-selected="true">Historia</button>
          </div>
          <div>
            <button className="btn btn-primary" id="v-pills-more-tab" data-bs-toggle="pill" data-bs-target="#v-pills-more" type="button" role="tab" aria-controls="v-pills-more" aria-selected="true">Más que un club</button>
          </div>
        </div>
      </div>
      <div className="tab-content" id="v-pills-tabContent">
        <div
          className="tab-pane fade"
          id="v-pills-history"
          role="tabpanel"
          aria-labelledby="v-pills-history-tab"
          tabIndex="0">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Fundado en 1977</h5>
              <p className="card-text">
                <small className="text-muted">
                  {" "}
                  El Club Athenas fue fundado el 24 de octubre de 1977 por la
                  fusión de dos clubes integrados por jóvenes. Uno de ellos era
                  el Club Atenas For Ever, compuesto por atenienses que
                  inmigraron a nuestro pais durante la 2° Guerra Mundial y el
                  otro era el Asociacion Deportiva Gladiadores formado jóvenes
                  de recursos bajos y con distintas problematicas como
                  adicciones, antecedentes penales, etc.
                </small>
              </p>
              <p className="card-text">
                <small className="text-muted">
                  {" "}
                  Ambos clubes, antes de la fusión, tenían similares
                  características: jugaban al fútbol en terrenos cedidos.{" "}
                </small>
              </p>
              <p className="card-text">
                <small className="text-muted">
                  {" "}
                  El barrio era, entonces, demasiado pequeño para la existencia
                  de dos entidades y no pasó mucho tiempo sin que comenzara a
                  pensarse en la fusión de ambas. Resultando asi la creacion del
                  Club Athenas
                </small>
              </p>
            </div>
            <img src={futbolretro} className="card-img-top" alt="..." />
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Fundadores</h5>
              <p className="card-text"></p>
              <p className="card-text">
                <small className="text-muted">
                  Eleuterio Kyrgiakos y Roberto Fernandez, presidentes del Club
                  Atenas For Ever y Aosciacion Deportiva Gladiadores,
                  respectivamente. Fotografia tomada el dia de la fundacion,
                  cuando ambas entidades se fusionaron.{" "}
                </small>
              </p>
            </div>
          </div>

          <img src={fundadores} className="card-img-bottom" alt="..." />
        </div>
        <div
          className="tab-pane fade show active"
          id="v-pills-profile"
          role="tabpanel"
          aria-labelledby="v-pills-profile-tab"
          tabIndex="0"          >
          <div className="card mb-3" max-width="540px">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={cancha}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Estadio Monte Olimpo</h5>
                  <p className="card-text">
                    Estadio que sirve para los equipos masculinos y femeninos
                    de futbol,tanto para entrenamiento y partidos. Ademas
                    suele alquilarse para eventos musicales, el más importante
                    de ellos fue el brindado por Duki en enero del 2022.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Las dimensiones del campo de juego son de 102x62m
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3" max-width="540px">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={pileta}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Pileta de natación</h5>
                  <p className="card-text">
                    La pileta del Club, la cual cuenta con instalaciones
                    completas y en buen estado se utiliza para las clases de
                    natacion, aquagym y waterpolo.
                  </p>
                  <p className="card-text">
                    <small className="text-muted">
                      Posee 50m de largo. Profundidad de 4m.
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div
          className="tab-pane fade"
          id="v-pills-more"
          role="tabpanel"
          aria-labelledby="v-pills-more-tab"
          tabIndex="0">
          <div>
            <h1> MÁS QUE UN CLUB </h1>

            <div className="card mb-3" max-width="540px">
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">MÁS QUE PALABRAS</h5>
                    <p className="card-text">texto comentario etc....</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-3" max-width="540px">
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">MÁS QUE GÉNERO</h5>
                    <p className="card-text">texto comentario etc....</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="card mb-3" max-width="540px">
              <div class="row g-0">
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">MÁS QUE TALENTO</h5>
                    <p class="card-text">
                      texto comentario etc....
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>

  )
}

export default About;
