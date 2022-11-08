import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../redux/actionsCreator/cartActions";
import { Link, useParams } from "react-router-dom";
import { useLocalStorage } from "../localStorage/useLocalStorage";
import { getDetail } from "../redux/actionsCreator/productsActions";
import {
  get_users,
  get_roles,
  get_users_by_id,
} from "../redux/actionsCreator/usersActions";
import Reviews from "./ReviewsProduct"
// import { AiOutlineVerticalAlignMiddle } from "react-icons/ai";
//import Skeleton from "react-loading-skeleton";

function Product() {
  const { id } = useParams();
  const product = useSelector((state) => state.productsReducer.detail);
  const cart = useSelector((state) => state.cartReducer.items);
  const usersState = useSelector((state) => state.usersReducer.usersById);
  const roles = useSelector((state) => state.usersReducer.roles);
  const allUsers = useSelector((state) => state.usersReducer.users);
  const [, setCart] = useLocalStorage("cart", cart);
  const dispatch = useDispatch();
  //const [loading, setloading] = useState(false);

  useEffect(() => {
    if (allUsers?.length === 0) {
      dispatch(get_users());
    }
    if (roles?.length === 0) {
      dispatch(get_roles());
    }
    if (usersState?.length === 0) {
      dispatch(get_users_by_id(7));
    }
  }, [dispatch, allUsers, roles, usersState]);

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


    <div class="container-fluid py-5">
      <div class="row px-xl-5">
        <div class="col-lg-5 pb-5">
          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner border">
              {product?.image?.map((i, index) => {
                return (
                  <div className={index === 0 ? "carousel-item active " : "carousel-item "}>
                    <img className="w-100 h-100" src={i} alt={`${index} slide`} key={index} /* height="300px" width="300px" */ />
                  </div>
                );
              })}
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" data-slide="prev" role="button" data-bs-slide="prev">
              <i class="fa fa-2x fa-angle-left text-dark"></i>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" data-slide="next" role="button" data-bs-slide="next">
              <i class="fa fa-2x fa-angle-right text-dark"></i>
            </a>
          </div>
        </div>

        <div class="col-lg-7 pb-5">
          <h6 class="font-weight-semi-bold">{product?.categories?.map(c => c.name)}</h6>
          <h1 className="display-5 border-bottom">{product?.name}</h1>

          {/*  <div class="d-flex mb-3">
              <div class="text-primary mr-2">
                <small class="fas fa-star"></small>
                <small class="fas fa-star"></small>
                <small class="fas fa-star"></small>
                <small class="fas fa-star-half-alt"></small>
                <small class="far fa-star"></small>
              </div>
              <small class="pt-1">(50 Reviews)</small>
            </div> */}
          <h3 class="font-weight-semi-bold mb-4">$  {product?.price}</h3>
          <p class="mb-4">{product?.detail}</p>
          <p>
            {product?.stock > 0
              ? `Stock disponible: ${product?.stock}`
              : "El producto no se encuentra disponible en este momento"}
          </p>
          {/*  <div class="d-flex mb-3">
              <p class="text-dark font-weight-medium mb-0 mr-3">Talles:</p>
              <form>
                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" class="custom-control-input" id="size-1" name="size" />
                  <label class="custom-control-label" for="size-1">XS</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" class="custom-control-input" id="size-2" name="size" />
                  <label class="custom-control-label" for="size-2">S</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" class="custom-control-input" id="size-3" name="size" />
                  <label class="custom-control-label" for="size-3">M</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" class="custom-control-input" id="size-4" name="size" />
                  <label class="custom-control-label" for="size-4">L</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" class="custom-control-input" id="size-5" name="size" />
                  <label class="custom-control-label" for="size-5">XL</label>
                </div>
              </form>
            </div>
            <div class="d-flex mb-4">
              <p class="text-dark font-weight-medium mb-0 mr-3">Colores:</p>
              <form>
                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" class="custom-control-input" id="color-1" name="color" />
                  <label class="custom-control-label" for="color-1">Negro</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" class="custom-control-input" id="color-2" name="color" />
                  <label class="custom-control-label" for="color-2">Blanco</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" class="custom-control-input" id="color-3" name="color" />
                  <label class="custom-control-label" for="color-3">Rojo</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" class="custom-control-input" id="color-4" name="color" />
                  <label class="custom-control-label" for="color-4">Azul</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" class="custom-control-input" id="color-5" name="color" />
                  <label class="custom-control-label" for="color-5">Verde</label>
                </div>
              </form>
            </div */}
          <div class="d-flex align-items-center mb-4 pt-2">
            <button
              className="btn border ms-2 rounded-pill text-white" style={{ backgroundColor: "indigo" }}
              onClick={() => addProduct(product)}
              disabled={product.stock > 0 ? false : true}>
              Agregar al <i class="fa fa-shopping-cart mr-1"></i>
            </button>

            <Link to="/carrito">
              <button className="btn border ms-2 rounded-pill text-white" style={{ backgroundColor: "indigo" }} > Ir al <i class="fa fa-shopping-cart mr-1"></i> </button>
            </Link>


          </div>
          <div>
            <Reviews />
          </div>
        </div>
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


/* 

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



export default Product; */
