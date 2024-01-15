import { Link } from 'react-router-dom'

import logo from '../../assets/logo/logo-footer.svg'

function Footer() {
  return (
    <footer className="footer">
      <Link to="/">
        <img src={logo} alt="logo Kasa" className="footer__logo" />
      </Link>
      <p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
