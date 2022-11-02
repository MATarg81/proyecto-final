import React, { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_users, get_users } from "../redux/actionsCreator/usersActions";
import { useNavigate } from "react-router-dom";
//import axios from "axios";


import { useAuth0 } from "@auth0/auth0-react";

//AGREGAR = 'dateOfBirth' y 'address'
//La confirmación de contraseña no oculta los caracteres
function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {user, isAuthenticated} = useAuth0()

 

  const [error, setError] = useState({});

  const [input, setInput] = useState({
    name: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    password: "",
    validatePass: "",
    dateOfBirth: "",
    address: "",
    postalCode: "",
  });

  let pass = input.password;
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

    //Validate password
    if (input.password) {
      if (input.password.length < 8) {
        error.password = "La contraseña es demasiado corta";
      } else if (!input.password.match(/[A-Z]/)) {
        error.password = "Debe contener al menos una mayúscula";
      } else if (!input.password.match(/\d/)) {
        error.password = "Debe tener al menos un número";
      } else if (
        !input.password.match(/[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/)
      ) {
        error.password = "Debe tener al menos un símbolo";
      }
    }

    //Confirm password
    if (input.validatePass && pass) {
      if (pass !== input.validatePass) {
        error.validatePass = "Las contraseñas no coinciden";
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
      !input.password ||
      !input.validatePass ||
      !input.phoneNumber ||
      !input.dateOfBirth ||
      !input.address ||
      !input.postalCode
    ) {
      alert("Por favor completa todos los campos");
    } else {
      dispatch(add_users(input));
      navigate("/home");
    }
  }


  return ( isAuthenticated &&
    <>
      <div class="container">
        <form
          class="row mt-3 g-2 needs-validation"
          onSubmit={handleSubmit}
          noValidate
        >
          <h1 class="col-12">Complete yor data to proced</h1>

          {/* Nombre */}
          <div class="col-6">
            <label for="nameInput" class="form-label">
              Nombre
            </label>
            <input
              type="name"
              id="nameInput"
              placeholder="Nombre(s)..."
              onChange={handleChange}
              name="name"
              value={input.name}
              class={
                input.name && !error.name
                  ? "form-control is-valid"
                  : "form-control is-invalid"
              }
            ></input>
            <div class="invalid-feedback">
              {error.name ? error.name : "Este campo es obligatorio"}
            </div>
          </div>

          {/* Apellido */}
          <div class="col-6">
            <label for="lastnameInput" class="form-label">
              Apellido
            </label>
            <input
              type="lastname"
              id="lastnameInput"
              placeholder="Apellido(s)..."
              onChange={handleChange}
              name="lastname"
              value={input.lastname}
              class={
                input.lastname && !error.lastname
                  ? "form-control is-valid"
                  : "form-control is-invalid"
              }
            ></input>
            <div class="invalid-feedback">
              {error.lastname ? error.lastname : "Este campo es obligatorio"}
            </div>
          </div>

          {/* Email */}
          <div class="col-4">
            <label for="emailInput" class="form-label">
              Email
            </label>
            <input
              type="email"
              id="emailInput"
              placeholder="Email..."
              onChange={handleChange}
              name="email"
              value={input.email}
              class={
                input.email && !error.email
                  ? "form-control is-valid"
                  : "form-control is-invalid"
              }
            ></input>
            <div class="invalid-feedback">
              {error.email ? error.email : "Este campo es obligatorio"}
            </div>
          </div>

          {/* Contraseña */}
          <div class="col-4">
            <label for="passwordInput" class="form-label">
              Contraseña
            </label>
            <input
              type="password"
              id="passwordInput"
              placeholder="Contraseña..."
              onChange={handleChange}
              name="password"
              value={input.password}
              class={
                input.password && !error.password
                  ? "form-control is-valid"
                  : "form-control is-invalid"
              }
            ></input>
            <div class="invalid-feedback">
              {error.password ? error.password : "Este campo es obligatorio"}
            </div>
          </div>

          {/* Confirmacion de contraseña */}
          <div class="col-4">
            <label for="validatePassInput" class="form-label">
              Confirmación
            </label>
            <input
              type="password"
              id="validatePassInput"
              placeholder="Escribe la contraseña nuevamente..."
              onChange={handleChange}
              name="validatePass"
              value={input.validatePass}
              class={
                input.validatePass && !error.validatePass
                  ? "form-control is-valid"
                  : "form-control is-invalid"
              }
            ></input>
            <div class="invalid-feedback">
              {error.validatePass
                ? error.validatePass
                : "Este campo es obligatorio"}
            </div>
          </div>

          {/* Dirección */}
          <div class="col-4">
            <label for="addressInput" class="form-label">
              Dirección
            </label>
            <input
              type="address"
              id="addressInput"
              placeholder="Dirección..."
              onChange={handleChange}
              name="address"
              value={input.address}
              class={
                input.address && !error.address
                  ? "form-control is-valid"
                  : "form-control is-invalid"
              }
            ></input>
            <div class="invalid-feedback">
              {error.address ? error.address : "Este campo es obligatorio"}
            </div>
          </div>

          {/* Código Postal */}
          <div class="col-1">
            <label for="postalCodeInput" class="form-label">
              C.P.
            </label>
            <input
              type="postalCode"
              id="postalCodeInput"
              placeholder="CP..."
              onChange={handleChange}
              name="postalCode"
              value={input.postalCode}
              class={
                input.postalCode && !error.postalCode
                  ? "form-control is-valid"
                  : "form-control is-invalid"
              }
            ></input>
            <div class="invalid-feedback">
              {error.postalCode
                ? error.postalCode
                : "Este campo es obligatorio"}
            </div>
          </div>

          {/* Fecha de nacimiento */}
          <div class="col-2">
            <label for="dateOfBirthInput" class="form-label">
              Fecha de nacimiento
            </label>
            <input
              type="date"
              id="dateOfBirthInput"
              onChange={handleChange}
              name="dateOfBirth"
              value={input.dateOfBirth}
              class={
                input.dateOfBirth && !error.dateOfBirth
                  ? "form-control is-valid"
                  : "form-control is-invalid"
              }
            ></input>
            <div class="invalid-feedback">
              {error.dateOfBirth
                ? error.dateOfBirth
                : "Este campo es obligatorio"}
            </div>
          </div>

          {/* Número de contacto */}
          <div class="col-5">
            <label for="phoneNumberInput" class="form-label">
              Número de contacto
            </label>
            <input
              type="phoneNumber"
              id="phoneNumberInput"
              placeholder="Teléfono..."
              onChange={handleChange}
              name="phoneNumber"
              value={input.phoneNumber}
              class={
                input.phoneNumber && !error.phoneNumber
                  ? "form-control is-valid"
                  : "form-control is-invalid"
              }
            ></input>
            <div class="invalid-feedback">
              {error.phoneNumber
                ? error.phoneNumber
                : "Este campo es obligatorio"}
            </div>
          </div>
          <div class="mt-3 mb-3">
            <button type="submit" class="btn btn-primary">
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </>
  );
              

}

export default Register;
