import { ExperienceType } from "../app.interface";

interface Experience extends ExperienceType {
  index: number;
}

function ExperienceComponent({
  role,
  companyName,
  description,
  index,
}: Experience) {
  return (
    <div className="experience">
      <span className="experience-number">0{index}</span>
      <div className="experience-info">
        <h6>{role || "Role"}</h6>
        <h3>{companyName || "Company Name"}</h3>
        <p>
          {description ||
            `description: Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Debitis praesentium natus possimus expedita voluptatum adipisci
          similique sed ipsa consequatur, excepturi asperiores vitae neque.
          Laborum quod optio illo nulla magnam? Neque est, inventore ad dolorum
          omnis veniam fugit consectetur vero itaque!`}
          <br />
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          quasi porro quod rerum dignissimos laudantium at cumque vel?
          Reprehenderit, itaque!
        </p>
      </div>
    </div>
  );
}

export default ExperienceComponent;
