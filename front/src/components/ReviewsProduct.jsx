import { useState } from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { postReview, getReviewsProductId } from "../redux/actionsCreator/reviewsActions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};



function Reviews() {

    const dispatch = useDispatch();

    const { id } = useParams(); 

    const detail = useSelector((state) => state.reviewsReducer.detail);
    console.log(detail)
    const product = useSelector((state) => state.productsReducer.detail); //product name me sirve también
    const [currentValue, setCurrentValue] = useState(0); //current Value me va a dar la puntuación (score)
    const [hoverValue, setHoverValue] = useState(undefined);
    const [content, setContent] = useState(""); //Me va a dar lo que va en content
    const stars = Array(5).fill(0)
    //al id del user lo tengo que hardcodear momentaneamente

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
            user : "Nahuel",
            content : content,
            score : currentValue,
            product : product.id,
        }
        dispatch(postReview(body));
        setCurrentValue(0);
        setContent("");
    };

    const average = () => {
        let a = 0;
        for (let i = 0; i < detail.length; i++) {
          a += detail[i].score; 
        }
        return a/detail.length
      }
    
      useEffect(() => {
        {
          dispatch(getReviewsProductId(id));
        }
      }, [id, dispatch]);

    const score = (score) => {
        switch(true) {
            case (score < 1.25): return(
                <div>
                <FaStar size={13} color={colors.orange} style={{marginRight: 10}}/>
                <FaStar size={13} color={colors.grey} style={{marginRight: 10}}/>
                <FaStar size={13} color={colors.grey} style={{marginRight: 10}}/>
                <FaStar size={13} color={colors.grey} style={{marginRight: 10}}/>
                <FaStar size={13} color={colors.grey} style={{marginRight: 10}}/>                    
                </div>
             ) 
            case (score < 1.75): return(
                <div>
                <FaStar size={13} color={colors.orange} style={{marginRight: 10}}/>
                <FaStarHalfAlt size={13} color={colors.orange} style={{marginRight: 10}}/>
                <FaStar size={13} color={colors.grey} style={{marginRight: 10}}/>
                <FaStar size={13} color={colors.grey} style={{marginRight: 10}}/>
                <FaStar size={13} color={colors.grey} style={{marginRight: 10}}/>  
                </div>
             ) 
             case (score < 2.25): return(
                <div>
                <FaStar size={13} color={colors.orange} style={{marginRight: 10}}/>
                <FaStar size={13} color={colors.orange} style={{marginRight: 10}}/>
                <FaStar size={13} color={colors.grey} style={{marginRight: 10}}/>
                <FaStar size={13} color={colors.grey} style={{marginRight: 10}}/>
                <FaStar size={13} color={colors.grey} style={{marginRight: 10}}/>  
                </div>
             ) 
             case (score < 2.75): return(
                <div>
                <FaStar size={13} color={colors.orange} style={{marginRight: 10}}/>
                <FaStar size={13} color={colors.orange} style={{marginRight: 10}}/>
                <FaStarHalfAlt size={13} color={colors.orange} style={{marginRight: 10}}/>
                <FaStar size={13} color={colors.grey} style={{marginRight: 10}}/>
                <FaStar size={13} color={colors.grey} style={{marginRight: 10}}/>  
                </div>
             ) 
             case (score < 3.25): return(
                <div>
                <FaStar size={13} color={colors.orange} style={{marginRight: 10}}/>
                <FaStar size={13} color={colors.orange} style={{marginRight: 10}}/>
                <FaStar size={13} color={colors.orange} style={{marginRight: 10}}/>
                <FaStar size={13} color={colors.grey} style={{marginRight: 10}}/>
                <FaStar size={13} color={colors.grey} style={{marginRight: 10}}/>  
                </div>
             ) 
             case (score < 3.75): return(
                <div>
                <FaStar size={13} color={colors.orange} style={{marginRight: 10}}/>
                <FaStar size={13} color={colors.orange} style={{marginRight: 10}}/>
                <FaStar size={13} color={colors.orange} style={{marginRight: 10}}/>
                <FaStarHalfAlt size={13} color={colors.orange} style={{marginRight: 10}}/>
                <FaStar size={13} color={colors.grey} style={{marginRight: 10}}/>  
                </div>
             ) 
            case (score < 4.25): return(
                <div>
                <FaStar size={13} color={colors.orange} style={{marginRight: 10}}/>
                <FaStar size={13} color={colors.orange} style={{marginRight: 10}}/>
                <FaStar size={13} color={colors.orange} style={{marginRight: 10}}/>
                <FaStar size={13} color={colors.orange} style={{marginRight: 10}}/>
                <FaStar size={13} color={colors.grey} style={{marginRight: 10}}/>  
                </div>
             ) 
            case (score < 4.75):return(
                <div>
                <FaStar size={13} color={colors.orange} style={{marginRight: 10}}/>
                <FaStar size={13} color={colors.orange} style={{marginRight: 10}}/>
                <FaStar size={13} color={colors.orange} style={{marginRight: 10}}/>
                <FaStar size={13} color={colors.orange} style={{marginRight: 10}}/>
                <FaStarHalfAlt size={13} color={colors.orange} style={{marginRight: 10}}/>  
                </div>
             ) 
            case (score <= 5):return(
                <div>
                <FaStar size={13} color={colors.orange} style={{marginRight: 10}}/>
                <FaStar size={13} color={colors.orange} style={{marginRight: 10}}/>
                <FaStar size={13} color={colors.orange} style={{marginRight: 10}}/>
                <FaStar size={13} color={colors.orange} style={{marginRight: 10}}/>
                <FaStar size={13} color={colors.orange} style={{marginRight: 10}}/>  
                </div>
             ) 
        }
    }

//--------------------------------------------------------------------

    return (
        <div style={styles.container}>
        <h2> Dejá tu reseña </h2>
        <div>
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
        <textarea
            onChange={handleChange}
            placeholder="Escribe aquí tu comentario"
            style={styles.textarea}
        />

        <button
            style={styles.button}
            onClick={handleSubmit}
        >
            Enviar
        </button>

        <h2>Opiniones del producto</h2>
        <div>
        <div className="row">
          <div className="col-md-6">
            <p>{average().toFixed(2)} {score(average())} ({detail.length})</p>
          </div>
        </div>
        <div className="col-md-6">
            {detail.map((r) => (
                <div  style = {{border:"1px solid black", borderRadius:"1rem", margin: "2rem", padding: "2rem"}} key = {r.id}>
                    <h5>{r.user.name}</h5>
                    <h4>{score(r.score)}{r.score}</h4>
                    <p>{r.content}</p>
                </div>
            ))}
        </div>
        </div>
        
        </div>
    );
};


    const styles = {
    container: {
        margin: "2rem",
        display: "flex",
        flexDirection: "column",
    },
    stars: {
        display: "flex",
        flexDirection: "row",
    },
    textarea: {
        border: "1px solid black",
        borderRadius: 5,
        padding: 10,
        margin: "20px 0",
        minHeight: 100,
        width: 300
    },
    button: {
        border: "1px solid #a9a9a9",
        borderRadius: 5,
        width: 300,
        padding: 10,
    }

};




export default Reviews;