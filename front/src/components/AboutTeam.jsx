import React from "react";
import { useEffect } from "react";
import Juan from "../imagesTeam/Juan.jpg";
import Bren from "../imagesTeam/Bren.jpg";
import Nahue from "../imagesTeam/Nahue.jpg";
import Mati from "../imagesTeam/Mati.jpg";
import Lau from "../imagesTeam/Lau.jpg";
import Santi from "../imagesTeam/Santi.png";
import Cin from "../imagesTeam/Cin.jpg";
import Linkedin from "../imagesTeam/iconLinkedin.png";
import GitHub from "../imagesTeam/logogit.png";

//import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

function AboutTeam() {
  useEffect(() => {
    //esto lleva la pantalla (o el scroll mejor dicho) arriba del todo.
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h3 className="p-1 display-6 border-bottom">Conoce a nuestro equipo de desarrollo</h3>
      <div className="row row-cols-1 row-cols-md-4 g-4 animate__animated animate__fadeIn" >
        <div className="col ">
          <div className="card" style={{ borderColor: "white" }}>
            <img
              src={Juan}
              className="card-img-top"

              alt="juan"
            />
            <div className="card-body">
              <h5 className="card-title text-center">Juan Bosque</h5>
              <p className="card-text"></p>
              <div className="d-flex justify-content-center">
                <div className="col d-flex justify-content-center">
                  <a href="https://www.linkedin.com/in/juan-bosque-front-end/" target="_blank" rel="noreferrer" >
                    <img src={Linkedin} alt="Linkedin" />
                  </a>
                </div>
                <div className="col d-flex justify-content-center">
                  <a href="https://github.com/juanchos85" target="_blank" rel="noreferrer">
                    <img src={GitHub} alt="Github" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ borderColor: "white" }}>
            <img
              src={Bren}
              className="card-img-top"

              alt="brenda"
            />
            <div className="card-body">
              <h5 className="card-title text-center">Brenda Alaniz</h5>
              <p className="card-text"></p>
              <div className="d-flex justify-content-start">
                <div className="col d-flex justify-content-center">
                  <a href="" target="_blank" rel="noreferrer">
                    <img src={Linkedin} alt="Linkedin" />
                  </a>
                </div>
                <div className="col d-flex justify-content-center">
                  <a href="https://github.com/Macrofago096" target="_blank" rel="noreferrer">
                    <img src={GitHub} alt="Github" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ borderColor: "white" }}>
            <img
              src={Nahue}
              className="card-img-top"
              alt="nahuel"
            />
            <div className="card-body">
              <h5 className="card-title text-center">Nahuel Cittadino</h5>
              <p className="card-text"></p>
              <div className="d-flex justify-content-start">
                <div className="col d-flex justify-content-center">
                  <a href="https://www.linkedin.com/in/nahuel-cittadino-b386331b2/" target="_blank" rel="noreferrer">
                    <img src={Linkedin} alt="Linkedin" />
                  </a>
                </div>
                <div className="col d-flex justify-content-center">
                  <a href="https://github.com/wellnahuel" target="_blank" rel="noreferrer">
                    <img src={GitHub} alt="Github" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ borderColor: "white" }}>
            <img
              src={Lau}
              className="card-img-top"
              alt="laura"

            />
            <div className="card-body">
              <h5 className="card-title text-center">Laura Marcenaro</h5>
              <p className="card-text"></p>
              <div className="d-flex justify-content-start">
                <div className="col d-flex justify-content-center">
                  <a href="https://www.linkedin.com/in/laura-marcenaro-35b75098/" target="_blank" rel="noreferrer">
                    <img src={Linkedin} alt="Linkedin" />
                  </a>
                </div>
                <div className="col d-flex justify-content-center">
                  <a href="https://github.com/Azrux" target="_blank" rel="noreferrer">
                    <img src={GitHub} alt="Github" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ borderColor: "white" }}>
            <img
              src={Mati}
              className="card-img-top"
              alt="matias"

            />
            <div className="card-body">
              <h5 className="card-title text-center">Matías Tula</h5>
              <p className="card-text"></p>
              <div className="d-flex justify-content-start">
                <div className="col d-flex justify-content-center">
                  <a href="https://www.linkedin.com/in/matiastula/" target="_blank" rel="noreferrer">
                    <img src={Linkedin} alt="Linkedin" />
                  </a>
                </div>
                <div className="col d-flex justify-content-center">
                  <a href="https://github.com/MATarg81" target="_blank" rel="noreferrer">
                    <img src={GitHub} alt="Github" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ borderColor: "white" }}>
            <img
              src={Cin}
              className="card-img-top"
              alt="cinthya"

            />
            <div className="card-body">
              <h5 className="card-title text-center">Cinthya Molina</h5>
              <p className="card-text"></p>
              <div className="d-flex justify-content-start">
                <div className="col d-flex justify-content-center">
                  <a href="https://www.linkedin.com/in/cinthya-molina/" target="_blank" rel="noreferrer">
                    <img src={Linkedin} alt="Linkedin" />
                  </a>
                </div>
                <div className="col d-flex justify-content-center">
                  <a href="https://github.com/" target="_blank" rel="noreferrer">
                    <img src={GitHub} alt="Github" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card" style={{ borderColor: "white" }}>
            <img
              src={Santi}
              className="card-img-top"
              alt="santiago"

            />
            <div className="card-body">
              <h5 className="card-title text-center">Santiago Fernandez</h5>
              <p className="card-text"></p>
              <div className="d-flex justify-content-start">
                <div className="col d-flex justify-content-center">
                  <a href="https://www.linkedin.com/in/santiago-fernandez-563714239/" target="_blank" rel="noreferrer">
                    <img src={Linkedin} alt="Linkedin" />
                  </a>
                </div>
                <div className="col d-flex justify-content-center">
                  <a href="https://github.com/San896" target="_blank" rel="noreferrer">
                    <img src={GitHub} alt="Github" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutTeam;

/*  */
