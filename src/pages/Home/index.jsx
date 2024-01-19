import Banner from '../../components/Banner/index'
import Gallery from '../../components/Gallery'
import bannerHome_img from '../../assets/img/bannerHome_img.jpg'

function Home() {
  document.title = 'Acceuil - Kasa'

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
