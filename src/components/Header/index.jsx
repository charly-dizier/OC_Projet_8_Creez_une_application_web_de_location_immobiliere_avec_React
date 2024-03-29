//Importation des hooks
import { NavLink, Link } from 'react-router-dom'
//importation des assets
import logo from '../../assets/logo/logo-header.svg'

function Header() {
  //Rendu JSX (DOM virtuel)
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Kasa logo" className="header__logo" />
      </Link>
      <nav className="header__nav">
        <NavLink
          className={({ isActive }) =>
            isActive ? 'header__nav-active' : 'header__nav-link'
          }
          to="/"
        >
          Acceuil
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'header__nav-active' : 'header__nav-link'
          }
          to="/About"
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
