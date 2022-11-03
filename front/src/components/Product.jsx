import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../redux/actionsCreator/cartActions";
import { Link, useParams } from "react-router-dom";
//import Skeleton from "react-loading-skeleton";
import { useLocalStorage } from "../localStorage/useLocalStorage";
import {
  getDetail,
} from "../redux/actionsCreator/productsActions";
// import reviewsReducer from "../redux/reducer/reviewsReducer";
import { getReviewsProductId } from "../redux/actionsCreator/reviewsActions";
import Reviews from "./ReviewsProduct"
import { AiOutlineVerticalAlignMiddle } from "react-icons/ai";

function Product() {
  const { id } = useParams();
  const product = useSelector((state) => state.productsReducer.detail);
  const cart = useSelector((state) => state.cartReducer.items);
  const detail = useSelector((state) => state.reviewsReducer.detail);
  //const [loading, setloading] = useState(false);
  const [, setCart] = useLocalStorage("cart", cart);
  const dispatch = useDispatch();

  useEffect(() => {
    if (product?.length === 0) {
      dispatch(getDetail(id));
    } else {
      dispatch(getDetail(id))
    }
  }, []);

  const addProduct = (product) => {
    dispatch(addCart(product));
    setCart(cart);
  };

  useEffect(() => {
    {
      dispatch(getReviewsProductId(id));
    }
  }, [id, dispatch]);


  const average = () => {
    let a = 0;
    for (let i = 0; i < detail.length; i++) {
      a += detail[i].score; 
    }
    return a/detail.length
  }

  // const Loading = () => {
  //   return (
  //     <>
  //       <div className="col-md-6">
  //         <Skeleton height={400} />
  //       </div>
  //       <div className="col-md-6" style={{ lineHeight: 2 }}>
  //         <Skeleton height={50} width={300} />
  //         <Skeleton height={75} />
  //         <Skeleton height={25} width={150} />
  //         <Skeleton height={50} />
  //         <Skeleton height={150} />
  //         <Skeleton height={50} width={100} />
  //         <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
  //       </div>
  //     </>
  //   );
  // };

  //  const ShowProduct = () => {

  const allReviews = () => {
    <div>
      {detail?.map((r) => {
        <div>
          <h4>{detail[0]?.user?.name}</h4>
          <h4>{detail[0]?.score} ★</h4>
          <p>{detail[0]?.content}</p>
        </div>
      })}
    </div>
  }

  return (
    <div className="row">

      <div className="col-md-6">
        <div className="container">
          <div
            id="carouselExampleControls"
            class="carousel slide w-50"
            data-ride="carousel"
          >
          <div class="carousel-inner">
            {product?.image?.map((i, index) => {
              return (
                <div
                  className={
                    index === 0 ? "carousel-item active " : "carousel-item "
                  }
                >
                  <img
                    className=""
                    src={i}
                    alt={`${index} slide`}
                    key={index}
                    height="300px"
                    width="300px"
                  />
                </div>
              );
            })}
            <a
              class="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <h4 className="text-uppercase text-black-50">{product?.categories}</h4>
        <h1 className="display-5">{product?.title}</h1>
        {/* <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p> */}
        <h3 className="display-6 fw-bold my-4">$ {product?.price}</h3>
        <p className="lead">{product?.detail}</p>
        <p>
          {product?.stock > 0
            ? `Stock disponible: ${product?.stock}`
            : "El producto no se encuentra disponible en este momento"}
        </p>

        <button
          className="btn btn-outline-dark px-4 py-2"
          onClick={() => addProduct(product)}
          disabled={product.stock > 0 ? false : true}
        >
          Agregar al carrito
        </button>

        <Link to="/carrito" className="btn btn-dark ms-2 px-3 py-2">
          Ir al carrito
        </Link>        
      </div>
      <div>
        <Reviews/>
        <h2>Opiniones del producto</h2>
        <div className="row">
          <div className="col-md-6">
            <h3>{average()} Acá irían en realidad las estrellitas ({detail.length})</h3>
          </div>
        </div>
        <div className="col-md-6">
        <div>
          <h4>{detail[0]?.user?.name}</h4>
          <h4>{detail[0]?.score} ★</h4>
          <p>{detail[0]?.content}</p>
        </div>
        <div>
          <h4>{detail[1]?.user?.name}</h4>
          <h4>{detail[1]?.score} ★</h4>
          <p>{detail[1]?.content}</p>
        </div>
        <div>
          <h4>{detail[2]?.user?.name}</h4>
          <h4>{detail[2]?.score} ★</h4>
          <p>{detail[2]?.content}</p>
        </div>
        <a onClick = {allReviews}>Ver todas las opiniones</a>
        </div>
      </div>
    </div>
  );
  //};

  // return (
  //   <div>
  //     <div className="container py-5">
  //       <div className="row py-4">
  //         {loading ? <Loading /> : <ShowProduct />}
  //       </div>
  //     </div>
  //   </div>
  // );

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
