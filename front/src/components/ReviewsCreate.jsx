import { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { postReviewActivity, getReviewsActivityId, patchReviewActivity } from "../redux/actionsCreator/reviewsActions";
import { getActivityById } from "../redux/actions/activitiesActions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"

};

function ReviewsCreate() {

    const dispatch = useDispatch();

    const { id } = useParams();
    const{ isAuthenticated, user } = useAuth0()

    const allUsers = useSelector((state) => state.usersReducer.users);
    const activity = useSelector((state) => state.activitiesReducer.activityId);
    const detail = useSelector((state) => state.reviewsReducer.reviewsActivityId);
   
    const [currentValue, setCurrentValue] = useState(0); //current Value me va a dar la puntuación (score)
    const [hoverValue, setHoverValue] = useState(undefined);
    const [content, setContent] = useState(""); //Me va a dar lo que va en content
    const stars = Array(5).fill(0)



  const findUser =  user ? allUsers?.find( u => u.email === user.email) : null
  console.log(findUser)

  const existReview = detail.find((r) => r.user?.name === findUser?.name)

  useEffect(() => {
    dispatch(getActivityById(id));
}, [dispatch, id]);


    const handleClick = value => {
        setCurrentValue(value)
    }

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }

    const handleChange = (e) => {
        setContent(e.target.value);
    };

    const handleSubmit = () => {
        const body = {
            user: findUser.id,
            content: content,
            score: currentValue,
            activity: activity.id,
        }
        dispatch(postReviewActivity(body));
        setCurrentValue(0);
        setContent("");
    };

    const handleSubmitPatch = () => {
        const body = {
            id: existReview.id,
            user: findUser.id,
            content: content,
            score: currentValue,
            activity: activity.id,
        }
        dispatch(patchReviewActivity(body));
        setCurrentValue(0);
        setContent("");
    };

    const average = () => {
        let a = 0;
        for (let i = 0; i < detail.length; i++) {
            a += detail[i].score;
        }
        return a / detail.length
    }

    useEffect(() => {
        dispatch(getReviewsActivityId(id));
    },[]);

    const score = (score) => {
        switch (true) {
            case (score >= 4.75): return (
                <div>
                    <FaStar size={13} color={colors.orange} style={{ marginRight: 10 }} />
                    <FaStar size={13} color={colors.orange} style={{ marginRight: 10 }} />
                    <FaStar size={13} color={colors.orange} style={{ marginRight: 10 }} />
                    <FaStar size={13} color={colors.orange} style={{ marginRight: 10 }} />
                    <FaStar size={13} color={colors.orange} style={{ marginRight: 10 }} />
                </div>
            )
            case (score > 4.25): return (
                <div>
                    <FaStar size={13} color={colors.orange} style={{ marginRight: 10 }} />
                    <FaStar size={13} color={colors.orange} style={{ marginRight: 10 }} />
                    <FaStar size={13} color={colors.orange} style={{ marginRight: 10 }} />
                    <FaStar size={13} color={colors.orange} style={{ marginRight: 10 }} />
                    <FaStarHalfAlt size={13} color={colors.orange} style={{ marginRight: 10 }} />
                </div>
            )
            case (score > 3.75): return (
                <div>
                    <FaStar size={13} color={colors.orange} style={{ marginRight: 10 }} />
                    <FaStar size={13} color={colors.orange} style={{ marginRight: 10 }} />
                    <FaStar size={13} color={colors.orange} style={{ marginRight: 10 }} />
                    <FaStar size={13} color={colors.orange} style={{ marginRight: 10 }} />
                    <FaStar size={13} color={colors.grey} style={{ marginRight: 10 }} />
                </div>
            )           
            case (score > 3.25): return (
                <div>
                    <FaStar size={13} color={colors.orange} style={{ marginRight: 10 }} />
                    <FaStar size={13} color={colors.orange} style={{ marginRight: 10 }} />
                    <FaStar size={13} color={colors.orange} style={{ marginRight: 10 }} />
                    <FaStarHalfAlt size={13} color={colors.orange} style={{ marginRight: 10 }} />
                    <FaStar size={13} color={colors.grey} style={{ marginRight: 10 }} />
                </div>
            )
            case (score > 2.75): return (
                <div>
                    <FaStar size={13} color={colors.orange} style={{ marginRight: 10 }} />
                    <FaStar size={13} color={colors.orange} style={{ marginRight: 10 }} />
                    <FaStar size={13} color={colors.orange} style={{ marginRight: 10 }} />
                    <FaStar size={13} color={colors.grey} style={{ marginRight: 10 }} />
                    <FaStar size={13} color={colors.grey} style={{ marginRight: 10 }} />
                </div>
            )
            case (score > 2.25): return (
                <div>
                    <FaStar size={13} color={colors.orange} style={{ marginRight: 10 }} />
                    <FaStar size={13} color={colors.orange} style={{ marginRight: 10 }} />
                    <FaStarHalfAlt size={13} color={colors.orange} style={{ marginRight: 10 }} />
                    <FaStar size={13} color={colors.grey} style={{ marginRight: 10 }} />
                    <FaStar size={13} color={colors.grey} style={{ marginRight: 10 }} />
                </div>
            )
            case (score > 1.75): return (
                <div>
                    <FaStar size={13} color={colors.orange} style={{ marginRight: 10 }} />
                    <FaStar size={13} color={colors.orange} style={{ marginRight: 10 }} />
                    <FaStar size={13} color={colors.grey} style={{ marginRight: 10 }} />
                    <FaStar size={13} color={colors.grey} style={{ marginRight: 10 }} />
                    <FaStar size={13} color={colors.grey} style={{ marginRight: 10 }} />
                </div>
            )
            case (score > 1.25): return (
                <div>
                    <FaStar size={13} color={colors.orange} style={{ marginRight: 10 }} />
                    <FaStarHalfAlt size={13} color={colors.orange} style={{ marginRight: 10 }} />
                    <FaStar size={13} color={colors.grey} style={{ marginRight: 10 }} />
                    <FaStar size={13} color={colors.grey} style={{ marginRight: 10 }} />
                    <FaStar size={13} color={colors.grey} style={{ marginRight: 10 }} />
                </div>
            )
            case (score > 0.75): return (
                <div>
                    <FaStar size={13} color={colors.orange} style={{ marginRight: 10 }} />
                    <FaStar size={13} color={colors.grey} style={{ marginRight: 10 }} />
                    <FaStar size={13} color={colors.grey} style={{ marginRight: 10 }} />
                    <FaStar size={13} color={colors.grey} style={{ marginRight: 10 }} />
                    <FaStar size={13} color={colors.grey} style={{ marginRight: 10 }} />
                </div>
            )
            default: return (
                <div>
                    <FaStar size={13} color={colors.grey} style={{ marginRight: 10 }} />
                    <FaStar size={13} color={colors.grey} style={{ marginRight: 10 }} />
                    <FaStar size={13} color={colors.grey} style={{ marginRight: 10 }} />
                    <FaStar size={13} color={colors.grey} style={{ marginRight: 10 }} />
                    <FaStar size={13} color={colors.grey} style={{ marginRight: 10 }} />
                </div>)
        };
    }

    //--------------------------------------------------------------------

    return (
        <div>
            {isAuthenticated
            ?   (existReview ? 
                <div>
                    <div className="d-flex flex-row ">
                    <h5 className="" style={{ paddingRight: "20px" }}> Dejanos tu reseña </h5>
                    <div >
                        {stars.map((_, index) => {
                            return (
                                <FaStar
                                    key={index}
                                    size={24}
                                    onClick={() => handleClick(index + 1)}
                                    onMouseOver={() => handleMouseOver(index + 1)}
                                    onMouseLeave={handleMouseLeave}
                                    color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                    style={{
                                        marginRight: 10,
                                        cursor: "pointer"
                                    }}
                                />
                            )
                        })}
                    </div>
                    </div>
                    <div className="d-flex flex-column">
                        <textarea className="form-control" value={content} onChange={handleChange} placeholder="Escribe aquí tu comentario" rows="8"/* style={styles.textarea} */ />
                        <button type = "submit" /*  style={styles.button} */ className="btn border ms-2 rounded-pill text-white" style={{ backgroundColor: "indigo" }}
                            onClick={handleSubmitPatch}>
                            Enviar
                        </button>
                    </div>
                </div>
                :                 <div>
                <div className="d-flex flex-row ">
                <h5 className="" style={{ paddingRight: "20px" }}> Dejanos tu reseña </h5>
                <div >
                    {stars.map((_, index) => {
                        return (
                            <FaStar
                                key={index}
                                size={24}
                                onClick={() => handleClick(index + 1)}
                                onMouseOver={() => handleMouseOver(index + 1)}
                                onMouseLeave={handleMouseLeave}
                                color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                style={{
                                    marginRight: 10,
                                    cursor: "pointer"
                                }}
                            />
                        )
                    })}
                </div>
                </div>
                <div className="d-flex flex-column">
                    <textarea className="form-control" value={content} onChange={handleChange} placeholder={"Escribe aquí tu comentario"} rows="8"/* style={styles.textarea} */ />
                    <button type = "submit" /*  style={styles.button} */ className="btn border ms-2 rounded-pill text-white" style={{ backgroundColor: "indigo" }}
                        onClick={handleSubmit}>
                        Enviar
                    </button>
                </div>
            </div>)
            : <></>}


            <h5>Opiniones de la actividad</h5>
            <div>
                <div className="d-flex flex-row">

                    <div className="p-2 border-bottom">{average().toFixed(2)}  </div>
                    <div className="p-2 border-bottom" >({detail.length})</div>
                    <div className="p-2 border-bottom">{score(average())}</div>

                </div>
                <div className="p-2">
                    {detail.map((r) => (
                        <div className="d-flex flex-column border border-5 rounded-start m-1">

                            <div className="d-flex flex-row" key={r.id}>
                                <h5 className="d-flex flex-row">{r.user?.name}</h5>
                                <h4 className="d-flex flex-row" >{score(r.score)}{r.score}</h4>
                            </div>
                            <div className="d-flex flex-column">
                                <p className="d-flex flex-column">{r.content}</p>
                            </div>

                        </div>


                    ))}
                </div>
            </div>

        </div>
    );
};

export default ReviewsCreate;