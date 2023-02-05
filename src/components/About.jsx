const About = () => {

  return (
    <div className="about" id="about">
      <h1>About Me</h1>

      <section className="about-info">
        <img src="https://firebasestorage.googleapis.com/v0/b/vm-dev-fa2be.appspot.com/o/portfolio-photo.JPG?alt=media&token=f72d9c89-b609-430f-a927-fb1dce1f0743" className="about-photo" alt="My portfolio" />
        
        <div className="about-info-text">
          <p>
            Hi, my name is Vince Mangahis. I am a web developer from Santa Rosa, Laguna. Solving problems through creation of programs or web applications are one of my hobbies.
          </p>
          <br />
          <p>As a programmer, I am eager to learn more skills in my field. Currently I am focusing on building software using Python 
            along with the needed frameworks like Django.</p>

        </div>
        

      </section>
      </div>
  )
}

export default About;