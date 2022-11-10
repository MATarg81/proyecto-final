import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import About from "./components/About";
import Shop from "./components/Shop";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Product from "./components/Product";
import PurchesesMaded from "./components/purchesesMaded/purchesesMaded";
import PurchesesDetail from "./components/purchesesMaded/purchesesDetail";
import Activities from "./components/Activities";
import CreateProduct from "../src/components/CreateProduct/CreateProduct.jsx";
import Landing from "./components/Landing";
import AboutTeam from "./components/AboutTeam";
import ActivityCreate from "./components/ActivityCreate";
import Reviews from "./components/Reviews";
import ReviewsCreate from "./components/ReviewsCreate";
import Favorites from "./components/Favorites";

import EditProfile from "./components/EditProfile";

import Profile from "./components/Profile";
import ProfileProducts from "./components/ProfileProducts";
import ProfileActivities from "./components/ProfileActivities";
import ProfileHistorial from "./components/ProfileHistorial";
import ProfileUsers from "./components/ProfileUsers";
import ListOfUsers from "./components/ListOfUsers";

import RegisteredActivity from "./components/RegisteredActivity";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { get_roles, get_users } from "./redux/actionsCreator/usersActions";
import Stripe from "./components/Stripe";
import Error404 from "./components/Error404";
import MpSuccess from "./components/MpSuccess";
import MpError from "./components/MpError";
import Loading from "./components/Loading";
//import ProtectedRoute from "../src/auth/protected-route";
//import { useAuth0 } from "@auth0/auth0-react"

function App() {
  //Agregar ruta de /detail/id

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   // dispatch(get_roles());
  //   // dispatch(get_users());
  // }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/tienda" element={<Shop />} />
        <Route exact path="/nosotros" element={<About />} />
        <Route exact path="/registro" element={<Register />} />
        <Route exact path="/ingreso" element={<Login />} />
        <Route exact path="/carrito" element={<Cart />} />
        <Route exact path="/tienda/:id" element={<Product />} />
        <Route exact path="/actividades" element={<Activities />} />
        <Route exact path="/aboutTeam" element={<AboutTeam />} />
        <Route exact path="/crearActividades" element={<ActivityCreate />} />
        <Route exact path="/inscriptos" element={<RegisteredActivity />} />
        <Route exact path="/crearProducto" element={<CreateProduct />} />
        <Route exact path="/reviews" element={<Reviews />} />
        <Route
          exact
          path="/crearCalificacion/:id"
          element={<ReviewsCreate />}
        />
        <Route exact path="/favorites" element={<Favorites />} />

        <Route exact path="/edituser" element={<EditProfile />} />
        {/* <Route exact path="/comprasRealizadas" element={<PurchesesMaded />} /> */}

        <Route
          exact
          path="/detalleComprasRealizadas/:id"
          element={<PurchesesDetail />}
        />

        <Route exact path="/profile" element={<Profile />} />
        <Route
          exact
          path="/profile/actividades"
          element={<ProfileActivities />}
        />
        <Route exact path="/profile/historial" element={<PurchesesMaded />} />
        <Route exact path="/profile/usuarios" element={<ProfileUsers />} />
        {/* <Route exact path="/profile/productos" element={<ProfileProducts />} /> */}
        <Route exact path="/listUsers" element={<ListOfUsers />} />

        <Route exact path="/stripe" element={<Stripe />} />

        <Route path="*" element={<Error404 />} />

        <Route exact path="/success" element={<MpSuccess />} />
        <Route exact path="/mperror" element={<MpError />} />
        <Route exact path="/loading" element={<Loading />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
