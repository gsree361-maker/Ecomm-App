
import Home from "./Components/Home";
import "./Components/Styles.css";
import Cart from "./Components/Cart";
import Products1 from "./Components/Products1";
import {  HashRouter, Route, Routes } from "react-router-dom";
import Signup from "./Components/Signup";
import Admin from "./Components/Admin";
import Login from "./Components/Login";



function App() {
  return (
    
    <>
    <HashRouter>
    <Routes>
  <Route path="/" element={<Home />} />
  {/* <Route path="/products" element={<Products />} /> */}
  <Route path="/products" element={<Products1 />} />
  <Route path="/login" element={<Login/>} />
  <Route path="/cart" element={<Cart />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/admin" element={ <Admin />} />

    </Routes>
    </HashRouter>
    </>
  )}

export default App