import React from 'react'
import { Link } from 'react-router-dom'

function Card({ id, title, cover }) {
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
