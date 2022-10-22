import React from 'react'

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
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmj-dZVH9oBx6Q2a9VQQd6ZJ4g8WR5jUEy9A&usqp=CAU" height='200px' class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Fundado en 1800a.c</h5>
              <p class="card-text">

              </p>
              <p class="card-text"><small class="text-muted"> descripcion resumen anecdota</small></p>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Fundadores</h5>
              <p class="card-text">

              </p>
              <p class="card-text"><small class="text-muted">Los fundadores, algo sobre ellos</small></p>
            </div>
            <img src="https://www.fototecasannicolas.org/media/sanicolas/images/1/5/1/72155_ca_object_representations_media_15183_page.jpg" height='200px' class="card-img-bottom" alt="..." />
          </div>



        </div>

        <div class="tab-pane fade show active" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">



          <div class="card mb-3" max-width="540px">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-3ZolC4VH3foq6HAeCjJtfhJUwyVkq9IGRw&usqp=CAU" class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Alguna foto del club</h5>
                  <p class="card-text">
                    texto comentario etc....
                  </p>
                  <p class="card-text"><small class="text-muted">descripcion opcional o algo</small></p>
                </div>
              </div>
            </div>
          </div>

          <div class="card mb-3" max-width="540px">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7CyvP7P3WCRggYkPebndTLpO2xTjulbOfQ&usqp=CAU" class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Mas fotos de canchas o tiendas etc</h5>
                  <p class="card-text">
                    texto comentario etc....
                  </p>
                  <p class="card-text"><small class="text-muted">descripcion opcional o algo</small></p>
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

  )
}

export default About