function About() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="shell about-grid">
        <div className="section-label">
          <span>02</span>
          <p>About & stack</p>
        </div>
        <div className="about-content">
          <h2 id="about-title">
            Technical curiosity.
            <br />A human perspective.
          </h2>
          <div className="about-columns">
            <p>
              I’m a{" "}
              <strong>
                full-stack developer and Social Communication graduate from the
                University of Buenos Aires
              </strong>
              . My projects connect web interfaces, external services and data,
              with attention to how people actually use them.
            </p>
            <p>
              I’m also studying <strong>Sociology at UBA</strong>. Research and
              communication help me clarify requirements, explain technical
              decisions and make complex information easier to understand.
            </p>
          </div>
          <div className="stack-grid">
            <div>
              <h3>Interfaces</h3>
              <p>
                React · TypeScript · Angular
                <br />
                Responsive CSS · Accessibility
              </p>
            </div>
            <div>
              <h3>Services & data</h3>
              <p>
                Node.js · HTTP APIs · MongoDB
                <br />
                Provider integration · Validation
              </p>
            </div>
            <div>
              <h3>Quality & delivery</h3>
              <p>
                Git · Vite · Vercel
                <br />
                Vitest · ESLint · TypeScript checks
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
