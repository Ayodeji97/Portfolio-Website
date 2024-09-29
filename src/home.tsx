import BackgroundGradient from "./components/ui/backgorund-gradient";
import ShinyText from "./components/ui/shiny-text";
import { SplitText } from "./components/ui/split-text";
import { motion } from "framer-motion";
import Navbar from "./navbar";
import { leftVariants, rightVariants, TRANSITION } from "./app.constants";

function Hero() {
  return (
    <div className="hero">
      <Navbar />
      <BackgroundGradient className="hero-background-gradient" />
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            {/* Hello <div className="hero-wave">👋</div> ,{" "} */}{" "}
            <SplitText text="Hello! I'm John" />
          </h1>
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={rightVariants}
            transition={{
              ...TRANSITION,
              delay: 2.3,
            }}
            className="hero-subtitle"
          >
            {" "}
            <span> Android </span> Developer
          </motion.h2>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={rightVariants}
            transition={{
              ...TRANSITION,
              delay: 2.3,
            }}
            className="hero-description"
          >
            I'm an android developer based in New York, NY.
          </motion.p>
          <motion.a
            initial="hidden"
            animate="visible"
            variants={leftVariants}
            transition={{
              ...TRANSITION,
              delay: 2.8,
            }}
            href="#contact"
            className="btn"
          >
            <ShinyText text="Get in touch" />
          </motion.a>
        </div>
        <div className="hero-image">
          <div className="hero-image-container">
            <img src="https://via.placeholder.com/400" alt="John Doe" />
            <div className="hero-ball"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
