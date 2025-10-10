import './App.css'

function App() {
  return (
    <div className="App">
      <header className="hero">
        <h1>Hairharmony</h1>
        <p>Your ultimate hair care companion app</p>
        <button>Get Started</button>
      </header>
      <section className="about">
        <h2>About Hairharmony</h2>
        <p>Discover the perfect harmony for your hair with our innovative app.</p>
      </section>
      <section className="features">
        <h2>Features</h2>
        <div className="feature-list">
          <div className="feature">
            <h3>Personalized Care</h3>
            <p>Tailored hair care routines based on your hair type.</p>
          </div>
          <div className="feature">
            <h3>Expert Tips</h3>
            <p>Get advice from hair care professionals.</p>
          </div>
          <div className="feature">
            <h3>Track Progress</h3>
            <p>Monitor your hair health over time.</p>
          </div>
        </div>
      </section>
      <footer>
        <p>&copy; 2023 Hairharmony. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App