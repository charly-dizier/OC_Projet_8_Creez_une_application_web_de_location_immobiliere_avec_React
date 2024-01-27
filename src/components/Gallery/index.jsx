//importation des composants nécéssaire
import Card from '../Card'
//importation du fichier de données
import data from '../../utils/data/data.json'

function Gallery() {
  //Rendu JSX (DOM virtuel)
  return (
    <section className="gallery">
      {/* Mapping des données de data pour créer une Card pour chaque élément */}
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
