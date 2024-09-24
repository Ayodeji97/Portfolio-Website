import { projects } from "./app.constants";
import FullStop from "./components/ui/full-stop";
import ProjectItem from "./components/ui/project-item";

function Project() {
  return (
    <section className="project-section" id="project">
      <div className="container">
        <div className="header">
          {" "}
          <h1>Projects</h1> <FullStop />
        </div>
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
          {/* <div className="project">
            <h2>Project 2</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tincidunt, odio et tincidunt fermentum, metus sapien ornare nunc,
              nec tempus tortor lacus a nulla.
            </p>
          </div>
          <div className="project">
            <h2>Project 3</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tincidunt, odio et tincidunt fermentum, metus sapien ornare nunc,
              nec tempus tortor lacus a nulla.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Project;
