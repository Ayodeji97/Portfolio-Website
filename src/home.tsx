import BackgroundGradient from "./components/backgorund-gradient";
import Navbar from "./navbar";

function Hero() {
  return (
    <div className="hero">
      <Navbar />
      <BackgroundGradient className="hero-background-gradient" />
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hello <span className="hero-wave">👋</span> , I'm John
          </h1>
          <h2 className="hero-subtitle">
            {" "}
            <span> Android </span> Developer
          </h2>
          <p className="hero-description">
            I'm an android developer based in New York, NY.
          </p>
          <a href="#contact" className="btn">
            Contact Me
          </a>
        </div>
        <div className="hero-image">
          <img src="https://via.placeholder.com/400" alt="John Doe" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
