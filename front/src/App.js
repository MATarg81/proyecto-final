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
import PurchesesDetail from "./components/purchesesMaded/purchesesDetail"

import Activities from "./components/Activities";
import CreateProduct  from "../src/components/CreateProduct/CreateProduct.jsx";
import Landing from './components/Landing';
import AboutTeam from "./components/AboutTeam";
import ActivityCreate from "./components/ActivityCreate";
import Reviews from "./components/Reviews";
import ReviewsCreate from "./components/ReviewsCreate";
import Favorites from "./components/Favorites";
function App() {
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
        <Route exact path="/crearProducto" element={<CreateProduct />} />
        <Route exact path="/reviews" element={<Reviews />} />
        <Route exact path="/crearCalificacion" element={<ReviewsCreate />} />
        <Route exact path="/favorites" element={<Favorites />} />
        <Route exact path="/comprasRealizadas" element={<PurchesesMaded />} />
        <Route exact path="/detalleComprasRealizadas" element={<PurchesesDetail/>} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
