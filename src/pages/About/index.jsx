import React from 'react'
import Banner from '../../components/Banner'
import bannerAbout_img from '../../assets/img/bannerAbout_img.png'
import Collapse from '../../components/Collapse'
import dataAbout from '../../utils/data/dataAbout.json'

function About() {
  document.title = 'A propos - Kasa'

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
