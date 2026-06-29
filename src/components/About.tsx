function About() {
  return (
    <section id="about" className="section py-5">
      <div className="container">
        <div className="section-header fade-in-up">
          <span className="eyebrow">🧑‍💻 About Me</span>
          <h2>Hi! I'm Tristan Lenzberg, a Full Stack Developer from Buenos Aires.</h2>
          <p className="section-intro">
            I specialize in building modern, scalable web applications using React, TypeScript, Vite, and powerful backend technologies like NestJS and Express.
          </p>
        </div>

        <div className="row align-items-center gy-4">
          <div className="col-lg-6 fade-in-up delay-1">
            <div className="card shadow-sm h-100 p-4">
              <p className="text-muted">
                I am trained at Coderhouse and studied Communications at the University of Buenos Aires. I enjoy building clear, responsive UIs and solid, well-structured backends.
              </p>
              <p className="text-muted">
                My focus is on clean architecture, reusable components, and performance-driven design. I build apps that not only work great but are easy to scale and maintain.
              </p>
            </div>
          </div>

          <div className="col-lg-6 fade-in-up delay-2">
            <div className="card shadow-sm h-100 p-4">
              <h3>What I bring</h3>
              <ul className="text-muted lh-lg">
                <li>Frontend development with React, TypeScript, and Vite.</li>
                <li>Backend APIs using NestJS, Express, and MongoDB.</li>
                <li>Clean architecture, strong DX, and polished deliverables.</li>
              </ul>
              <p className="text-muted">
                If you're looking for someone technically strong, detail-oriented, and passionate, let's build something amazing together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
