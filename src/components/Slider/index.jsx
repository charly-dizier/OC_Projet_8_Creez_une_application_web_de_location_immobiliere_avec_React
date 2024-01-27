//Importation des hooks
import { useState } from 'react'
//importation des assets
import ArrowNext from '../../assets/logo/nextSlid.svg'
import ArrowPrev from '../../assets/logo/prevSlide.svg'

function Slider({ imageSlider }) {
  //initialisation du hook useState qui permettra de gérer l'index de l'image actuellement affichée
  const [currentIndex, setCurrentIndex] = useState(0)

  // Fonction pour passer à l'image' suivante
  const nextSlide = () => {
    setCurrentIndex(currentIndex + 1)
    // Si l'index atteint la fin du tableau, revenir à la première image
    if (currentIndex === imageSlider.length - 1) setCurrentIndex(0)
  }

  // Fonction pour revenir à la diapositive précédente
  const prevSlide = () => {
    setCurrentIndex(currentIndex - 1)
    // Si l'index est déjà à la première image, passer à la dernière image
    if (currentIndex === 0) setCurrentIndex(imageSlider.length - 1)
  }

  //Rendu JSX (DOM virtuel)
  return (
    <section
      style={{ backgroundImage: `url(${imageSlider[currentIndex]})` }}
      className="slider"
    >
      {/* Affichage des flèches et du compteur si le tableau contient au minimum 2 images */}
      {imageSlider.length > 1 && (
        <>
          <>
            <img
              className="slider__arrowIcon arrow-prev"
              src={ArrowPrev}
              alt="icon flèche précédente"
              onClick={prevSlide}
            />
            <img
              className="slider__arrowIcon arrow-next"
              src={ArrowNext}
              alt="icon flèche suivante"
              onClick={nextSlide}
            />
          </>
          <p className="slider__compter">
            {currentIndex + 1} / {imageSlider.length}
          </p>
        </>
      )}
    </section>
  )
}

export default Slider
