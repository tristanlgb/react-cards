import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return <header className="site-header"><nav className="shell nav" aria-label="Main navigation">
    <a className="brand" href="#home" onClick={close}><span>TL</span>Tristan Lenzberg</a>
    <button className="menu-button" type="button" aria-expanded={open} aria-controls="nav-links" onClick={() => setOpen(!open)}><i/><i/><i/><span className="sr-only">Open menu</span></button>
    <div id="nav-links" className={`nav-links ${open ? 'open' : ''}`}>
      <a href="#about" onClick={close}>About</a><a href="#projects" onClick={close}>Work</a><a href="#contact" onClick={close}>Contact</a>
      <a className="nav-cta" href="https://drive.google.com/file/d/1SGQyw23De9kk18zZmCULGiOmXOAI07mR/view?usp=sharing" target="_blank" rel="noreferrer">View résumé ↗</a>
    </div>
  </nav></header>
}
export default Navbar
