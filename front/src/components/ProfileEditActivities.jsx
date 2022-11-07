import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivities, getActivityById, patchActivity } from "../redux/actions/activitiesActions";

export default function ProfileEditActivities() {
  const activityId = useSelector((state) => state.activitiesReducer.activityId)
  const activities = useSelector(state => state.activitiesReducer.activities)

  const [input, setInput] = useState({
    id: '',
    name: '',
    detail: '',
    price: '',
    days: '',
    times: '',
    img: ''
  })

  const dispatch = useDispatch()

  useEffect(() => {
    if(activities?.length === 0) {
      dispatch(getActivities())
    }
  }, [activities, dispatch])

  function handleChange(e) {
      setInput({
        ...input,
        [e.target.id]: e.target.value,
      });
  }

  function handleSubmit(e) {
    e.preventDefault()
    setInput((input.id = activityId.id));
    if (!input.img) { setInput(input.img = activityId.img) }
    if (!input.name) { setInput((input.name = activityId.name)) }
    if (!input.detail) { setInput((input.detail = activityId.detail)) }
    if (!input.price) { setInput((input.price = activityId.price)) }
    if (!input.days) { setInput((input.days = activityId.days)) }
    if (!input.times) { setInput((input.times = activityId.times)) }
    dispatch(patchActivity(input));
    dispatch(getActivities())
    setInput({
      id: '',
      name: '',
      detail: '',
      price: '',
      days: '',
      times: '',
      img: ''
    })
  }

  return (
    <>
      <div>
        <label htmlFor="chooseActivity">Elige una actividad</label>
        <select
          id="chooseActivity"
          className="col-12"
          onChange={(e) => {
            dispatch(getActivityById(e.target.value));
          }}
        >
          <option value="-">Elegí una actividad a editar</option>
          {activities?.map((a) => {
            return (
              <option key={`${a.id}`} value={`${a.id}`}>
                {a.name}
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
                placeholder={activityId ? activityId.name : ""}
                id="name"
                value={input.name}
                onChange={handleChange}
              ></input>
            </div>

            <div className="">
              <label className="col-12" htmlFor="price">
                Precio:{" "}
              </label>
              <input
                className="col-12"
                type="text"
                placeholder={activityId ? activityId.price : ""}
                id="price"
                value={input.price}
                onChange={handleChange}
              ></input>
            </div>

              <div className=" text-wrap">
                <label className="col-12" htmlFor="detail">
                  Detalle:{" "}
                </label>
                <textarea
                  className="col-12"
                  placeholder={activityId ? activityId.detail : ""}
                  rows="3"
                  id="detail"
                  value={input.detail}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="">
                <label className="col-12" htmlFor="days">
                  Días:{" "}
                </label>
                <input
                  className="col-12"
                  type="text"
                  placeholder={activityId ? activityId.days : ""}
                  id="days"
                  value={input.days}
                  onChange={handleChange}
                ></input>
              </div>

              <div className="">
                <label className="col-12" htmlFor="times">
                  Horarios:{" "}
                </label>
                <input
                  className="col-12"
                  type="text"
                  placeholder={activityId ? activityId.times : ""}
                  id="times"
                  value={input.times}
                  onChange={handleChange}
                ></input>
              </div>

              <div>
                <label className="col-12 " for="image">
                  Imágen:{" "}
                </label>
                <div className="d-inline-flex ">
                        <div className="" id="image">
                          <div className="position-relative">
                            <button
                              name='image'
                              type="button"
                              className="btn position-absolute btn-sm"
                              style={{
                                right: "0",
                                padding: "0",
                                paddingRight: "5px",
                              }}
                              onClick={() => {input.img = ''}}
                            >
                              x
                            </button>
                            <img
                              src={activityId.img}
                              className="img-fluid img-thumbnail "
                              alt=""
                            />
                          </div>
                        </div>
                </div>
              </div>
                  {/*Esto va con cloudinary */}
              <div className="">
                <label className="col-12" htmlFor="newImage">
                  Agregar imagen{" "}
                </label>
                <input className="col-12" type="file" id="newImage" onChange={(e) => {
                  input.img = ''
                  }}></input>
              </div>
            </div>
            <div className="d-flex flex-row-reverse">
              <button
                type="button"
                className=" btn btn-primary mt-3"
                onClick={handleSubmit}
              >
                Guardar
              </button>
            </div>
         
        </form>
      </div>
    </>
  );
}