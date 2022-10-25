import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../redux/actionsCreator/cartActions";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { useLocalStorage } from "../localStorage/useLocalStorage";

function Product(props) {

  console.log("estoy en el componente Product")
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setloading] = useState(false);
  const cart = useSelector((state) => state.cartReducer.cart.items);
  const [, setCart] = useLocalStorage('cart', cart)
  console.log(product)

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
    setCart(cart)
  };

  useEffect(() => {
    const getProduct = async () => {
      setloading(true);
      const response = await fetch(`http://localhost:3001/products/${id}`);
      setProduct(await response.json());
      setloading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            // width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.categories}</h4>
          <h1 className="display-5">{product.title}</h1>
          {/* <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p> */}
          <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
          <p className="lead">{product.detail}</p>
          <button
            className="btn btn-outline-dark px-4 py-2"
            onClick={() => addProduct(product)}
          >
            Agregar al carrito
          </button>
          <Link to="/carrito" className="btn btn-dark ms-2 px-3 py-2">
            Ir al carrito
          </Link>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );

  // return (
  //   <div>
  //     <div>
  //       <h4>{props.name}</h4>
  //       <h4>{props.price}</h4>
  //       <div>
  //         <div>
  //           <img src={props.img} alt={props.names} width="200px" />
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default Product;
//