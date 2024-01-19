import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../../utils/data/data.json'
import Slider from '../../components/Slider'
import redStar from '../../assets/logo/redStar.svg'
import greyStar from '../../assets/logo/greyStar.svg'
import Collapse from '../../components/Collapse'

function Accomodation() {
  document.title = 'Logement - Kasa'
  const [imageSlider, setImageSlider] = useState([])

  const { id } = useParams()
  const dataLogement = data.filter((data) => data.id === id)
  const currentData = dataLogement[0]

  const title = currentData.title
  const location = currentData.location
  const name = currentData.host.name.split()
  const hostPicture = currentData.host.picture
  const tags = currentData.tags
  const rating = currentData.rating
  const description = currentData.description
  const equipments = currentData.equipments

  useEffect(() => {
    if (dataLogement.length > 0) {
      setImageSlider(currentData.pictures)
    }
  }, [id, dataLogement])

  return (
    <main className="accomodation">
      <Slider imageSlider={imageSlider} />

      <section className="accomodation__info">
        <div className="accomodation__info--container">
          <h1 className="accomodation__info--title">{title}</h1>
          <p className="accomodation__info--location">{location}</p>
          <div className="accomodation__info--tagsContainer">
            {tags.map((tag, index) => {
              return (
                <p key={index} className="accomodation__info--tags">
                  {tag}
                </p>
              )
            })}
          </div>
        </div>
        <div className="accomodation__info--host-rating">
          {' '}
          <div className="accomodation__info--host">
            <div className="accomodation__info--host-name">
              {/* besoin de split le nom */}
              <span>{name[0]}</span>
            </div>
            <img
              src={hostPicture}
              alt={name}
              className="accomodation__info--host-picture"
            />
          </div>
          <div className="accomodation__info--rating">
            {[...Array(5)].map((star, index) => {
              const ratingValue = index + 1
              return (
                <img
                  key={index}
                  src={ratingValue <= rating ? redStar : greyStar}
                  alt="star"
                  className="accomodation__info--rating-star"
                />
              )
            })}
          </div>
        </div>
      </section>
      <section className="accomodation__collapse">
        <Collapse title="Description" content={description} />
        <Collapse
          title="Equipements"
          content={equipments.map((equipment, index) => {
            return <span key={index}>{equipment}</span>
          })}
        />
      </section>
    </main>
  )
}

export default Accomodation
