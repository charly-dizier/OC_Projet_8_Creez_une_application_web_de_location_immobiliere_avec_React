//Importation des hooks
import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
//importation du fichier de données
import data from '../../utils/data/data.json'
//importation des composants nécéssaire
import Slider from '../../components/Slider'
import Collapse from '../../components/Collapse'
//importation des assets
import redStar from '../../assets/logo/redStar.svg'
import greyStar from '../../assets/logo/greyStar.svg'

function Accomodation() {
  //Mise à jour du titre de la page
  document.title = 'Logement - Kasa'

  //initialisation des hooks
  const navigate = useNavigate()
  const [imageSlider, setImageSlider] = useState([])
  const { id } = useParams()

  //Filtrage des données pour n'inclure que celles correspondant à l'ID de l'URL
  const dataAccomodation = data.filter((data) => data.id === id)

  useEffect(() => {
    //Si le tableau dataAccomodation est vide, redirection vers la page Error
    if (dataAccomodation.length === 0) {
      navigate('/Error')
    } else {
      // Si des données sont trouvées, mise à jour du state des images du slider
      setImageSlider(dataAccomodation[0].pictures)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, dataAccomodation])

  //Ne rien faire si aucune données est trouvé, la redirection à déjà été effectué
  if (dataAccomodation.length === 0) {
    return null
  }

  //Création de currentData comme étant la première itératino du tableau dataAccomodation
  const currentData = dataAccomodation[0]
  //On split name pour l'afficher dans des span différent
  const name = currentData.host.name.split(' ')

  //Rendu JSX (DOM virtuel)
  return (
    <main className="accomodation">
      <Slider imageSlider={imageSlider} />
      <section className="accomodation__info">
        <div className="accomodation__info--container">
          <h1 className="accomodation__info--title">{currentData.title}</h1>
          <p className="accomodation__info--location">{currentData.location}</p>
          <div className="accomodation__info--tagsContainer">
            {currentData.tags.map((tag, index) => {
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
              <span>{name[0]}</span>
              <span>{name[1]}</span>
            </div>
            <img
              src={currentData.host?.picture}
              alt={name}
              className="accomodation__info--host-picture"
            />
          </div>
          <div className="accomodation__info--rating">
            {/* Création d'un tableau contenant 5 itération et boucle de rendu pour chaque itération */}
            {[...Array(5)].map((_, index) => {
              //creation d'une valeur de notation allant de 1 à 5
              const ratingValue = index + 1
              return (
                <img
                  key={index}
                  //Si la note est atteint ou dépaser, on affiche une etoile rouge, sinon une grise
                  src={ratingValue <= currentData.rating ? redStar : greyStar}
                  alt="star"
                  className="accomodation__info--rating-star"
                />
              )
            })}
          </div>
        </div>
      </section>
      <section className="accomodation__collapse">
        <Collapse title="Description" content={currentData.description} />
        <Collapse
          title="Equipements"
          content={currentData.equipments.map((equipment, index) => {
            return <span key={index}>{equipment}</span>
          })}
        />
      </section>
    </main>
  )
}

export default Accomodation
