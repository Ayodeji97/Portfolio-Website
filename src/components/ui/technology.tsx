import { TechnologyIcon } from "../../app.interface";

function Technology({ src, alt }: TechnologyIcon) {
  return (
    <li className="about-skill">
      <img src={src} alt={alt} className="technology-icon" />
    </li>
  );
}

export default Technology;
