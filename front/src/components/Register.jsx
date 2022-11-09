import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_users, get_users } from "../redux/actionsCreator/usersActions";
import { useNavigate } from "react-router-dom";
import Profile from './Profile'
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, user } = useAuth0()

  const stateUser = useSelector(state => state.usersReducer.users)
  const checkUser = stateUser.find(u => u.email === user.email)

  const [error, setError] = useState({});

  const [input, setInput] = useState({
    name: "",
    lastname: "",
    email: user?.email,
    phoneNumber: "",
    image: user?.picture,
    dateOfBirth: "",
    address: "",
    postalCode: "",
  });

  //let CP = input.postalCode

  const hours = [];
  for (let i = 1; i <= 24; i++) {
    hours.push(i);
  }

  function validate(input) {
    let error = {};

    //Validate name
    if (input.name) {
      if (input.name.length < 2) {
        error.name = "Debe tener al menos 2 caracteres";
      } else {
        for (let i in input.name) {
          if (input.name.charCodeAt(i) < 65 || input.name.charCodeAt(i) > 122) {
            if (
              input.name.charCodeAt(i) !== 32 &&
              input.name.charCodeAt(i) !== 39
            ) {
              error.name = "Solo puede contener letras";
            }
          }
        }
      }
    }

    //Validate lastname
    if (input.lastname) {
      if (input.lastname.length < 2) {
        error.lastname = "Debe tener al menos 2 caracteres";
      } else {
        for (let i in input.lastname) {
          if (
            input.lastname.charCodeAt(i) < 65 ||
            input.lastname.charCodeAt(i) > 122
          ) {
            if (
              input.lastname.charCodeAt(i) !== 32 &&
              input.lastname.charCodeAt(i) !== 39
            ) {
              error.lastname = "Solo puede contener letras";
            }
          }
        }
      }
    }

    //Validate email
    if (input.email) {
      if (input.email.length < 11) {
        error.email = "El mail ingresado es demasiado corto";
      } else if (!input.email.includes("@") || !input.email.includes(".com")) {
        error.email = "El email ingresado no es válido";
      }
    }

    //Validate dirección
    if (input.address) {
      if (!input.address.match(/\d/)) {
        error.address = "Por favor agrega una altura";
      }
    }

    //Validate CP
    if (input.postalCode) {
      if (input.postalCode.length !== 5) {
        error.postalCode = "Ingresa un código postal válido";
      }
      if (!input.postalCode.match(/^[A-Z]/)) {
        error.postalCode = "Debe comenzar con una mayúscula";
      }
      for (let i = 1; i < input.postalCode.length; i++) {
        if (!input.postalCode[i].match(/\d/) || input.postalCode.length !== 5) {
          error.postalCode = "Ingresa un código postal válido";
        }
      }
    }

    //Validate phone number
    if (input.phoneNumber) {
      if (!input.phoneNumber.match(/\d/)) {
        error.phoneNumber = "Debe contener números únicamente";
      } else if (input.phoneNumber.length < 10) {
        error.phoneNumber = "El número es demasiado corto";
      }
    }

    return error;
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError(
      validate({
        ...error,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (
      !input.name ||
      !input.lastname ||
      !input.email ||
      !input.phoneNumber ||
      !input.dateOfBirth ||
      !input.address ||
      !input.postalCode
    ) {
      alert("Por favor completa todos los campos");
    } else {
      dispatch(add_users(input))
      dispatch(get_users())
      navigate("/profile")
    }
  }

  if (checkUser) {
    return (
      <Profile />
    )
  }
  return (
    <>
      <div className="container">
        <form
          className="row mt-3 g-2 needs-validation"
          onSubmit={handleSubmit}
          noValidate
        >
          <h1 className="col-12 display-6 ">Bienvenido! Completa tus datos para continuar</h1>


          {/* Email */}
          <div className="col-4 ">
            <label for="emailInput" className="form-label border-bottom" style={{fontWeight:"bold"}}>
              Email
            </label>
            <div>
              <h6 class="" >
                {user?.email}
              </h6>
            </div>
            {/* <input
              type="email"
              id="emailInput"
              placeholder="Email..."
              onChange={handleChange}
              name="email"
              value={input.email}
              className={
                input.email && !error.email
                  ? "form-control is-valid"
                  : "form-control is-invalid"
              }
            ></input>
            <div className="invalid-feedback">
              {error.email ? error.email : "Este campo es obligatorio"}
            </div> */}
          </div>
          {/* Nombre */}
          <div className="col-6">
            <label for="nameInput" className="form-label border-bottom" style={{fontWeight:"bold"}}>
              Nombre
            </label>
            <input
              type="name"
              id="nameInput"
              placeholder="Nombre(s)..."
              onChange={handleChange}
              name="name"
              value={input.name}
              className={
                input.name && !error.name
                  ? "form-control is-valid rounded-pill"
                  : "form-control is-invalid rounded-pill"
              }
            ></input>
            <div className="invalid-feedback">
              {error.name ? error.name : "Este campo es obligatorio"}
            </div>
          </div>

          {/* Apellido */}
          <div className="col-6">
            <label for="lastnameInput" className="form-label border-bottom" style={{fontWeight:"bold"}}>
              Apellido
            </label>
            <input
              type="lastname"
              id="lastnameInput"
              placeholder="Apellido(s)..."
              onChange={handleChange}
              name="lastname"
              value={input.lastname}
              className={
                input.lastname && !error.lastname
                  ? "form-control is-valid rounded-pill"
                  : "form-control is-invalid rounded-pill"
              }
            ></input>
            <div className="invalid-feedback">
              {error.lastname ? error.lastname : "Este campo es obligatorio"}
            </div>
          </div>



          {/* Contraseña */}
          {/* <div className="col-4">
            <label for="passwordInput" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              id="passwordInput"
              placeholder="Contraseña..."
              onChange={handleChange}
              name="password"
              value={input.password}
              className={
                input.password && !error.password
                  ? "form-control is-valid"
                  : "form-control is-invalid"
              }
            ></input>
            <div className="invalid-feedback">
              {error.password ? error.password : "Este campo es obligatorio"}
            </div>
          </div> */}

          {/* Confirmacion de contraseña */}
          {/* <div className="col-4">
            <label for="validatePassInput" className="form-label">
              Confirmación
            </label>
            <input
              type="password"
              id="validatePassInput"
              placeholder="Escribe la contraseña nuevamente..."
              onChange={handleChange}
              name="validatePass"
              value={input.validatePass}
              className={
                input.validatePass && !error.validatePass
                  ? "form-control is-valid"
                  : "form-control is-invalid"
              }
            ></input>
            <div className="invalid-feedback">
              {error.validatePass
                ? error.validatePass
                : "Este campo es obligatorio"}
            </div>
          </div> */}

          {/* Dirección */}
          <div className="col-4">
            <label for="addressInput" className="form-label border-bottom " style={{fontWeight:"bold"}}>
              Dirección
            </label>
            <input
              type="address"
              id="addressInput"
              placeholder="Dirección..."
              onChange={handleChange}
              name="address"
              value={input.address}
              className={
                input.address && !error.address
                  ? "form-control is-valid rounded-pill"
                  : "form-control is-invalid rounded-pill"
              }
            ></input>
            <div className="invalid-feedback">
              {error.address ? error.address : "Este campo es obligatorio"}
            </div>
          </div>

          {/* Código Postal */}
          <div className="col-1">
            <label for="postalCodeInput" className="form-label border-bottom" style={{fontWeight:"bold"}}>
              C.P.
            </label>
            <input
              type="postalCode"
              id="postalCodeInput"
              placeholder="CP..."
              onChange={handleChange}
              name="postalCode"
              value={input.postalCode}
              className={
                input.postalCode && !error.postalCode
                  ? "form-control is-valid rounded-pill"
                  : "form-control is-invalid rounded-pill"
              }
            ></input>
            <div className="invalid-feedback">
              {error.postalCode
                ? error.postalCode
                : "Este campo es obligatorio"}
            </div>
          </div>

          {/* Fecha de nacimiento */}
          <div className="col-2">
            <label for="dateOfBirthInput" className="form-label border-bottom" style={{fontWeight:"bold"}}>
              Fecha de nacimiento
            </label>
            <input
              type="date"
              id="dateOfBirthInput"
              onChange={handleChange}
              name="dateOfBirth"
              value={input.dateOfBirth}
              className={
                input.dateOfBirth && !error.dateOfBirth
                  ? "form-control is-valid rounded-pill"
                  : "form-control is-invalid rounded-pill"
              }
            ></input>
            <div className="invalid-feedback">
              {error.dateOfBirth
                ? error.dateOfBirth
                : "Este campo es obligatorio"}
            </div>
          </div>

          {/* Número de contacto */}
          <div className="col-5">
            <label for="phoneNumberInput" className="form-label border-bottom" style={{fontWeight:"bold"}}>
              Número de contacto
            </label>
            <input
              type="phoneNumber"
              id="phoneNumberInput"
              placeholder="Teléfono..."
              onChange={handleChange}
              name="phoneNumber"
              value={input.phoneNumber}
              className={
                input.phoneNumber && !error.phoneNumber
                  ? "form-control is-valid rounded-pill"
                  : "form-control is-invalid rounded-pill"
              }
            ></input>
            <div className="invalid-feedback">
              {error.phoneNumber
                ? error.phoneNumber
                : "Este campo es obligatorio"}
            </div>
          </div>
          <div className="mt-3 mb-3">
            <button type="submit" className="btn btn-outline-dark rounded-pill text-white border-white p-1"
        style={{backgroundColor:"indigo"}}>
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </>
  );
}



export default withAuthenticationRequired(Register, {
  onRedirecting: () => <h1> Loading ...</h1>,
});
