//importation des composants nécéssaire
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
//importation des assets
import bannerAbout_img from '../../assets/img/bannerAbout_img.png'
//importation du fichier de données
import dataAbout from '../../utils/data/dataAbout.json'

function About() {
  //Mise à jour du titre de la page
  document.title = 'A propos - Kasa'

  //Rendu JSX (DOM virtuel)
  return (
    <main className="aboutPage">
      <Banner img={bannerAbout_img} alt="Paysage montagne" title="" />
      <section className="collapse">
        <div className="collapse__dropdown">
          {dataAbout.map((data) => {
            return (
              <Collapse
                key={data.id}
                title={data.title}
                content={data.content}
              />
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default About
