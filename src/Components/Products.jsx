import { Link, useNavigate } from "react-router-dom";
import img1 from "./images/ph1.jpeg";
import img2 from "./images/ph2.jpeg";
import img3 from "./images/ph3.jpeg";
import "../Components/Products.css";
import Footer from "./Footer";
import Header from "./Header";



function Products(){
  const navigate = useNavigate();
    const handleAddToCart = () => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if(isLoggedIn=="true"){
            navigate("/cart");
        }
        else{
            alert("Please login first!");
            navigate("/login");
        }
    };
    return(
        <>
        <Header/>
        <Footer/>
      <div className="products">
        <div className="product">
         <img src={img1}/>
        <h2>Vivo V4O Series</h2>
        <p>Price:$13000</p>
        <button onClick={handleAddToCart}>Add to Cart</button>      

       
        </div>
        <div className="product">
          <img src={img2}/>
          <h2>Vivo V23 Series</h2>
         <p>Price:$19000</p>
        <button onClick={handleAddToCart}>Add to Cart</button>      
        
        </div>
        <div className="product">
           <img src={img3}/>
           <h2>ViVo T4X Series</h2>
         <p>Price:$20000</p>
      
          <button onClick={handleAddToCart}>Add to Cart</button>      
        </div>
        <div className="product">
          <img src={img2}/>
          <h2>Vivo V23 Series</h2>
         <p>Price:$19000</p>
       
         <button onClick={handleAddToCart}>Add to Cart</button>      
        
        </div>
        <div className="product">
          <img src={img2}/>
          <h2>Vivo V23 Series</h2>
         <p>Price:$19000</p>
       
          <button onClick={handleAddToCart}>Add to Cart</button>      
        
        </div>
        <div className="product">
          <img src={img2}/>
          <h2>Vivo V23 Series</h2>
         <p>Price:$19000</p>
      
        <button onClick={handleAddToCart}>Add to Cart</button>      
        
        </div>
      </div>
        </>

    )
}
export default Products