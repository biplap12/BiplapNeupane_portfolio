import "./Footer.css";
import { NavLink } from "react-router-dom";
const date = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer>
    <p>© <NavLink className="footerNavlink" target="_blank" rel="noreferrer" to="https://biplapneupane.com.np/">Biplap Neupane❤️ {date}</NavLink> </p> 
    </footer>
  );
};
