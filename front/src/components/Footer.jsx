import React from "react";
import { Link } from "react-router-dom";
//import { aboutTeam } from './AboutTeam';

function Footer() {
  return (
    <div style={{ background: "#352d39" }}>
      <footer class="text-center text-white" style={{ background: "#352d39" }}>
        <div class="container p-4" style={{ background: "#352d39" }}>


          <section class="">
            <form action="">
              <div class="row d-flex justify-content-center">

                <div class="col-auto">
                  <p class="pt-2">
                    <strong>Registrate en nuestro newsletter para estar siempre informado</strong>
                  </p>
                </div>



                <div class="col-md-5 col-12">

                  <div class="form-outline form-white mb-4">
                    <input type="email" id="form5Example21" class="form-control" />
                    <label class="form-label" for="form5Example21">Dirección de email</label>
                  </div>
                </div>



                <div class="col-auto">

                  <button type="submit" class="btn btn-outline-light mb-4">
                    Suscribirse
                  </button>
                </div>

              </div>
            </form>
          </section>



          <section class="mb-4">
            {/*  <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
              repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
              eum harum corrupti dicta, aliquam sequi voluptate quas.
            </p> */}
          </section>



          <section class="">
            <div class="row d-flex justify-content-around">

              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-capitalize">dev.team</h5>

                <ul class="list-unstyled mb-0">
                  <Link to="/aboutTeam" className="text-reset" >
                    <p>
                      Equipo de desarrollo 
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-emoji-sunglasses" viewBox="0 0 16 16">
                        <path d="M4.968 9.75a.5.5 0 1 0-.866.5A4.498 4.498 0 0 0 8 12.5a4.5 4.5 0 0 0 3.898-2.25.5.5 0 1 0-.866-.5A3.498 3.498 0 0 1 8 11.5a3.498 3.498 0 0 1-3.032-1.75zM7 5.116V5a1 1 0 0 0-1-1H3.28a1 1 0 0 0-.97 1.243l.311 1.242A2 2 0 0 0 4.561 8H5a2 2 0 0 0 1.994-1.839A2.99 2.99 0 0 1 8 6c.393 0 .74.064 1.006.161A2 2 0 0 0 11 8h.438a2 2 0 0 0 1.94-1.515l.311-1.242A1 1 0 0 0 12.72 4H10a1 1 0 0 0-1 1v.116A4.22 4.22 0 0 0 8 5c-.35 0-.69.04-1 .116z" />
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-1 0A7 7 0 1 0 1 8a7 7 0 0 0 14 0z" />
                      </svg>
                    </p>

                  </Link>
                  
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-capitalize">Sponsors</h5>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#!" class="text-white">Farmacia Gomez</a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">Bicyshop</a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">Jugueterias Tio Mario</a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">Ripsa</a>
                  </li>
                </ul>
              </div>



              {/* <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-uppercase">Links</h5>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#!" class="text-white">Link 1</a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">Link 2</a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">Link 3</a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">Link 4</a>
                  </li>
                </ul>
              </div> */}



              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class="text-capitalize">Contacto</h5>

                <ul class="list-unstyled mb-0">
                  <li>
                    <a href="#!" class="text-white">+54 2236589647</a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">clubathenasatr@gmail.com</a>
                  </li>
                  <li>
                    <a href="#!" class="text-white">Av. Domingo Faustino Trello 420</a>
                  </li>                  
                </ul>
              </div>

            </div>
          </section>

        </div>



        <div class="text-center p-3" style={{ background: "rgba(0, 0, 0, 0.2)" }}>
          © 2022 Copyright:
          <a class="text-white" href="https://www.soyhenry.com/">Henry</a>
        </div>

      </footer>

    </div>
  );
}

export default Footer;
