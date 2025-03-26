import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { images } from '../../constants'

const HomeNavbar = ({setShowMenu, showMenu}) => {
  return (
    <>
        { showMenu && (
          <div className="app__navbar-smallScreen_overlay slide-bottom">
            <div className="smallSreen-headLine">
              <img src={images.logoWebsite} alt="logo img" />
              <FaTimes color="#fff" fontSize={27} onClick={() => setShowMenu(false)}  />
            </div>
            <ul className="app__navbar-smallScreen-links">
              <li className="navbar__link">
                <Link to="/" onClick={() => setShowMenu(false)}>
                  Accueil
                </Link>
              </li>
              <li className="navbar__link">
                <Link to="/about" onClick={() => setShowMenu(false)}>
                  A propos
                </Link>
              </li>
              <li className="navbar__link">
                <Link to="/services" onClick={() => setShowMenu(false)}>
                  Services
                </Link>
              </li>
              <li className="navbar__link">
                <Link to="/projects" onClick={() => setShowMenu(false)}>
                  Projects
                </Link>
              </li>
              <li className="navbar__link">
                <Link to="/contact" onClick={() => setShowMenu(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        ) }
    </>
  )
}

export default HomeNavbar