import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link,useLocation } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';
import LoginPopup from '../LoginPopup/LoginPopup';

const Navbar = () => {

  const [menu,setMenu] = useState("Home");

  const {getTotalCartAmount} = useContext(StoreContext);

  const[showLogin,setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLogin(false);
  };

  const location=useLocation();

  return (
    <nav className='navbar-container'>
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home" || location.pathname==='/' ?"active":""}>Home</Link>
        <a href="#explore-menu" onClick={()=>setMenu("Menu")} className={menu==="Menu" || location.pathname==='/explore-menu' ?"active":""}>Menu</a>
        <a href="#app-download" onClick={()=>setMenu("Mobile-app")} className={menu==="Mobile-app" || location.pathname==='/app-download' ?"active":""}>Mobile-app</a>
        <a href="#footer" onClick={()=>setMenu("Contact-us")} className={menu==="Contact-us" || location.pathname==='/footer' ?"active":""}>Contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount()===0 ?"":"dot"}></div>
        </div>
        {isLoggedIn ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <button onClick={toggleLogin}>Sign In</button>
          )}
        {/* <button onClick={toggleLogin}>{showLogin ? "Logout" : "Sign In"}</button> */}
      </div>
    </div>
    {showLogin && <LoginPopup setShowLogin={setShowLogin} handleLogin={handleLogin} />}
    </nav>
    
  )
}

export default Navbar
