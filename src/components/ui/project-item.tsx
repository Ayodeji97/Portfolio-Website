import { MdArrowOutward } from "react-icons/md";
import { PiGithubLogo } from "react-icons/pi";
import { ProjectType } from "../../app.interface";

function ProjectItem({
  title,
  description,
  githubLink,
  liveLink,
  img,
}: ProjectType) {
  return (
    <div className="project">
      <div className="project-img-container">
        <img src={img || "https://via.placeholder.com/300"} alt="project 1" />
      </div>
      <div className="project-title">
        {" "}
        <h2>{title || "Project 1"}</h2> {/* links */}
        <div className="project-links">
          <a href={githubLink || ""} target="_blank" rel="noreferrer">
            <PiGithubLogo />
          </a>
          <a href={liveLink || ""} target="_blank" rel="noreferrer">
            <MdArrowOutward />
          </a>
        </div>
      </div>
      <p>
        {description ||
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt, odio et tincidunt fermentum, metus sapien ornare nunc, nec tempus tortor lacus a nulla."}
      </p>
    </div>
  );
}

export default ProjectItem;
