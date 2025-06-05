import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

import images from "../../constants/images";

const Navbar = ({ showMenu, setShowMenu }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "#FF7A3D" : "white",
    };
  };

  const handleCloseMenu = () => {
    setToggleMenu(false);
    setShowMenu(false);
  };

  return (
    <div className="app__navbar">
      <div className="app__navbar-logo">
        <div className="app__navbar-logo-img">
          <img src={images.logoWebsite} alt="logo img" />
        </div>
        <p className="text-[18px] md:text-[20px] text-white font-bold"> Ona Bâtiment</p>
      </div>
      <div className="app__navbar-links-container">
        <ul className="app__navbar-links">
          <li className="navbar__link">
            <NavLink style={navLinkStyle} to="/">
              Accueil
            </NavLink>
          </li>
          <li className="navbar__link">
            <NavLink style={navLinkStyle} to="/about">
              A propos
            </NavLink>
          </li>
          <li className="navbar__link">
            <NavLink style={navLinkStyle} to="/services">
              Services
            </NavLink>
          </li>
          <li className="navbar__link">
            <NavLink style={navLinkStyle} to="/projects">
              Projets
            </NavLink>
          </li>
          <li className="navbar__link">
            <NavLink style={navLinkStyle} to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="app__navbar-smallScreen">
        <FaBars
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu || showMenu ? (
          <div className="z-50 app__navbar-smallScreen_overlay slide-bottom">
            <div className="smallSreen-headLine">
              <img src={images.logoWebsite} alt="logo img" />
              <FaTimes color="#fff" fontSize={27} onClick={handleCloseMenu} />
            </div>
            <ul className="app__navbar-smallScreen-links">
              <li className="navbar__link">
                <Link to="/" onClick={() => setToggleMenu(false)}>
                  Accueil
                </Link>
              </li>
              <li className="navbar__link">
                <Link to="/about" onClick={() => setToggleMenu(false)}>
                  A propos
                </Link>
              </li>
              <li className="navbar__link">
                <Link to="/services" onClick={() => setToggleMenu(false)}>
                  Services
                </Link>
              </li>
              <li className="navbar__link">
                <Link to="/projects" onClick={() => setToggleMenu(false)}>
                  Projets
                </Link>
              </li>
              <li className="navbar__link">
                <Link to="/contact" onClick={() => setToggleMenu(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

// const Navbar = () => {
//   const [toggleMenu, setToggleMenu] = useState(false);

//   const navLinkStyle = ({ isActive }) => {
//     return {
//       fontWeight: isActive ? "bold" : "normal",
//       color: isActive ? "#FF7A3D" : "white",
//     };
//   };

//   return (
//     <div className="app__navbar">
//       <div className="app__navbar-logo">
//         <div className="app__navbar-logo-img">
//           <img src={images.logoWebsite} alt="logo img" />
//         </div>
//         <h2>Ona Bâtiment</h2>
//     </div>
//       <div className="app__navbar-links-container">
//         <ul className="app__navbar-links">
//           <li className="navbar__link">
//             <NavLink style={navLinkStyle} to="/">
//               Accueil
//             </NavLink>
//           </li>
//           {/* <li className="navbar__link">
//             <NavLink style={navLinkStyle} to="/about">
//               A propos
//             </NavLink>
//           </li> */}
//           <li className="navbar__link">
//             <NavLink style={navLinkStyle} to="/services">
//               Services
//             </NavLink>
//           </li>
//           <li className="navbar__link">
//             <NavLink style={navLinkStyle} to="/projects">
//               Projects
//             </NavLink>
//           </li>
//           <li className="navbar__link">
//             <NavLink style={navLinkStyle} to="/contact">
//               Contact
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//       <div className="app__navbar-smallScreen">
//         <FaBars
//           color="#fff"
//           fontSize={27}
//           onClick={() => setToggleMenu(true)}
//         />

//         {toggleMenu && (
//           <div className="app__navbar-smallScreen_overlay slide-bottom">
//             <div className="smallSreen-headLine">
//               <img src={images.logoWebsite} alt="logo img" />
//               <FaTimes
//                 color="#fff"
//                 fontSize={27}
//                 onClick={() => setToggleMenu(false)}
//               />
//             </div>
//             <ul className="app__navbar-smallScreen-links">
//               <li className="navbar__link">
//                 <Link to="/" onClick={() => setToggleMenu(false)}>
//                   Accueil
//                 </Link>
//               </li>
//               <li className="navbar__link">
//                 <Link to="/about" onClick={() => setToggleMenu(false)}>
//                   A propos
//                 </Link>
//               </li>
//               <li className="navbar__link">
//                 <Link to="/services" onClick={() => setToggleMenu(false)}>
//                   Services
//                 </Link>
//               </li>
//               <li className="navbar__link">
//                 <Link to="/projects" onClick={() => setToggleMenu(false)}>
//                   Projects
//                 </Link>
//               </li>
//               <li className="navbar__link">
//                 <Link to="/contact" onClick={() => setToggleMenu(false)}>
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

export default Navbar;
