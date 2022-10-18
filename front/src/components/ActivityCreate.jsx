import React from "react";
import{ Link, useHistory } from 'react-router-dom'
import  { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { postActivity } from '../redux/actions/activitiesActions';




export default function ActivityCreate() {

    const dispatch = useDispatch()


    const [ input, setInput ] = useState({
        name: '',
        detail: '',
        days:'',
        times:'',
        img:'', 
    })

    console.log(input, 'inputttt')

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(postActivity(input))
        alert('Created Succesfully!')
        setInput({
            name: '',
            detail: '',
            days:'',
            times:'',
            img:'', 
        })

     }

  return (
    <div>
        <Link to='/actividades'><button > Go Back </button></Link>
      <div className="activityCreate">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-3" style={{display:"flex", flexDirection:"column" ,alignItems:"center"}}>

            <label for="name" className="form-label">
              Nombre de actividad
            </label>
            <input
              style={{width:'600px'}}
              type="text"
              className="form-control mb-3"
              id="name"
              aria-describedby="name"
              placeholder="Name..."
              value={input.name} 
              name='name' 
              required
              onChange={(e)=>handleChange(e)}
            />

            <label for="detail" className="form-label">
              Detalle de la actividad
            </label>
            <input
            style={{width:'600px'}}
              type="text"
              className="form-control mb-3"
              id="detail"
              aria-describedby="detail"
              placeholder="Detail..."
              value={input.detail} 
              name='detail' 
              required
              onChange={(e)=>handleChange(e)}
            />

            <label for="days" className="form-label">
              Days
            </label>
            <input
            style={{width:'600px'}}
              type="text"
              className="form-control mb-3"
              id="days"
              aria-describedby="days"
              placeholder="Days..."
              value={input.days} 
              name='days' 
              required
              onChange={(e)=>handleChange(e)}
            />
          

          
            <label for="times" className="form-label">
              Horarios
            </label>
            <input
            style={{width:'600px'}}
              type="number"
              className="form-control mb-3"
              id="times"
              placeholder="Times..."
              value={input.times} 
              name='times' 
              required
              onChange={(e)=>handleChange(e)}
            />

            <label for="img" className="form-label">
              Imagen
            </label>
            <input
            style={{width:'600px'}}
              type="iamge"
              className="form-control"
              id="img"
              placeholder="Image..."
              value={input.img} 
              name='img' 
              onChange={(e)=>handleChange(e)}
            />
          <hr />
          <button type="submit" className="btn btn-primary">
            Crear
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}

 
