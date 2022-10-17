import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import About from "./components/About";
import Shop from "./components/Shop";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Product from "./components/Product";
import Landing from "./components/Landing";
import AboutTeam from "./components/AboutTeam";




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
        <Route exact path="/aboutTeam" element={<AboutTeam />} />

      </Routes>
    </>
  );
}

export default App;
