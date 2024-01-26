import { useState } from 'react'
import ArrowNext from '../../assets/logo/nextSlid.svg'
import ArrowPrev from '../../assets/logo/prevSlide.svg'

function Slider({ imageSlider }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex(currentIndex + 1)
    if (currentIndex === imageSlider.length - 1) setCurrentIndex(0)
  }

  const prevSlide = () => {
    setCurrentIndex(currentIndex - 1)
    if (currentIndex === 0) setCurrentIndex(imageSlider.length - 1)
  }

  return (
    <section
      style={{ backgroundImage: `url(${imageSlider[currentIndex]})` }}
      className="slider"
    >
      {/* Si le tableau contien minimum 2 image */}
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
