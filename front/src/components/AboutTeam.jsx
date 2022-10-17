import React from 'react';
import { useEffect } from 'react';
import Juan from '../imagesTeam/Juan.jpg'
import Bren from '../imagesTeam/Bren.jpg'
import Nahue from '../imagesTeam/Nahue.jpg'
import Mati from '../imagesTeam/Mati.jpg'
import Lau from '../imagesTeam/Lau.jpg'
import Santi from '../imagesTeam/Santi.png'
import Cin from '../imagesTeam/Cin.jpg'
//import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

function AboutTeam() {
    useEffect(() => { //esto lleva la pantalla (o el scroll mejor dicho) arriba del todo. 
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <h1>Conoce a nuestro equipo de desarrollo</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card" >
                        <img src={Juan} class="card-img-top" alt="juan" />
                        <div class="card-body">
                            <h5 class="card-title">Juan Bosque</h5>
                            <p class="card-text">Esta es una tarjeta más larga con texto de apoyo a continuación como introducción natural a contenido adicional. Este contenido es un poco más largo.</p>
                            <div>
                              {/*   <a href="https://www.linkedin.com/in/juan-bosque-front-end/" target="_blank"><AiFillLinkedin /> </a>
                                <a href="https://github.com/juanchos85" target="_blank"><AiFillGithub /></a> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={Bren} class="card-img-top" alt="brenda" />
                        <div class="card-body">
                            <h5 class="card-title">Brenda Alaniz</h5>
                            <p class="card-text">Esta es una tarjeta más larga con texto de apoyo a continuación como introducción natural a contenido adicional. Este contenido es un poco más largo.</p>
                            <div>
                              {/*   <a href="https://www.linkedin.com/in/juan-bosque-front-end/" target="_blank"><AiFillLinkedin /> </a>
                                <a href="https://github.com/juanchos85" target="_blank"><AiFillGithub /></a> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={Nahue} class="card-img-top" alt="nahuel" />
                        <div class="card-body">
                            <h5 class="card-title">Nahuel Cittadino</h5>
                            <p class="card-text">Esta es una tarjeta más larga con texto de apoyo a continuación como introducción natural a contenido adicional.</p>
                            <div>
                              {/*   <a href="https://www.linkedin.com/in/juan-bosque-front-end/" target="_blank"><AiFillLinkedin /> </a>
                                <a href="https://github.com/juanchos85" target="_blank"><AiFillGithub /></a> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={Lau} class="card-img-top" alt="laura" />
                        <div class="card-body">
                            <h5 class="card-title">Laura Marcenaro</h5>
                            <p class="card-text">Esta es una tarjeta más larga con texto de apoyo a continuación como introducción natural a contenido adicional. Este contenido es un poco más largo.</p>
                            <div>
                              {/*   <a href="https://www.linkedin.com/in/juan-bosque-front-end/" target="_blank"><AiFillLinkedin /> </a>
                                <a href="https://github.com/juanchos85" target="_blank"><AiFillGithub /></a> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={Mati} class="card-img-top" alt="matias" />
                        <div class="card-body">
                            <h5 class="card-title">Matías Tula</h5>
                            <p class="card-text">Esta es una tarjeta más larga con texto de apoyo a continuación como introducción natural a contenido adicional. Este contenido es un poco más largo.</p>
                            <div>
                              {/*   <a href="https://www.linkedin.com/in/juan-bosque-front-end/" target="_blank"><AiFillLinkedin /> </a>
                                <a href="https://github.com/juanchos85" target="_blank"><AiFillGithub /></a> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={Cin} class="card-img-top" alt="cinthya" />
                        <div class="card-body">
                            <h5 class="card-title">Cinthya Molina</h5>
                            <p class="card-text">Esta es una tarjeta más larga con texto de apoyo a continuación como introducción natural a contenido adicional. Este contenido es un poco más largo.</p>
                            <div>
                              {/*   <a href="https://www.linkedin.com/in/juan-bosque-front-end/" target="_blank"><AiFillLinkedin /> </a>
                                <a href="https://github.com/juanchos85" target="_blank"><AiFillGithub /></a> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={Santi} class="card-img-top" alt="santiago" />
                        <div class="card-body">
                            <h5 class="card-title">Santiago Fernandez</h5>
                            <p class="card-text">Esta es una tarjeta más larga con texto de apoyo a continuación como introducción natural a contenido adicional. Este contenido es un poco más largo.</p>
                            <div>
                              {/*   <a href="https://www.linkedin.com/in/juan-bosque-front-end/" target="_blank"><AiFillLinkedin /> </a>
                                <a href="https://github.com/juanchos85" target="_blank"><AiFillGithub /></a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default AboutTeam;

/*  */

