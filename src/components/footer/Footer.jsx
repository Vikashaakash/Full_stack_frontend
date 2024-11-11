import React from "react";
import "./footer.css";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>
          &copy; 2024 Your E-Learning Platform. All rights reserved. <br /> Made
          with ❤️ <a href="">Vikash Kumar, Sumeet Singh, Yash Tomar, Yash Aggarwal</a>
        </p>
        <div className="social-links">
        </div>
      </div>
    </footer>
  );
};

export default Footer;
