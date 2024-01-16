import React from 'react'
import { Link } from 'react-router-dom'

function Card({ id, title, cover }) {
  return (
    //! chemin doit mener a la page logement en utilisant l'id de l'item
    <Link to={`/logement/${id}`}>
      <div className="card">
        <img className="card__img" src={cover} alt={title} />
        <h3 className="card__title">{title}</h3>
      </div>
    </Link>
  )
}

export default Card
