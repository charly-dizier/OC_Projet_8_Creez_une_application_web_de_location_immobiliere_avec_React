//Importation de Link pour gérer la navigation entre les pages
import { Link } from 'react-router-dom'

function Card({ id, title, cover }) {
  //Rendu JSX (DOM virtuel)
  return (
    <Link to={`/Accomodation/${id}`}>
      <div className="card">
        <img className="card__img" src={cover} alt={title} />
        <h3 className="card__title">{title}</h3>
      </div>
    </Link>
  )
}

export default Card
