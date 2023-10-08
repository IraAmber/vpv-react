import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Logo from '../vnv.png'
import '../components/styles/Navbar.css'

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true)

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="https://vnv.solutions/">
          <img src={Logo} alt="Лого" className="navbar-logo" />
        </a>
        <button
          className={`navbar-toggler ${isNavCollapsed ? 'collapsed' : ''}`}
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isNavCollapsed ? '' : 'show'}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#service">
                Послуги
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#advantages">
                Переваги
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                Портфоліо
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#feedbacks">
                Відгуки
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#lead-magnet">
                Бонус +
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
