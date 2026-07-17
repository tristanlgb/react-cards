function Projects() {
  return (
    <section id="projects" className="section py-5">
      <div className="container">
        <div className="section-header fade-in-up">
          <span className="eyebrow">🚀 Featured Projects</span>

          <h2>Real applications that showcase my skills</h2>

          <p className="section-intro">
            These are some of the applications I built using React,
            TypeScript, Angular, NestJS, Express and MongoDB.
          </p>
        </div>

        <div className="row g-4">
          {/* Full Stack E-Commerce */}
          <div className="col-md-6 fade-in-up delay-1">
            <div className="card project-card shadow-sm h-100">
              <div className="card-body">
                <h3 className="h5">Full Stack E-Commerce</h3>

                <p className="text-muted">
                  Full Stack e-commerce application with a NestJS backend,
                  MongoDB database and React frontend, including JWT and OAuth
                  authentication.
                </p>

                <div className="badge-group mb-3">
                  <span className="badge bg-primary">NestJS</span>
                  <span className="badge bg-secondary">MongoDB</span>
                  <span className="badge bg-info text-dark">React</span>
                  <span className="badge bg-dark">TypeScript</span>
                </div>

                <a
                  className="btn btn-outline-primary me-2"
                  href="https://tpfinal-react-lenzberg.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>

                <a
                  className="btn btn-primary"
                  href="https://github.com/tristanlgb/TPFinal_React_Lenzberg"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          </div>

          {/* Angular Academic Portal */}
          <div className="col-md-6 fade-in-up delay-2">
            <div className="card project-card shadow-sm h-100">
              <div className="card-body">
                <h3 className="h5">Academic Administration Portal</h3>

                <p className="text-muted">
                  Academic administration portal developed with Angular and
                  TypeScript for managing students, courses and enrollments,
                  including an administrative dashboard, search tools and
                  responsive interfaces.
                </p>

                <div className="badge-group mb-3">
                  <span className="badge bg-danger">Angular</span>
                  <span className="badge bg-primary">TypeScript</span>
                  <span className="badge bg-secondary">MockAPI</span>
                  <span className="badge bg-dark">Vercel</span>
                </div>

                <a
                  className="btn btn-outline-primary me-2"
                  href="https://trabajo-final-angular-indol.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>

                <a
                  className="btn btn-primary"
                  href="https://github.com/tristanlgb/TrabajoFinalAngular"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          </div>

          {/* Portfolio */}
          <div className="col-md-6 fade-in-up delay-3">
            <div className="card project-card shadow-sm h-100">
              <div className="card-body">
                <h3 className="h5">Portfolio Website</h3>

                <p className="text-muted">
                  React and Vite portfolio with a professional presentation of
                  projects, technical skills and contact information.
                </p>

                <div className="badge-group mb-3">
                  <span className="badge bg-primary">React</span>
                  <span className="badge bg-secondary">Vite</span>
                  <span className="badge bg-info text-dark">Design</span>
                </div>

                <a
                  className="btn btn-outline-primary me-2"
                  href="https://react-cards-one-nu.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>

                <a
                  className="btn btn-primary"
                  href="https://github.com/tristanlgb/reactCards-main"
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
