import React from "react";

function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="4000">
            <img src="/img/noticia1.jpg" className="d-block" alt="..." style={{height: 400}} />
            <div className="carousel-caption d-none d-md-block">
              <h5>Título de la noticia</h5>
              <p>
                Descripción de la imagen/noticia
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <img src="/img/noticia2.jpg" className="d-block" alt="..." style={{height: 400}} />
            <div className="carousel-caption d-none d-md-block align-text-bottom">
              <h5>Título de la noticia</h5>
              <p>
              Descripción de la imagen/noticia
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/img/noticia3.jpg" className="d-block" alt="..." style={{height: 400}} />
            <div className="carousel-caption d-none d-md-block">
              <h5>Título de la noticia</h5>
              <p>
              Descripción de la imagen/noticia
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
