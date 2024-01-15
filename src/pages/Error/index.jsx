import { Link } from 'react-router-dom'

function Error() {
  return (
    <section className="error">
      <p className="error__404">404</p>
      <p className="error__txt">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="error__link">
        <p>Retourner sur la page d’accueil</p>
      </Link>
    </section>
  )
}

export default Error
