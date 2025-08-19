import "./Header.css"

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-text">Zuop</span>
        </div>

        <nav className="nav">
          <a href="#sobre-nosotros" className="nav-link">
            Sobre nosotros
          </a>
          <a href="#contactanos" className="nav-link">
            Contactanos
          </a>
          <a href="#preguntas" className="nav-link">
            Preguntas frecuentes
          </a>
          <a href="#como-funciona" className="nav-link">
            Como funciona
          </a>
        </nav>

        <button className="register-btn">Registrarse</button>
      </div>
    </header>
  )
}

export default Header
