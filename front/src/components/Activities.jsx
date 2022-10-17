import axios from 'axios';
import React from 'react';
import  {  useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getActivities } from '../redux/actions/activitiesActions';

export default function Activities() {

    const dispatch = useDispatch();
    const allActivities = useSelector( (state) => state.activities)
    
    useEffect(() =>{
        dispatch(getActivities())
        console.log(allActivities, ' actividadeeeeeee')
    },[dispatch])
    


    return (
    <div>

        <div>
            <h1>Actividades para realizar</h1>
            <hr />
        </div>

        <div className="card mb-3">
        <img src="https://cdn.pixabay.com/photo/2016/06/29/09/28/football-1486353__340.jpg" style={{ height:'250px', width:'50rem'}} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Futbol 5</h5>
          <p className="card-text">Entrenamiento fisico individual y en grupo. Practica de tecnicas de equipo. Partidos los fines de semana</p>
          <p className="card-text"><small className="text-muted">Lunes, Jueves, Domingos</small></p>
          <p className="card-text"><small className="text-muted">19 hrs</small></p>
          <button> Inscribirse </button>
        </div>
      </div>

      <div className="card mb-3">
        <img src="https://static8.depositphotos.com/1437210/950/i/450/depositphotos_9501246-stock-photo-athletic-swimmer-in-action-in.jpg" style={{ height:'250px', width:'50rem'}} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Natacion</h5>
          <p className="card-text">Pileta libre o entrenamiento guiado. Pileta de 25 y 50 metros disponibles</p>
          <p className="card-text"><small className="text-muted">Martes, Miecoles, Viernes</small></p>
          <p className="card-text"><small className="text-muted">17 hrs</small></p>
          <button> Inscribirse </button>
        </div>

      </div>

      <div className="card mb-3">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHBq0UhudtRZgN03MUHenWy5qQVeOhHSx7xg&usqp=CAU" style={{ height:'250px', width:'50rem'}} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Basquet</h5>
          <p className="card-text">Entrenamiento fisico individual y en grupo. Practica de tecnicas de equipo. Partidos los fines de semana</p>
          <p className="card-text"><small className="text-muted">Miercoles, Viernes, Domingos</small></p>
          <p className="card-text"><small className="text-muted">14 hrs</small></p>
          <button> Inscribirse </button>
        </div>

    </div>  
    </div>  

    );
}

