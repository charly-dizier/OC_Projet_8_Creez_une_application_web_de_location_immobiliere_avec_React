import banner_img from '../../assets/img/banner_img.jpg'

function Banner() {
  return (
    <section className="banner">
      <img className="banner__img" src={banner_img} alt="bord de mer" />
      <div className="banner__darkFilter"></div>
      <p className="banner__txt">
        Chez vous, <br className="banner__txt-breakpoint" />
        partout et ailleurs
      </p>
    </section>
  )
}

export default Banner
