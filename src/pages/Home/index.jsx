import Banner from '../../components/Banner/index'
import Gallery from '../../components/Gallery'

function Home() {
  document.title = 'Acceuil - Kasa'

  return (
    <div className="homePage">
      <Banner />
      <Gallery />
    </div>
  )
}

export default Home
