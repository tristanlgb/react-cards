import profilePhoto from '../assets/hero.png'

function Home() {
  return (
    <section id="home" className="hero section py-5">
      <div className="container">
        <div className="hero-card p-5 shadow-sm fade-in-up">
          <div className="row align-items-center gy-4">
            <div className="col-lg-7">
              <span className="eyebrow">👋 Hello, I'm Tristan</span>
              <h1 className="hero-title">Full-Stack Developer</h1>
              <p className="hero-text">
                I build modern web applications with React, TypeScript, Express/NestJS, and MongoDB. I focus on clean architecture, reusable components, and scalable frontend/backend solutions.
              </p>

              <div className="hero-actions">
                <a className="btn btn-primary btn-lg" href="#projects">Featured Projects</a>
                <a className="btn btn-outline-primary btn-lg" href="#contact">Contact Me</a>
              </div>

              <div className="stat-grid mt-4">
                <div className="stat-card">
                  <h3>8+</h3>
                  <p>Años de experiencia</p>
                </div>
                <div className="stat-card">
                  <h3>25+</h3>
                  <p>Proyectos entregados</p>
                </div>
                <div className="stat-card">
                  <h3>15</h3>
                  <p>Clientes satisfechos</p>
                </div>
              </div>
            </div>

            <div className="col-lg-5 text-center">
              <img
                src={profilePhoto}
                alt="Profile"
                className="img-fluid rounded-4 shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home;
