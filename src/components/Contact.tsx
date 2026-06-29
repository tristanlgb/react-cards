function Contact() {
  return (
    <section id="contact" className="section py-5 bg-light">
      <div className="container">
        <div className="section-header fade-in-up">
          <span className="eyebrow">📬 Contact</span>
          <h2>Contact Me</h2>
          <p className="section-intro">
            I'd love to hear from you. If you're looking for a developer with strong frontend and backend skills, let's connect.
          </p>
        </div>

        <div className="row align-items-center gy-4">
          <div className="col-lg-6 fade-in-up delay-1">
            <div className="card shadow-sm p-4 h-100">
              <h3>Contact details</h3>
              <p className="text-muted mb-1">Email</p>
              <p className="mb-3">tristanlgb@hotmail.com</p>
              <p className="text-muted mb-1">WhatsApp</p>
              <p className="mb-3">
                <a href="https://wa.me/541150490152" target="_blank" rel="noreferrer">+54 11 5049 0152</a>
              </p>
              <p className="text-muted mb-1">GitHub</p>
              <p className="mb-3">
                <a href="https://github.com/tristanlgb" target="_blank" rel="noreferrer">github.com/tristanlgb</a>
              </p>
              <p className="text-muted mb-1">LinkedIn</p>
              <p>
                <a href="https://www.linkedin.com/in/tristanlenzberg" target="_blank" rel="noreferrer">linkedin.com/in/tristanlenzberg</a>
              </p>
            </div>
          </div>

          <div className="col-lg-6 fade-in-up delay-2">
            <div className="card shadow-sm p-4 h-100">
              <h3>Download CV</h3>
              <p className="text-muted">
                You can download my CV below and review my experience, projects, and technical stack in detail.
              </p>
              <a className="btn btn-primary" href="#" role="button">Download CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;
