import React from 'react'
import futbolretro from '../imagesTeam/Regional.jpg'
import fundadores from '../imagesTeam/fundadores byn.PNG'
import cancha from '../imagesTeam/atenas-cancha.jpg'
import pileta from '../imagesTeam/pileta.jpg'

function About() {
  return (



    <div class="">




      <div class="d-flex justify-content-between">

        <div>
          <h1> Athenas Club </h1>
        </div>


        <div class="d-flex">

          <div>
            <button class="btn btn-primary" >El club</button>
          </div>
          <div>
            <button class="btn btn-primary " >Historia</button>
          </div>
          <div>
            <button class="btn btn-primary" >Más que un club</button>
          </div>

        </div>


      </div>





      <div class="tab-content" id="v-pills-tabContent">

        <div class="tab-pane fade" id="v-pills-history" role="tabpanel" aria-labelledby="v-pills-history-tab" tabindex="0">


          <div class="card mb-3">
            {/* <img src={futbolretro} height='200px' class="card-img-top" alt="..." /> */}
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
     

        <div class="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">




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

        <div class="tab-pane fade" id="v-pills-more" role="tabpanel" aria-labelledby="v-pills-more-tab" tabindex="0">

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
    </div>
  )
}

export default About