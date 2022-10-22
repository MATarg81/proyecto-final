import React from 'react';
import { useEffect } from 'react';
import Juan from '../imagesTeam/Juan.jpg'
import Bren from '../imagesTeam/Bren.jpg'
import Nahue from '../imagesTeam/Nahue.jpg'
import Mati from '../imagesTeam/Mati.jpg'
import Lau from '../imagesTeam/Lau.jpg'
import Santi from '../imagesTeam/Santi.png'
import Cin from '../imagesTeam/Cin.jpg'
import Linkedin from '../imagesTeam/iconLinkedin.png'
import GitHub from '../imagesTeam/logogit.png'

//import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

function AboutTeam() {
    useEffect(() => { //esto lleva la pantalla (o el scroll mejor dicho) arriba del todo. 
        window.scrollTo(0, 0);
    }, []);

    return(
        <div>

            <h3 class="p-1">Conoce a nuestro equipo de desarrollo</h3>
            <div class="row row-cols-1 row-cols-md-4 g-4">
                <div class="col ">
                    <div class="card" style={{borderColor:"white"}}>
                        <img src={Juan} class="card-img-top" style={{borderRadius:"50%"}} alt="juan" />
                        <div class="card-body">
                            <h5 class="card-title text-center">Juan Bosque</h5>
                            <p class="card-text"></p>
                            <div class="d-flex justify-content-start">
                                <div class="col">
                                    <a href='https://github.com/' target="_blank">
                                        <img src={Linkedin} alt='Linkedin' />
                                    </a>
                                </div>
                                <div class="col">
                                    <a href='https://github.com/' target="_blank">
                                        <img src={GitHub} alt='Github' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card" style={{borderColor:"white"}}>
                        <img src={Bren} class="card-img-top" style={{borderRadius:"50%"}} alt="brenda" />
                        <div class="card-body">
                            <h5 class="card-title">Brenda Alaniz</h5>
                            <p class="card-text"></p>
                            <div class="d-flex justify-content-start">
                                <div class="col">
                                    <a href='https://github.com/' target="_blank">
                                        <img src={Linkedin} alt='Linkedin' />
                                    </a>
                                </div>
                                <div class="col">
                                    <a href='https://github.com/' target="_blank">
                                        <img src={GitHub} alt='Github' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card" style={{borderColor:"white"}}>
                        <img src={Nahue} class="card-img-top" alt="nahuel" style={{borderRadius:"50%"}}/>
                        <div class="card-body">
                            <h5 class="card-title">Nahuel Cittadino</h5>
                            <p class="card-text"></p>
                            <div class="d-flex justify-content-start">
                                <div class="col">
                                    <a href='https://github.com/' target="_blank">
                                        <img src={Linkedin} alt='Linkedin' />
                                    </a>
                                </div>
                                <div class="col">
                                    <a href='https://github.com/' target="_blank">
                                        <img src={GitHub} alt='Github' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card" style={{borderColor:"white"}}>
                        <img src={Lau} class="card-img-top" alt="laura" style={{borderRadius:"50%"}}/>
                        <div class="card-body">
                            <h5 class="card-title">Laura Marcenaro</h5>
                            <p class="card-text"></p>
                            <div class="d-flex justify-content-start">
                                <div class="col">
                                    <a href='https://github.com/' target="_blank">
                                        <img src={Linkedin} alt='Linkedin' />
                                    </a>
                                </div>
                                <div class="col">
                                    <a href='https://github.com/' target="_blank">
                                        <img src={GitHub} alt='Github' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card" style={{borderColor:"white"}}>
                        <img src={Mati} class="card-img-top" alt="matias" style={{borderRadius:"50%"}}/>
                        <div class="card-body">
                            <h5 class="card-title">Matías Tula</h5>
                            <p class="card-text"></p>
                            <div class="d-flex justify-content-start">
                                <div class="col">
                                    <a href='https://github.com/' target="_blank">
                                        <img src={Linkedin} alt='Linkedin' />
                                    </a>
                                </div>
                                <div class="col">
                                    <a href='https://github.com/' target="_blank">
                                        <img src={GitHub} alt='Github' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card" style={{borderColor:"white"}}>
                        <img src={Cin} class="card-img-top" alt="cinthya" style={{borderRadius:"50%"}}/>
                        <div class="card-body">
                            <h5 class="card-title">Cinthya Molina</h5>
                            <p class="card-text"></p>
                            <div class="d-flex justify-content-start">
                                <div class="col">
                                    <a href='https://github.com/' target="_blank">
                                        <img src={Linkedin} alt='Linkedin' />
                                    </a>
                                </div>
                                <div class="col">
                                    <a href='https://github.com/' target="_blank">
                                        <img src={GitHub} alt='Github' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card" style={{borderColor:"white"}}>
                        <img src={Santi} class="card-img-top" alt="santiago" style={{borderRadius:"50%"}}/>
                        <div class="card-body">
                            <h5 class="card-title">Santiago Fernandez</h5>
                            <p class="card-text"></p>
                            <div class="d-flex justify-content-start">
                                <div class="col">
                                    <a href='https://github.com/' target="_blank">
                                        <img src={Linkedin} alt='Linkedin' />
                                    </a>
                                </div>
                                <div class="col">
                                    <a href='https://github.com/' target="_blank">
                                        <img src={GitHub} alt='Github' />
                                    </a>
                                </div>
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

