import ProfilePhoto from '../assets/portfolio_image.jpeg';

const Landing = () => {
  return (
    <header className="header  section  section--bordered">
      <span className="meta-info">
          <span className="meta-info__item">Skylar Dryden</span> 
          <span className="meta-info__item meta-info__item--dot">•</span> 
          <span className="meta-info__item">Front-end Developer</span> 
          <span className="meta-info__item meta-info__item--dot">•</span> 
          <span className="meta-info__item"><a href="https://www.linkedin.com/in/skylar-dryden-29b914182/" target="_blank" className="meta-info__link">LinkedIn</a></span> 
      </span>
      <div className="landing-banner">
          <h1 className="heading heading--main">hello</h1>
          <img src={ProfilePhoto} className="landing-banner__photo" />
      </div>
      <h2 className="heading heading--second-main">Welcome to my website</h2>
    </header>
  )
}

export default Landing;