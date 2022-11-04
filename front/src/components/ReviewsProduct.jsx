import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { postReview } from "../redux/actionsCreator/reviewsActions";

const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};



function Reviews() {

    const dispatch = useDispatch();

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
    }


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
        
        </div>
    );
};


    const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
    },
    stars: {
        display: "flex",
        flexDirection: "row",
    },
    textarea: {
        border: "1px solid #a9a9a9",
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