import profilePhoto from '../assets/hero.png'

function Home() {
  return <section id="home" className="hero-section"><div className="shell hero-grid">
    <div className="hero-copy"><span className="kicker"><i/> Buenos Aires, Argentina</span>
      <h1>I build digital products with a <em>human point of view.</em></h1>
      <p>Full-stack developer, UBA social communicator, and Sociology student. I connect technology, research, and clear communication to turn complex ideas into thoughtful digital experiences.</p>
      <div className="hero-actions"><a className="button primary" href="#projects">Explore selected work <span>→</span></a><a className="button ghost" href="#contact">Let’s work together</a></div>
      <div className="hero-meta"><span><strong>Development</strong>Web products & interfaces</span><span><strong>Social insight</strong>Research & communication</span></div>
    </div>
    <div className="portrait-wrap"><div className="portrait-glow"/><img src={profilePhoto} alt="Tristan Lenzberg"/><span className="portrait-note">Developer × Social researcher</span></div>
  </div></section>
}
export default Home
