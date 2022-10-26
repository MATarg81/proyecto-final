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
      <h3 className="p-1">Conoce a nuestro equipo de desarrollo</h3>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        <div className="col ">
          <div className="card" style={{ borderColor: "white" }}>
            <img
              src={Juan}
              className="card-img-top"
              style={{ borderRadius: "50%" }}
              alt="juan"
            />
            <div className="card-body">
              <h5 className="card-title text-center">Juan Bosque</h5>
              <p className="card-text"></p>
              <div className="d-flex justify-content-start">
                <div className="col">
                  <a href="https://github.com/" target="_blank">
                    <img src={Linkedin} alt="Linkedin" />
                  </a>
                </div>
                <div className="col">
                  <a href="https://github.com/" target="_blank">
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
              style={{ borderRadius: "50%" }}
              alt="brenda"
            />
            <div className="card-body">
              <h5 className="card-title">Brenda Alaniz</h5>
              <p className="card-text"></p>
              <div className="d-flex justify-content-start">
                <div className="col">
                  <a href="https://github.com/" target="_blank">
                    <img src={Linkedin} alt="Linkedin" />
                  </a>
                </div>
                <div className="col">
                  <a href="https://github.com/" target="_blank">
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
              style={{ borderRadius: "50%" }}
            />
            <div className="card-body">
              <h5 className="card-title">Nahuel Cittadino</h5>
              <p className="card-text"></p>
              <div className="d-flex justify-content-start">
                <div className="col">
                  <a href="https://github.com/" target="_blank">
                    <img src={Linkedin} alt="Linkedin" />
                  </a>
                </div>
                <div className="col">
                  <a href="https://github.com/" target="_blank">
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
              style={{ borderRadius: "50%" }}
            />
            <div className="card-body">
              <h5 className="card-title">Laura Marcenaro</h5>
              <p className="card-text"></p>
              <div className="d-flex justify-content-start">
                <div className="col">
                  <a href="https://github.com/" target="_blank">
                    <img src={Linkedin} alt="Linkedin" />
                  </a>
                </div>
                <div className="col">
                  <a href="https://github.com/" target="_blank">
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
              style={{ borderRadius: "50%" }}
            />
            <div className="card-body">
              <h5 className="card-title">Matías Tula</h5>
              <p className="card-text"></p>
              <div className="d-flex justify-content-start">
                <div className="col">
                  <a href="https://github.com/" target="_blank">
                    <img src={Linkedin} alt="Linkedin" />
                  </a>
                </div>
                <div className="col">
                  <a href="https://github.com/" target="_blank">
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
              style={{ borderRadius: "50%" }}
            />
            <div className="card-body">
              <h5 className="card-title">Cinthya Molina</h5>
              <p className="card-text"></p>
              <div className="d-flex justify-content-start">
                <div className="col">
                  <a href="https://github.com/" target="_blank">
                    <img src={Linkedin} alt="Linkedin" />
                  </a>
                </div>
                <div className="col">
                  <a href="https://github.com/" target="_blank">
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
              style={{ borderRadius: "50%" }}
            />
            <div className="card-body">
              <h5 className="card-title">Santiago Fernandez</h5>
              <p className="card-text"></p>
              <div className="d-flex justify-content-start">
                <div className="col">
                  <a href="https://github.com/" target="_blank">
                    <img src={Linkedin} alt="Linkedin" />
                  </a>
                </div>
                <div className="col">
                  <a href="https://github.com/" target="_blank">
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
