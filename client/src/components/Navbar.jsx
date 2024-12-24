import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { CgMenuRightAlt } from "react-icons/cg";
import { ImCross } from "react-icons/im";
import { useAuth } from "../store/auth";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
      let windowWidth = window.innerWidth;
      if ( windowWidth < 600) {
        setIsOpen(false);
      } else {
        setIsOpen(false);
      }
      if (windowWidth > 600) {
        setIsOpen(true);
      }else{
        setIsOpen(false);
      }    
  }, []);

  const { isLoggedIn, user } = useAuth();

  return (
    <>
      <header>
        <div className="container">
          <div className="logo-brand">
            <ul>
              <li>
                <NavLink to="/">Biplap</NavLink>
              </li>
              {isLoggedIn && user.isAdmin && (
                <li>
                  <NavLink to="/admin">Admin</NavLink>
                </li>
              )}
            </ul>
          </div>

          <nav>
            <ul className={isOpen ? "show" : ""}>
              <li className="menu-icon" onClick={toggleMenu}>
                {isOpen ? (
                  <ImCross className="cross-icon" />
                ) : (
                  <CgMenuRightAlt className="hamicon" />
                )}
              </li>
              {isOpen && (
                <>
                  <li>
                    <NavLink to="/"> Home </NavLink>
                  </li>
                 <li>
                    <NavLink to="/about"> About </NavLink>
                  </li>
                  <li>
                    <NavLink to="/service"> Services </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact"> Contact </NavLink>
                  </li>
                  {isLoggedIn ? (
                    <li>
                      <NavLink to="/logout">Logout</NavLink>
                    </li>
                  ) : (
                      <li>
                        <NavLink to="/login"> Login </NavLink>
                      </li>
                  )}
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
