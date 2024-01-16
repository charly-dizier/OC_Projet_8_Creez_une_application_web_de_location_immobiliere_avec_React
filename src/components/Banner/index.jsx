function Banner({ img, alt, txt }) {
  return (
    <section className="banner">
      <img className="banner__img" src={img} alt={alt} />
      <div className="banner__darkFilter"></div>
      <p className="banner__txt">{txt}</p>
    </section>
  )
}

export default Banner
