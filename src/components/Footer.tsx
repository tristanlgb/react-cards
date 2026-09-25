function Footer() {
  return (
    <footer>
      <div className="shell footer-inner">
        <a className="brand" href="#home">
          <span>TL</span>Tristan Lenzberg
        </a>
        <p>Full-stack developer · Buenos Aires, Argentina.</p>
        <p>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
export default Footer;
