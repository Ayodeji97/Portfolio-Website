import About from "./about";
import Contact from "./contact";
import Experience from "./experience";
import Hero from "./home";
import Project from "./project";

function App() {
  return (
    <div className="app-container">
      <Hero />
      <About />
      <Experience />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
