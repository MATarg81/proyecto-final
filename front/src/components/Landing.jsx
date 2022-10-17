import React from 'react'
import { Link } from 'react-router-dom';


function Landing() {
    return (
        <div>
            <div class="container">
                <main class="row mb-4">
                    <div class="col-md-6 text-center">
                        <img src="" alt="" id="main-image" />
                    </div>
                    <div class="col-md-6 text-center my-auto">
                        <h1 class="font-weight-bolder">Club Athenas</h1>
                        <p>El Club Athenas es una institución que actúa, fomenta y desarrolla actividades socio-culturales y deportivas.</p>
                        <Link to='/home'>
                            <button class="btn btn-primary">Entrar</button>
                        </Link>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Landing;