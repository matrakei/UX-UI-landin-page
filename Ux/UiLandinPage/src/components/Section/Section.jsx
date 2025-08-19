import "./Section.css"

export default function Section() {
  return (
    <section className="section">
      <div className="section-container">
        <div className="content">
          <p className="intro-text">Conoce Zuop</p>
          <h1 className="main-title">Tu casa, su casa.</h1>
          <p className="subtitle">Intercambiá experiencias, no solo llaves.</p>
          <button className="explore-btn">Explorar →</button>
        </div>

        <div className="image-container">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6w2W8a2x0482n4g2l3f8Hk89v2FYYs.png"
            alt="Casa moderna con piscina"
            className="house-image"
          />
        </div>
      </div>
    </section>
  )
}
