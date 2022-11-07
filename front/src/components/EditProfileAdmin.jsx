import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  delete_users,
  get_roles,
  get_users,
  get_users_by_id,
  update_user,
} from "../redux/actionsCreator/usersActions";

export default function EditProfileAdmin() {
  const userId = useSelector((state) => state.usersReducer.usersById);
  const users = useSelector((state) => state.usersReducer.users);
  const roles = useSelector((state) => state.usersReducer.roles);

  const dispatch = useDispatch();

  const [input, setInput] = useState({
    id: '',
    name: "",
    lastname: "",
    dateOfBirth: "",
    phoneNumber: "",
    email: "",
    address: "",
    postalCode: "",
    roles: "",
    image:''
  });

  useEffect(() => {
    if (roles?.length === 0) {
      dispatch(get_roles());
    }
    if (users?.length === 0) {
      dispatch(get_users());
    }
  }, [users, userId, roles, dispatch, input]);

  function handleDeleteUser(id) {
    if (window.confirm(`Are you sure you want to delete the activity?`)) {
      dispatch(delete_users(id));
      console.log(id)
    }
  }

  // function handleCheck(e) {
  //   if (e.target.checked) {
  //     setInput({
  //       ...input,
  //       roles: [e.target.value],
  //     });
  //   }
  // }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.id]: e.target.value,
    })
  }

  function handleSubmit() {
    
    setInput((input.id = userId.id));
    if (!input.name) { setInput(input.name = userId.name) }
    if (!input.lastname) { setInput((input.lastname = userId.lastname)) }
    if (!input.email) { setInput((input.email = userId.email)) }
    if (!input.dateOfBirth) { setInput((input.dateOfBirth = userId.dateOfBirth)) }
    if (!input.phoneNumber) { setInput((input.phoneNumber = userId.phoneNumber)) }
    if (!input.postalCode) { setInput((input.postalCode = userId.postalCode)) }
    if (!input.address) { setInput((input.address = userId.address)) }
    if (!input.roles) { setInput((input.roles = userId.role)) }
    dispatch(update_user(input));
    dispatch(get_users())
    setInput({
    id: '',
    name: "",
    lastname: "",
    dateOfBirth: "",
    phoneNumber: "",
    email: "",
    address: "",
    postalCode: "",
    roles: "",
    })
  }

  return (
    <>
      <div>
        <label htmlFor="chooseUser">Elige un usuario</label>
        <select
          id="chooseUser"
          className="col-12"
          onChange={(e) => {
            dispatch(get_users_by_id(e.target.value));
          }}
        >
          <option value="-">Elegí un usuario a editar</option>
          {users?.map((u) => {
            return (
              <option key={`${u.id}`} value={`${u.id}`}>
                {u.name}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <form className="container">
          <div className="row mt-3 g-2 " onChange={handleChange} noValidate>

            <div className="">
              <label className="col-12" htmlFor="name">
                Nombre:{" "}
              </label>
              <input
                className="col-12"
                type="text"
                placeholder={userId ? userId.name : ""}
                id="name"
                value={input?.name}
                onChange={handleChange}
              ></input>
            </div>

            <div className="">
              <label className="col-12" htmlFor="lastname">
                Apellido:{" "}
              </label>
              <input
                className="col-12"
                type="text"
                placeholder={userId ? userId.lastname : ""}
                id="lastname"
                value={input?.lastname}
                onChange={handleChange}
              ></input>
            </div>

            <div className=" text-wrap">
              <label className="col-12" htmlFor="email">
                Email:{" "}
              </label>
              <input
                className="col-12"
                type="text"
                placeholder={userId ? userId.email : ""}
                id="email"
                value={input?.email}
                onChange={handleChange}
              ></input>
            </div>

            <div className="">
              <label className="col-12" htmlFor="dateOfBirth">
                Fecha de nacimiento:{" "}
              </label>
              <input
                className="col-12"
                type="text"
                placeholder={userId ? userId.dateOfBirth : ""}
                id="dateOfBirth"
                value={input?.dateOfBirth}
                onChange={handleChange}
              ></input>
            </div>

            <div className="">
              <label className="col-12" htmlFor="phoneNumber">
                Teléfono:{" "}
              </label>
              <input
                className="col-12"
                type="text"
                placeholder={userId ? userId.phoneNumber : ""}
                id="phoneNumber"
                value={input?.phoneNumber}
                onChange={handleChange}
              ></input>
            </div>

            <div className="">
              <label className="col-12" htmlFor="address">
                Dirección:{" "}
              </label>
              <input
                className="col-12"
                type="text"
                placeholder={userId ? userId.address : ""}
                id="address"
                value={input?.address}
                onChange={handleChange}
              ></input>
            </div>

            <div className="">
              <label className="col-12" htmlFor="postalCode">
                Código Postal:{" "}
              </label>
              <input
                className="col-12"
                type="text"
                placeholder={userId ? userId.postalCode : ""}
                id="postalCode"
                value={input?.postalCode}
                onChange={handleChange}
              ></input>
            </div>

            <div class="">
              {roles?.length > 0 &&
                roles?.map((roles) => (
                  <label htmlFor='rol'>
                    <input
                      id='rol'
                      key={roles.id}
                      type="checkbox"
                      value={input.id}
                      name={roles.name}
                      onChange={handleChange}
                    />
                    {roles.name}
                  </label>
                ))}
            </div>
          </div>
          <div className="d-flex flex-row-reverse">
            <button
              type="button"
              className=" btn btn-primary mt-3"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={handleSubmit}
            >
              Guardar
            </button>
            <button
              type="button"
              className="btn btn-primary mt-3 btn-dark"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => {
                handleDeleteUser(userId.id);
                dispatch(get_users());
              }}
            >
              Eliminar usuario
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
