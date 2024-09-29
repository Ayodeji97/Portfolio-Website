import { projects } from "./app.constants";
import ProjectItem from "./components/ui/project-item";
import SectionHeader from "./components/ui/section-header";

function Project() {
  return (
    <section className="project-section" id="project">
      <div className="container">
        <SectionHeader text="Projects" />
        <div className="project-box">
          {projects.map((project, i) => (
            <ProjectItem
              title={project.title}
              description={project.description}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
              img={project.img}
              key={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
