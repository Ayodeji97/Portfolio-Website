import { experiences } from "./app.constants";
import BackgroundGradient from "./components/ui/backgorund-gradient";
import ExperienceComponent from "./components/ui/experience";
import SectionHeader from "./components/ui/section-header";

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <BackgroundGradient className="experience-background-gradient" />
      <div className="container">
        <SectionHeader text="Experience" />

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
