function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Tristan Lenzberg</a>

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
