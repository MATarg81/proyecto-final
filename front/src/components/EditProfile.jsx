import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  get_users_by_id,
  get_roles,
  update_user,
  get_users,
} from "../redux/actionsCreator/usersActions";
import upImage from "./CreateProduct/cloudinary";
import { useAuth0 } from "@auth0/auth0-react";

export default function EditProfile() {
  const usersState = useSelector((state) => state.usersReducer.users);
  const usersRoles = useSelector((state) => state.usersReducer.roles);
  const{ isAuthenticated, user } = useAuth0()

  const dispatch = useDispatch();
  
  const findUser = user ? usersState?.find(u => u.email === user.email) : null

  useEffect(() => {
    if (usersRoles?.length) {
      dispatch(get_roles());
    }
    if (usersState?.length === 0) {
      dispatch(get_users());
    }
    if(findUser?.length > 0) {
      dispatch(get_users_by_id(findUser.id))
    }
  }, [dispatch, usersRoles, usersState, findUser]);


  const [input, setInput] = useState({
    id: findUser?.id,
    name: "",
    lastname: "",
    dateOfBirth: "",
    phoneNumber: "",
    email: "",
    address: "",
    postalCode: "",
    password: "",
    roles: "",
  });


  function addImage(e) {
    upImage(e.target.files[0]).then((res) => {
      setInput({ ...input, img: res.url });
    });
  }

  const handleOnChange = (e) => {
    setInput({
      ...usersState,
      [e.target.name]: e.target.value,
    });
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    //ACA IRIA LA LOGICA PARA AGREGAR IMAGEN
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (!input.name) {
      setInput((input.name = usersState.name));
    }
    if (!input.lastname) {
      setInput((input.lastname = usersState.lastname));
    }
    if (!input.email) {
      setInput((input.email = usersState.email));
    }
    if (!input.dateOfBirth) {
      setInput((input.dateOfBirth = usersState.dateOfBirth));
    }
    if (!input.phoneNumber) {
      setInput((input.phoneNumber = usersState.phoneNumber));
    }
    if (!input.postalCode) {
      setInput((input.postalCode = usersState.postalCode));
    }
    if (!input.address) {
      setInput((input.address = usersState.address));
    }
    if (!input.password) {
      setInput((input.password = usersState.password));
    }
    if (!input.roles) {
      setInput((input.roles = usersState.role));
    }
    dispatch(update_user(input));
    dispatch(get_users());
    setInput({
      ...input,
      name: "",
      lastname: "",
      dateOfBirth: "",
      phoneNumber: "",
      email: "",
      address: "",
      postalCode: "",
      password: "",
      roles: "",
    });
  }

  return (
    <div>
      <button
        type="button"
        class="btn btn-outline-dark"
        data-bs-toggle="modal"
        data-bs-target="#editProfile"
      >
        Editar perfil
      </button>
      <div
        class="modal fade"
        id="editProfile"
        tabindex="-1"
        aria-labelledby="editProfileLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editProfileLabel">
                Editar perfil
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div class="modal-body">
              <title>Actualizar Perfil</title>
              <div class="">
                <h1 class="">Actualizar Perfil</h1>
                <form
                  className="row mt-3 g-2"
                  onSubmit={(e) => onHandleSubmit(e)}
                >
                  <label>Nombre</label>
                  <input
                    name="name"
                    onChange={(e) => handleOnChange(e)}
                    value={input?.name}
                    type="text"
                  />
                  <label>Apellido</label>
                  <input
                    name="lastname"
                    onChange={(e) => handleOnChange(e)}
                    value={input?.lastname}
                    type="text"
                  />

                  <label>Teléfono</label>
                  <input
                    name="phone"
                    onChange={(e) => handleOnChange(e)}
                    value={input?.phoneNumber}
                    type="text"
                  />

                  <label>E-mail</label>
                  <input
                    name="email"
                    onChange={(e) => handleOnChange(e)}
                    value={input?.email}
                    type="text"
                  />
                  <label>Direccion</label>
                  <input
                    name="adress"
                    onChange={(e) =>
                      handleOnChange(e.target.name, e.target.value)
                    }
                    value={input?.address}
                    type="text"
                  />
                  <label>Codigo Postal</label>
                  <input
                    name="postalCode"
                    onChange={(e) =>
                      handleOnChange(e.target.name, e.target.value)
                    }
                    value={input?.postalCode}
                    type="text"
                  />

          {/* <label>Contraseña</label>
          <input
            name="password"
            onChange={(e) => handleOnChange(e.target.name, e.target.value)}
            value={input?.password}
            type="text"
          /> */}

                  <label>Confirmar contraseña</label>
                  <input
                    name="confirmPassword"
                    onChange={(e) =>
                      handleOnChange(e.target.name, e.target.value)
                    }
                    value={input?.confirmPassword}
                    type="password"
                  />

                  <div className="">
                    <label className="col-12" htmlFor="newImage">
                      Cambiar imagen de perfil{" "}
                    </label>
                    <input
                      className="col-12"
                      type="file"
                      id="newImage"
                      onChange={addImage}
                    ></input>
                  </div>

                  <div class="">
                    <button
                      type="submit"
                      className="btn btn-primary mt-3"
                      onClick={handleSubmit}
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    >
                      Editar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
