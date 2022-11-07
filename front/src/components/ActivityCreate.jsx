import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { postActivity } from "../redux/actions/activitiesActions";
import upImage from "./CreateProduct/cloudinary";
import { get_users } from "../redux/actionsCreator/usersActions";

const ActivityCreate = function () {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(get_users()); //eslint-disable-next-line
  }, []);

  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: "",
    detail: "",
    days: "",
    times: "",
    img: "",
  });

  // console.log(input, "inputttt");

  function validate(input) {
    const errors = {};
    if (!input.name)
      errors.name = "Please complete with the name of the activity";
    if (!input.detail)
      errors.detail = "Please complete with the details of the activity";
    if (!input.days)
      errors.days = "Add the days on which the activity will take place";
    if (!input.times) errors.times = "Required schedule";
    if (!input.img) errors.img = "Please add an image about the activity";
    return errors;
  }
  const handleImg = async (e) => {
    const upLoeadedImg = await upImage(e.target.files[0]);

    setInput({
      ...input,
      img: upLoeadedImg.url,
    });

    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleChange = (e) => {
    setInput((prevInput) => {
      const newInput = {
        ...prevInput,
        [e.target.name]: e.target.value,
      };
      const validations = validate(newInput);
      setErrors(validations);
      return newInput;
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (Object.values(errors).length > 0) {
      alert("Please complete the information required");
    } else if (
      input.name === "" &&
      input.detail === "" &&
      input.days === "" &&
      input.times === "" &&
      input.img === ""
    ) {
      alert("Please complete the form");
    } else {
      dispatch(postActivity(input));
      alert("Created Succesfully!");
      setInput({
        name: "",
        detail: "",
        days: "",
        times: "",
        img: "",
      });
      navigate("/actividades");
    }
  }

  return (
    <div>
      <div className="container-fluid">
        <button
          type="button"
          class="btn btn-outline-dark"
          data-bs-toggle="modal"
          data-bs-target="#createActivities"
        >
          Crear actividad
        </button>
        <div
          class="modal fade"
          id="createActivities"
          tabindex="-1"
          aria-labelledby="createActivityLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="createActivityLabel">
                  Editar producto
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div className="activityCreate">
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <div
                      className="mb-3 row mt-3 g-2"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <label htmlFor="name" className="form-label">
                        Nombre de actividad
                      </label>
                      <input
                        style={{ width: "600px" }}
                        type="text"
                        className="form-control mb-3"
                        id="name"
                        aria-describedby="name"
                        placeholder="Name..."
                        value={input.name}
                        name="name"
                        required
                        onChange={(e) => handleChange(e)}
                      />
                      {errors.name && <p>{errors.name}</p>}

                      <label htmlFor="detail" className="form-label">
                        Detalle de la actividad
                      </label>
                      <input
                        style={{ width: "600px" }}
                        type="text"
                        className="form-control mb-3"
                        id="detail"
                        aria-describedby="detail"
                        placeholder="Detail..."
                        value={input.detail}
                        name="detail"
                        required
                        onChange={(e) => handleChange(e)}
                      />
                      {errors.detail && <p>{errors.detail}</p>}

                      <label htmlFor="days" className="form-label">
                        Days
                      </label>
                      <input
                        style={{ width: "600px" }}
                        type="text"
                        className="form-control mb-3"
                        id="days"
                        aria-describedby="days"
                        placeholder="Days..."
                        value={input.days}
                        name="days"
                        required
                        onChange={(e) => handleChange(e)}
                      />
                      {errors.days && <p>{errors.days}</p>}

                      <label htmlFor="times" className="form-label">
                        Horarios
                      </label>
                      <input
                        style={{ width: "600px" }}
                        type="number"
                        className="form-control mb-3"
                        id="times"
                        placeholder="Times..."
                        value={input.times}
                        name="times"
                        required
                        onChange={(e) => handleChange(e)}
                      />
                      {errors.times && <p>{errors.times}</p>}

                      <label htmlFor="img" className="form-label">
                        Imagen
                      </label>
                      <input
                        style={{ width: "600px" }}
                        type="file"
                        className="form-control"
                        id="img"
                        placeholder="Image..."
                        name="img"
                        onChange={(e) => handleImg(e)}
                      />
                      {errors.img && <p>{errors.img}</p>}

                      <br />
                      <button type="submit" className="btn btn-primary">
                        Crear
                      </button>
                      <br />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// export default withAuthenticationRequired(ActivityCreate, {
//   onRedirecting: () => <h1> redirigiendo al login, aguarde..</h1>,
// });
//<div><p>you must login or complete your profile, click here!</p><LoginButton/></div>

export default ActivityCreate;
