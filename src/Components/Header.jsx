import { Link, useNavigate } from "react-router-dom"

function Header() {
 // const name = localStorage.getItem("username");
  //const navigate = useNavigate();
// const handleLogour = () => {
    //localStorage.clear();
    //navigate("/");
 // };
 const handleLogout = () => {
  localStorage.removeTtem("isLoggesIn")
  localStorage.removeTtem("username")
  localStorage.removeTtem("cart")
  navigate ("/")
 }
  return (
    <>
    <header>
        <h1>🛍️ My Shop KL University</h1>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/products">Products1</Link>
            <Link to="/cart">Cart</Link>
            <button onClick={() => {
              localStorage.removeItem("isLoggedIn");
              localStorage.removeItem("username");
              window.location.reload();
            }} className="btn">Log Out</button>
        </nav>
      { /* <div id="user-display">Welcome, User!</div>*/ }
      <div id="user-display">
        {name ? `Welcome, ${name}`  :  ""}
      </div>
    </header>
    </>
  )
}
export default Header