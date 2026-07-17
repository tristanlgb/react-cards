function Projects() {
  return (
    <section id="projects" className="section py-5">
      <div className="container">
        <div className="section-header fade-in-up">
          <span className="eyebrow">🚀 Featured Projects</span>
          <h2>Real applications that showcase my skills</h2>
          <p className="section-intro">
            These are some of the applications I built using React, TypeScript, NestJS, Express and MongoDB.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-6 fade-in-up delay-1">
            <div className="card project-card shadow-sm h-100">
              <div className="card-body">
                <h3 className="h5">Full Stack E-Commerce</h3>
                <p className="text-muted">
                  NestJS backend, MongoDB, and React frontend with JWT + OAuth authentication.
                </p>
                <div className="badge-group mb-3">
                  <span className="badge bg-primary">NestJS</span>
                  <span className="badge bg-secondary">MongoDB</span>
                  <span className="badge bg-info text-dark">React</span>
                </div>
                <a className="btn btn-outline-primary me-2" href="https://tpfinal-react-lenzberg.vercel.app/" target="_blank" rel="noreferrer">Live Demo</a>
                <a className="btn btn-primary" href="https://github.com/tristanlgb/TPFinal_React_Lenzberg" target="_blank" rel="noreferrer">Code</a>
              </div>
            </div>
          </div>

          <div className="col-md-6 fade-in-up delay-2">
            <div className="card project-card shadow-sm h-100">
              <div className="card-body">
                <h3 className="h5">Real-Time Chat App</h3>
                <p className="text-muted">
                  Socket.IO + Express + React with chat rooms and private messaging.
                </p>
                <div className="badge-group mb-3">
                  <span className="badge bg-primary">Socket.IO</span>
                  <span className="badge bg-secondary">Express</span>
                  <span className="badge bg-info text-dark">React</span>
                </div>
                <a className="btn btn-primary" href="https://github.com/tristanlgb/Entrega2-Backend1" target="_blank" rel="noreferrer">Code</a>
              </div>
            </div>
          </div>

          <div className="col-md-6 fade-in-up delay-3">
            <div className="card project-card shadow-sm h-100">
              <div className="card-body">
                <h3 className="h5">Portfolio Website</h3>
                <p className="text-muted">
                  React + Vite portfolio with professional presentation of projects and contact form.
                </p>
                <div className="badge-group mb-3">
                  <span className="badge bg-primary">React</span>
                  <span className="badge bg-secondary">Vite</span>
                  <span className="badge bg-info text-dark">Design</span>
                </div>
                <a className="btn btn-outline-primary me-2" href="https://react-cards-one-nu.vercel.app/" target="_blank" rel="noreferrer">Live Demo</a>
                <a className="btn btn-primary" href="https://github.com/tristanlgb/reactCards-main" target="_blank" rel="noreferrer">Code</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects;
