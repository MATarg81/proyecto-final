import React from 'react'
import futbolretro from '../imagesTeam/Regional.jpg'
import fundadores from '../imagesTeam/fundadores byn.PNG'
import cancha from '../imagesTeam/atenas-cancha.jpg'
import pileta from '../imagesTeam/pileta.jpg'

function About() {
  return (

    <div className="d-flex align-items-start">

      <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">

        <button className="nav-link active" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="true">El club</button>

        <button className="nav-link " id="v-pills-history-tab" data-bs-toggle="pill" data-bs-target="#v-pills-history" type="button" role="tab" aria-controls="v-pills-history" aria-selected="true">Historia</button>

        <button className="nav-link" id="v-pills-more-tab" data-bs-toggle="pill" data-bs-target="#v-pills-more" type="button" role="tab" aria-controls="v-pills-more" aria-selected="true" >Más que un club</button>

      </div>

      <div className="tab-content" id="v-pills-tabContent">

        <div className="tab-pane fade" id="v-pills-history" role="tabpanel" aria-labelledby="v-pills-history-tab" tabindex="0">

          <div class="card mb-3">
            {/* <img src={futbolretro} height='200px' class="card-img-top" alt="..." /> culo*/}
            <div class="card-body">
              <h5 class="card-title">Fundado en 1800a.c</h5>
              <p class="card-text">

              </p>
              <p class="card-text"><small class="text-muted"> El Club Athenas fue fundado el 24 de octubre de 1977 por la fusión de dos clubes integrados por jóvenes. Uno de ellos era el Club Atenas For Ever, compuesto por atenienses que inmigraron a nuestro pais durante la 2° Guerra Mundial y el otro era el Asociacion Deportiva Gladiadores formado jóvenes de recursos bajos y con distintas problematicas como adicciones, antecedentes penales, etc.</small></p>
              <p class="card-text"><small class="text-muted"> Ambos clubes, antes de la fusión, tenían similares características: jugaban al fútbol en terrenos cedidos. </small></p>
              <p class="card-text"><small class="text-muted"> El barrio era, entonces, demasiado pequeño para la existencia de dos entidades y no pasó mucho tiempo sin que comenzara a pensarse en la fusión de ambas. Resultando asi la creacion del Club Athenas</small></p>
            </div>
            <img src={futbolretro} class="card-img-top" alt="..." />
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Fundadores</h5>
              <p class="card-text">

              </p>
              <p class="card-text"><small class="text-muted">Eleuterio Kyrgiakos y Roberto Fernandez, presidentes del Club Atenas For Ever y Aosciacion Deportiva Gladiadores, respectivamente. Fotografia tomada el dia de la fundacion, cuando ambas entidades se fusionaron.   </small></p>
            </div>

          </div>

          <img src={fundadores} class="card-img-bottom" alt="..." />


        </div>

        <div className="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">
     
          <div class="card mb-3" max-width="540px">
            <div class="row g-0">
              <div class="col-md-4">
                <img src={cancha} class="img-fluid rounded-start" alt="..." /> 
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Estadio Monte Olimpo</h5>
                  <p class="card-text">
                    Estadio que sirve para los equipos masculinos y femeninos de futbol,tanto para entrenamiento y partidos. Ademas suele alquilarse para eventos musicales, el más importante de ellos fue el brindado por Duki en enero del 2022.
                  </p>
                  <p class="card-text"><small class="text-muted">Las dimensiones del campo de juego son de 102mx62m</small></p>
                </div>
              </div>
            </div>
          </div>

          <div class="card mb-3" max-width="540px">
            <div class="row g-0">
              <div class="col-md-4">
                <img src={pileta} class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Pileta de natación</h5>
                  <p class="card-text">
                    La pileta del Club, la cual cuenta con instalaciones completas y en buen estado se utiliza para las clases de natacion, aquagym y waterpolo.
                  </p>
                  <p class="card-text"><small class="text-muted">Posee 50m de largo. Profundidad de 4m.</small></p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="tab-pane fade" id="v-pills-more" role="tabpanel" aria-labelledby="v-pills-more-tab" tabindex="0">

          <div>
            <h1> MÁS QUE UN CLUB </h1>

            <div class="card mb-3" max-width="540px" >
              <div class="row g-0">
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">MÁS QUE PALABRAS</h5>
                    <p class="card-text">
                      texto comentario etc....
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="card mb-3" max-width="540px">
              <div class="row g-0">
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">MÁS QUE GÉNERO</h5>
                    <p class="card-text">
                      texto comentario etc....
                    </p>
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

export default About