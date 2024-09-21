import { technologies } from "./app.constants";
import FullStop from "./components/ui/full-stop";
import Technology from "./components/ui/technology";

function About() {
  return (
    <section className="about-section">
      <div className="container">
        <div className=" header about-header">
          {" "}
          <h1>About me</h1> <FullStop />
        </div>
        <div className="about-content">
          <div className="about-bar"></div>
          <p className="about-text">
            I am a software engineer with a passion for web development. I have
            experience in building web applications using modern technologies.
          </p>
        </div>
        <div className="about-skills">
          <h3>My Technologies .</h3>
          <ul className="about-skills-list">
            {technologies.map((tech) => (
              <Technology src={tech.src} alt={tech.alt} />
            ))}
          </ul>
        </div>
        <div className="about-skills">
          <h3>My Hobbies .</h3>
          <ul className="about-skills-list">
            {technologies.map((tech) => (
              <Technology src={tech.src} alt={tech.alt} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
