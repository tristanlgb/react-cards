function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="#home">
          <span className="brand-mark">TL</span>
          <span>Tristan Lenzberg</span>
        </a>

        <div className="navbar-nav">
          <a className="nav-link" href="#home">Home</a>
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href="#stack">Tech Stack</a>
          <a className="nav-link" href="#projects">Projects</a>
          <a className="nav-link" href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
