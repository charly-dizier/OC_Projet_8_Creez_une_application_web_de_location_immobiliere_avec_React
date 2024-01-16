import Banner from '../../components/Banner/index'
import Gallery from '../../components/Gallery'
import banner_img from '../../assets/img/banner_img.jpg'

function Home() {
  document.title = 'Acceuil - Kasa'

  return (
    <div className="homePage">
      <Banner
        img={banner_img}
        alt="Bord de mer"
        txt="Chez vous, 
        partout et ailleurs"
      />
      <Gallery />
    </div>
  )
}

export default Home
