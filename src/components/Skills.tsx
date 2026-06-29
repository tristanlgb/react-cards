function Skills() {
  return (
    <section id="stack" className="section py-5 bg-light">
      <div className="container">
        <div className="section-header fade-in-up">
          <span className="eyebrow">🧰 Tech Stack</span>
          <h2>Tools and technologies I use</h2>
          <p className="section-intro">
            From frontend interfaces to backend services, this is the stack I rely on to ship production-ready applications.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-4 fade-in-up delay-1">
            <div className="card shadow-sm h-100 p-4 text-center">
              <h3 className="h5">Frontend</h3>
              <p className="text-muted">React, TypeScript, Vite, responsive design and polished UI.</p>
            </div>
          </div>

          <div className="col-md-4 fade-in-up delay-2">
            <div className="card shadow-sm h-100 p-4 text-center">
              <h3 className="h5">Backend</h3>
              <p className="text-muted">NestJS, Express.js, REST APIs, Socket.IO and service architecture.</p>
            </div>
          </div>

          <div className="col-md-4 fade-in-up delay-3">
            <div className="card shadow-sm h-100 p-4 text-center">
              <h3 className="h5">Data</h3>
              <p className="text-muted">MongoDB, authentication, data modeling and secure integrations.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;
