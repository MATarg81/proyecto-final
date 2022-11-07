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
    <div>

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
          </div>
        </div>
        <div class="row px-xl-5">
          <div class="col">
            <div class="nav nav-tabs justify-content-center border-secondary mb-4">
              <a class="nav-item nav-link active text-white" data-toggle="tab" href="#tab-pane-1" style={{ backgroundColor: "indigo" }}>Descripcion completa del producto</a>
              {/*  <a class="nav-item nav-link" data-toggle="tab" href="#tab-pane-2">Information</a>
              <a class="nav-item nav-link" data-toggle="tab" href="#tab-pane-3">Reviews (0)</a> */}
            </div>
            <div class="tab-content">
              <div class="tab-pane fade show active" id="tab-pane-1">
                {/* <h4 class="mb-3">Descripcion completa del producto</h4> */}
                <p>{product?.detail}</p>
              </div>
              <div class="tab-pane fade" id="tab-pane-2">
                <h4 class="mb-3">Additional Information</h4>
                <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                <div class="row">
                  <div class="col-md-6">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item px-0">
                        Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                      </li>
                      <li class="list-group-item px-0">
                        Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                      </li>
                      <li class="list-group-item px-0">
                        Duo amet accusam eirmod nonumy stet et et stet eirmod.
                      </li>
                      <li class="list-group-item px-0">
                        Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-6">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item px-0">
                        Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                      </li>
                      <li class="list-group-item px-0">
                        Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                      </li>
                      <li class="list-group-item px-0">
                        Duo amet accusam eirmod nonumy stet et et stet eirmod.
                      </li>
                      <li class="list-group-item px-0">
                        Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy. {/* dfdfdfdf */}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="tab-pane-3">
                <div class="row">
                  <div class="col-md-6">
                    <h4 class="mb-4">1 review for "Colorful Stylish Shirt"</h4>
                    <div class="media mb-4">
                      <img src="img/user.jpg" alt="Image7" class="img-fluid mr-3 mt-1" style={{ width: "45px" }} />
                      <div class="media-body">
                        <h6>John Doe<small> - <i>01 Jan 2045</i></small></h6>
                        <div class="text-primary mb-2">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star-half-alt"></i>
                          <i class="far fa-star"></i>
                        </div>
                        <p>Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <h4 class="mb-4">Leave a review</h4>
                    <small>Your email address will not be published. Required fields are marked *</small>
                    <div class="d-flex my-3">
                      <p class="mb-0 mr-2">Your Rating * :</p>
                      <div class="text-primary">
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                        <i class="far fa-star"></i>
                      </div>
                    </div>
                    <form>
                      <div class="form-group">
                        <label for="message">Your Review *</label>
                        <textarea id="message" cols="30" rows="5" class="form-control"></textarea>
                      </div>
                      <div class="form-group">
                        <label for="name">Your Name *</label>
                        <input type="text" class="form-control" id="name" />
                      </div>
                      <div class="form-group">
                        <label for="email">Your Email *</label>
                        <input type="email" class="form-control" id="email" />
                      </div>
                      <div class="form-group mb-0">
                        <input type="submit" value="Leave Your Review" class="btn btn-primary px-3" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
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


/* 
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
        <h4 className="text-uppercase text-black-50">{product?.categories.map(c => c.name)}</h4>
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
