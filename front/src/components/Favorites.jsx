import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom'
import { addCart } from "../redux/actionsCreator/cartActions";
import { deleteFav, getFavs } from "../redux/actionsCreator/favsActions";
import { useLocalStorage} from "../localStorage/useLocalStorage";
import { useNavigate } from "react-router-dom";

function Favorites() {
  const dispatch = useDispatch();

    const dispatch = useDispatch();
    const navigate = useNavigate();
   

    const favoritos = useSelector( state => state.favReducer.favs)
    const cart = useSelector(state => state.cartReducer.items)
    
    const [, setCart] = useLocalStorage('cart', cart)

    const addProduct = (product) => {
        dispatch(addCart(product));
        setCart(cart);
      };

  return (
    <div>
      <div
        className="grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "3rem",
          margin: "2rem",
        }}
      >
        {favoritos?.map((p) => (
          
            <div key={p.id} className="col card border-info mb-3" style={{
              border: "none",
              boxShadow: "25px 30px 70px -20px rgba(0,0,0,0.5)"
            }}>
              <div className="card h-100" style ={{border: "none"}}>
                <div onClick = {() => navigate('/tienda/' + p.id)}>
                  <div style={{
                        width: "200px",
                        height: "200px",
                        overflow: "hidden",
                        margin: "10px",
                        position: "relative"
                  }}>
                    <img
                      style={{ 
                        position:"absolute",
                        left: "-100%",
                        right: "-100%",
                        top: "-100%",
                        bottom: "-100%",
                        margin: "auto",
                        maxHeigth: "200px",
                        minHeight: "100%",
                        minWidth: "100%",
                        }}
                      src={p.image}
                      className="card-img-top"
                      alt={p.name} />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">{p.name}</h4>
                    <h4>$ {p.price}</h4>
                    {/* <p className="card-text">{p.detail}</p> */}
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-around">
                  <button
                    className="btn btn-outline-dark px-4 py-2"
                    onClick={() => addProduct(p)}
                  >
                    Agregar al carrito
                  </button>
                </div>
                <button
                  className="btn btn-outline-dark px-4 py-2"
                  onClick={() => handleDeleteFav(p.id)}
                >
                  <AiFillHeart />
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Favorites;
