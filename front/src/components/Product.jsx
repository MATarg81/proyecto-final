import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../redux/actionsCreator/cartActions";
import { Link, useParams } from "react-router-dom";
import { useLocalStorage } from "../localStorage/useLocalStorage";
import { getDetail } from "../redux/actionsCreator/productsActions";
import Reviews from "./ReviewsProduct"
// import { AiOutlineVerticalAlignMiddle } from "react-icons/ai";
//import Skeleton from "react-loading-skeleton";

function Product() {
  const { id } = useParams();
  const product = useSelector((state) => state.productsReducer.detail);
  const cart = useSelector((state) => state.cartReducer.items);
  const [, setCart] = useLocalStorage("cart", cart);
  const dispatch = useDispatch();
    //const [loading, setloading] = useState(false);
console.log(product)
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
        <h4 className="text-uppercase text-black-50">{product?.categories?.map(c => c.name)}</h4>
        <h1 className="display-5">{product?.title}</h1>
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
      </div>
    </div>
  );
}
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

export default Product;