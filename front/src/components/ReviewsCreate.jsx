import React from "react";
import{ Link, useNavigate } from 'react-router-dom';
import  { useState } from 'react';
import { useDispatch } from "react-redux";
import { postReview } from '../redux/actionsCreator/reviewsActions';

export default function ReviewsCreate() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [ errors, setErrors ] = useState({});
  const [ input, setInput ] = useState({
      score: '',
      content: '',
      activity:'',
      name:''
  })

  function validate(input) {
    const errors = {};
    if (!input.content) errors.content = 'Please complete review required';
    if (!input.activity) errors.activity = 'Add the activity';
    return errors;
};


  const handleChange = (e) => {
    setInput((prevInput) => {
      const newInput = {
          ...prevInput,
          [e.target.name]: e.target.value
      }
    const validations = validate(newInput);
    setErrors(validations)
    return newInput
  })
};

const handleClick = (score) => {
  console.log('click')
  // dispatch(addScore(score));
};



function handleSubmit(e){
    e.preventDefault();
  if (Object.values(errors).length > 0) {
      alert("Please complete the information required");
  } else if (
     input.score === '' && 
     input.content === '' &&
     input.activity === ''
     ) {
     alert("Please complete the form");}
 else {
    dispatch(postReview(input))
    alert('Created Succesfully!')
    setInput({
        score: '',
        content: '',
        activity:''
    })
    navigate('/home')
 }
};

return (
<div>
       <div class="col-12">

          <div class="card-header">
             <h1>Reseñas y calificaciones</h1>
          </div>

          <div class="card-body">
            <div class="col-12">
               <h5 class="card-title">Deja tu comentario para que podamos seguir creciendo</h5>
              
              <form onSubmit={(e) => handleSubmit(e)}>

                <div className="form-label" style={{display:"flex", flexDirection:"row" ,alignItems:"center"}}>

                    <div>
                      <label for="radio1" style={{color:'gray', cursor:"pointer"}} class="fa fa-star" aria-hidden="true"></label>
                      <input id="0" type="radio" style={{display:'none'}} name="estrellas" value={input.score} onClick={(e)=>handleClick(e)}/>
                    </div>

                 <div>
                   <label for="radio2" style={{color:'gray', cursor:"pointer"}} class="fa fa-star" ></label>
                   <input id="1" type="radio" style={{display:'none'}} name="estrellas" value={input.score} onClick={(e)=>handleClick(e)}/>
                  </div>

                  <div>
                     <label for="radio3" style={{color:'gray', cursor:"pointer"}} class="fa fa-star" ></label>
                     <input id="1" type="radio" style={{display:'none'}} name="estrellas" value={input.score} onClick={(e)=>handleClick(e)}/>
                   </div>

                   <div>
                      <label for="radio4" style={{color:'gray', cursor:"pointer"}} class="fa fa-star" ></label>
                      <input id="3" type="radio" style={{display:'none'}} name="estrellas" value={input.score} onClick={(e)=>handleClick(e)}/>
                   </div>

                   <div>
                     <label for="radio5" style={{color:'gray', cursor:"pointer"}} class="fa fa-star" ></label>
                     <input id="4" type="radio" style={{display:'none'}} name="estrellas" value={input.score} onClick={(e)=>handleClick(e)}/>
                   </div>
                  </div>

                  <div className="col-12" style={{display:"flex", flexDirection:"column" ,alignItems:"center"}}>
                  <label for="content" className="form-label">Tu comentario</label>
                  <input
                    style={{width:'600px'}}
                    type="text"
                    id="content"
                    value={input.content} 
                    name='content' 
                    required
                    onChange={(e)=>handleChange(e)}
                  />
                  {
                    errors.content && (
                        <p>{errors.content}</p>
                    )
                  }
                  </div>

                  <div className="col-12" style={{display:"flex", flexDirection:"column" ,alignItems:"center"}}>
                  <label for="activity" className="form-label">Actividad</label>
                  <input
                    style={{width:'600px'}}
                    type="activity"
                    id="activity"
                    value={input.activity} 
                    name='activity' 
                    required
                    onChange={(e)=>handleChange(e)}
                  />
                  {
                    errors.content && (
                        <p>{errors.content}</p>
                    )
                  }
                  </div>

              </form>

              <button type="submit" className="btn btn-primary">Enviar</button>
            </div>
          </div>
      </div>
  </div>
)}
