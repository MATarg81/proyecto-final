import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postReview } from "../redux/actionsCreator/reviewsActions";
import Reviews from "./Reviews";

export default function ReviewsCreate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    score: "",
    content: "",
    activity: "",
  });

 console.log(input, "inputttt");

  function validate(input) {
    const errors = {};
    if (!input.content) errors.content = "Please complete review required";
    return errors;
  }

  const handleChange = (e) => {
    // setInput((prevInput) => {
    //   const newInput = {
    //     ...prevInput,
    //     content: e.target.value,
    //   };
      // const validations = validate(newInput);
      // setErrors(validations);
      // return newInput;
   //});
  //  setInput({
  //   ...input,
  //   content: e.target.value,
  // })
    setInput({
        ...input,
        [e.target.name]: e.target.value,
    });
    setErrors(
        validate({
            ...input,
            [e.target.name]: e.target.value,
        }
    )
)
console.log("soy content: " + e.target.value)
};


  const handleClick = (e) => {
    setInput({
      ...input,
      score:e.target.value,
    })
    console.log(e.target.value, " soy score")
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (Object.values(errors).length > 0) {
    //   alert("Please complete the information required");
    // } else if (
    //   input.score === "" &&
    //   input.content === "" &&
    //   input.activity === ""
    // ) {
    //   alert("Please complete the form");
    // } else {
      console.log(input, " input")
      dispatch(postReview(input));
      alert("Created Succesfully!");
      setInput({
        score: "",
        content: "", 
        activity: "",
      });
      // console.log(setInput, "setInput");
      navigate("/actividades");
    }
  

  return (
    <div>
      {/* <div class="col-12"> */}
        <div class="card-header">
          <h1>Reseñas y calificaciones</h1>
        </div>

        <div class="card-body">
          {/* <div class="col-12"> */}
            <h5 class="card-title">
              Deja tu comentario para que podamos seguir creciendo
            </h5>

            <form onSubmit={(e) => handleSubmit(e)}>
              <div
                className="form-label"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                  
                      <label
                        for="radio1"
                        style={{ color: "gray", cursor: "pointer" }}
                        class="fa fa-star"
                        aria-hidden="true"
                      ></label>
                      <input
                        id="radio1"
                        type="radio"
                        style={{ display: "none" }}
                        name="estrellas"
                        value="1"
                        onClick={(e) => handleClick(e)}
                      />
                   

                    
                      <label
                        for="radio2"
                        style={{ color: "gray", cursor: "pointer" }}
                        class="fa fa-star"
                      ></label>
                      <input
                        id="radio2"
                        type="radio"
                        style={{ display: "none" }}
                        name="estrellas"
                        value="2"
                        onClick={(e) => handleClick(e)}
                      />
                    

                    
                      <label
                        for="radio3"
                        style={{ color: "gray", cursor: "pointer" }}
                        class="fa fa-star"
                      ></label>
                      <input
                        id="radio3"
                        type="radio"
                        style={{ display: "none" }}
                        name="estrellas"
                        value="3"
                        onClick={(e) => handleClick(e)}
                      />
                    

                    
                      <label
                        for="radio4"
                        style={{ color: "gray", cursor: "pointer" }}
                        class="fa fa-star"
                      ></label>
                      <input
                        id="radio4"
                        type="radio"
                        style={{ display: "none" }}
                        name="estrellas"
                        value="4"
                        onClick={(e) => handleClick(e)}
                      />
                    

                    
                      <label
                        for="radio5"
                        style={{ color: "gray", cursor: "pointer" }}
                        class="fa fa-star"
                      ></label>
                      <input
                        id="radio5"
                        type="radio"
                        style={{ display: "none" }}
                        name="estrellas"
                        value="5"
                        onClick={(e) => handleClick(e)}
                      />


                      <label for="content" className="form-label">
                        Tu comentario
                      </label>
                      <input
                        style={{ width: "600px" }}
                        type="text"
                        className="form-control mb-3"
                        id="content"
                        aria-describedby="content"
                        placeholder="Content..."
                        value={input.content}
                        name="content"
                        required
                        onChange={(e) => handleChange(e)}
                      />
                      {errors.content && <p>{errors.content}</p>}

                      <label for="activity" className="form-label">
                        Actividad
                      </label>
                      <input
                        style={{ width: "600px" }}
                        type="text"
                        className="form-control mb-3"
                        id="activity"
                        aria-describedby="activity"
                        placeholder="Activity..."
                        value={input.activity}
                        name="activity"
                        required
                        onChange={(e) => handleChange(e)}
                      />
                      {errors.activity && <p>{errors.activity}</p>}

              <hr />

              <button type="submit" className="btn btn-primary">
              Enviar
              </button>
              
              </div>
            </form>

            <Reviews/>
            
          </div>
        </div>
    //   </div>
    // </div>
  )
};
