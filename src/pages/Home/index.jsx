//importation des composants nécéssaire
import Banner from '../../components/Banner/index'
import Gallery from '../../components/Gallery'
//importation des assets
import bannerHome_img from '../../assets/img/bannerHome_img.jpg'

function Home() {
  //Mise à jour du titre de la page
  document.title = 'Acceuil - Kasa'

  //Rendu JSX (DOM virtuel)
  return (
    <main className="homePage">
      <Banner
        img={bannerHome_img}
        alt="Bord de mer"
        txt="Chez vous, 
        partout et ailleurs"
      />
      <Gallery />
    </main>
  )
}

export default Home
