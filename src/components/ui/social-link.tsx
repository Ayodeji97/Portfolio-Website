import { SocialLinkType } from "../../app.interface";

function SocialLink({ link, icon }: SocialLinkType) {
  return (
    <a href={link} target="_blank" className="social--link">
      {icon}
    </a>
  );
}

export default SocialLink;
