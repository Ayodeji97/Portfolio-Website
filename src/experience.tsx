import { experiences } from "./app.constants";
import ExperienceComponent from "./components/ui/experience";
import FullStop from "./components/ui/full-stop";

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <div className="header">
          {" "}
          <h1>Experience</h1> <FullStop />
        </div>
        <div className="experience-box">
          {experiences.map((experience, i) => (
            <ExperienceComponent
              role={experience.role}
              companyName={experience.companyName}
              description={experience.description}
              index={i + 1}
              key={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
