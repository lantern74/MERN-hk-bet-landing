import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineGlobal } from "react-icons/ai";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token
    localStorage.removeItem("user-token"); // Remove token
    localStorage.removeItem("user-question"); // Remove token
    navigate("/login"); // Redirect to login page
    window.location.reload();
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left Side - Navigation Links */}
        <ul className="nav-links">
          <li><a href="#">主頁</a></li>
          <li><a href="#">馬場體驗</a></li>
          <li><a href="#">賽馬資訊</a></li>
          <li><a href="#">足球資訊</a></li>
          <li><a href="#">馬會會員</a></li>
          <li><a href="#">慈善及社區貢獻</a></li>
          <li><a href="#">馬會知多少</a></li>
        </ul>

        {/* Right Side - Language Switch */}
        <div className="lang-switch">
          <button><AiOutlineGlobal /><span>ENG</span></button>
          <button className="logout-btn" onClick={handleLogout}>
            登出
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
