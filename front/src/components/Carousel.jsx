import React from "react";
import slide1 from "../imagesTeam/basquetcrop.jpg"
import slide2 from "../imagesTeam/gentecrop.jpg"

import slide3 from "../imagesTeam/futbolcrop.jpg"


function Carousel() {
  return (
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
      <div className="carousel-inner ">
        <div className="carousel-item active" data-bs-interval="10000">
          <img
            src={slide1} className="h-50 d-inline-block"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block font-weight-bold">
            <h5 class="text-white">Basquet</h5>
            <p class="text-white font-weight-bold bg-secondary rounded">Presentación oficial del plantel sub-16 de basquet de cara a los Torneos Evita 2022 </p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="6000">
          <img
            src={slide2} className="h-50 d-inline-block"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 class="text-white">Social</h5>
            <p class="text-white bg-secondary rounded">Veni a ver los partidos del Mundial Qatar 2022 en pantalla gigante con la mejor hinchada atheniense y participa del sorteo de un pernil de cerdo. </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={slide3}
            className="h-50 d-inline-block"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h3 class="text-white">Futbol</h3>
            <p class="text-white bolder bg-secondary rounded">El último 4 de agosto comenzó la pretemporada de fútbol infantil en todas las divisiones de cara a la temporada 22/23</p>
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
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

  );
}

export default Carousel;


/*

/* 

<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
              <img class="d-block w-100 img-fluid img-slider" src={slide1} alt="First slide"/>
              <div class="carousel-caption">
                <h2>Welcome!</h2>
              <p>...</p>
            </div>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100 img-fluid img-slider" src={slide1} alt="Second slide"/>
                <div class="carousel-caption">
                <h2>Traditional Italian Cuisine</h2>
              <p>...</p>
            </div>
            </div>
            <div class="carousel-item">
                <img class="d-block w-100 img-fluid img-slider" src={slide1} alt="Third slide"/>
                <div class="carousel-caption">
                <h2>Selected Products</h2>
              <p>...</p>
            </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
      {/* 	<a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a> */


