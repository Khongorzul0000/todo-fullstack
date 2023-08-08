import "../styles/Navbar.css";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";

export const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
    <div className="wrapper">
      <div className="header">
        <div className="wait">
        <div className="nav-logo">
          <p>Harmony.</p>
        </div>
        <nav ref={navRef}>
          <div className="nav-menu">
            <ul>
              <li>
                <AiFillHome className="icon"/>
                <a href="/" className="link">
                  Home
                </a>
              </li>
            </ul>
            <div className="nav-btn-drop">
              <button className="btn">Sign Up</button>
              <button className="btn">Sign In</button>
            </div>
          </div>
          <div className="close" onClick={showNavbar}>
            <FaTimes />
          </div>
        </nav>
        <div className="lines" onClick={showNavbar}>
          <FaBars />
        </div>
        <div className="nav-btn">
          <button className="btn">
            <a href="signup">Sign up</a>
          </button>
          <button className="btn">
            <a href="login">Login</a>
          </button>
        </div>
        </div>
      </div>
    </div>
  </>
  );
};
