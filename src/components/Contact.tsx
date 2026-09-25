function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="shell contact-grid">
        <div className="section-label">
          <span>03</span>
          <p>Contact</p>
        </div>
        <div className="contact-copy">
          <span className="kicker">
            <i /> Open to new opportunities
          </span>
          <h2>
            Looking for a developer?
            <br />
            <em>Let’s talk.</em>
          </h2>
          <p>
            I’m open to full-stack development roles and web projects. Get in
            touch to discuss your team, the product you’re building and where I
            can contribute.
          </p>
          <div className="contact-actions">
            <a className="button primary" href="mailto:tristanlgb@hotmail.com">
              tristanlgb@hotmail.com <span>→</span>
            </a>
            <a
              href="https://www.linkedin.com/in/tristanlenzberg"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/tristanlgb"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
