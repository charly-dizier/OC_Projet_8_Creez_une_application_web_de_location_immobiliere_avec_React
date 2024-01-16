import React from 'react'
import Card from '../Card'
import data from '../../utils/data.json'

function Gallery() {
  return (
    <section className="gallery">
      {data.map((data) => {
        return (
          <Card
            key={data.id}
            id={data.id}
            title={data.title}
            cover={data.cover}
          />
        )
      })}
    </section>
  )
}

export default Gallery
