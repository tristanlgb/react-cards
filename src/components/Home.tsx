function Home() {
  return (
    <section id="home" className="hero-section" aria-labelledby="hero-title">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <span className="kicker">
            <i /> Full-stack developer · Buenos Aires
          </span>
          <h1 id="hero-title">
            From interface
            <br />
            to API.
            <br />
            <em>Built with purpose.</em>
          </h1>
          <p>
            I’m Tristan Lenzberg. I build web applications with React,
            TypeScript and Node.js, connecting thoughtful interfaces with the
            services behind them.
          </p>
          <p className="hero-intro">
            A background in Social Communication at UBA brings research, clear
            writing and a human perspective to my development work.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">
              Explore my projects <span aria-hidden="true">↗</span>
            </a>
            <a
              className="button ghost"
              href="https://drive.google.com/file/d/1SGQyw23De9kk18zZmCULGiOmXOAI07mR/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              View résumé ↗
            </a>
          </div>
          <div className="hero-meta">
            <span>
              <strong>Frontend</strong>React · TypeScript · Angular
            </span>
            <span>
              <strong>Backend & delivery</strong>Node.js · HTTP APIs · Vercel
            </span>
          </div>
        </div>
        <aside
          className="engineering-card"
          aria-label="Featured project architecture"
        >
          <div className="engineering-header">
            <span className="status-dot" /> PROJECT SPOTLIGHT{" "}
            <span>01 / 07</span>
          </div>
          <p className="engineering-eyebrow">Independent editorial prototype</p>
          <h2>La Nación Cards</h2>
          <p>A news experience built across the stack.</p>
          <ol className="architecture-flow">
            <li>
              <span>01</span>
              <div>
                <strong>React + TypeScript</strong>
                <small>Search, filters & saved stories</small>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <strong>Node.js · /api/news</strong>
                <small>Validation, timeouts & response caching</small>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <strong>GNews / public RSS</strong>
                <small>Server-side provider integration</small>
              </div>
            </li>
          </ol>
          <a href="#projects">
            Explore the implementation <span aria-hidden="true">↗</span>
          </a>
        </aside>
      </div>
    </section>
  );
}
export default Home;
