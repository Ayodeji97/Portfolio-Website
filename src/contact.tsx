import { useEffect } from "react";
import { TfiEmail } from "react-icons/tfi";
import { socialLinks } from "./app.constants";
import FullStop from "./components/ui/full-stop";
import SocialLink from "./components/ui/social-link";

function Contact() {
  const handleHover = (value: number, e: MouseEvent) => {
    if ((e.target as HTMLElement).closest(".social--link")) {
      const link = (e.target as HTMLElement).closest(
        ".social--link"
      ) as HTMLElement;
      const siblings =
        link.closest(".social--links")?.querySelectorAll(".social--link") || [];
      siblings.forEach((el) => {
        if (el !== link) {
          (el as HTMLElement).style.opacity = value.toString();
        }
      });
    }
  };

  useEffect(() => {
    const socialLinksEl = document.getElementById("social--links");
    const mouseOverHandler = (e: MouseEvent) => handleHover(0.5, e);
    const mouseOutHandler = (e: MouseEvent) => handleHover(1, e);

    if (socialLinksEl) {
      socialLinksEl.addEventListener("mouseover", mouseOverHandler);
      socialLinksEl.addEventListener("mouseout", mouseOutHandler);

      return () => {
        socialLinksEl.removeEventListener("mouseover", mouseOverHandler);
        socialLinksEl.removeEventListener("mouseout", mouseOutHandler);
      };
    }
  }, []);

  const year = new Date().getFullYear();

  return (
    <section className="contact-section">
      <div className="container">
        <div className="header">
          {" "}
          <h1>Get in Touch</h1> <FullStop />
        </div>
        <div className="contact-box">
          <div className="contact-message">
            <h3>
              Looking to partner or work together? Reach out through the form
              and I'll get back to you in the next{" "}
              <span className="emphasis"> 48 hours. </span>
            </h3>
            {/* Links */}
            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message"></textarea>
              </div>
              <button type="submit" className="contact-btn">
                Send
              </button>
            </form>
          </div>
          <div className="contact-details">
            <h3>Or you can reach out through these platforms</h3>
            <div className="contact-email">
              <div className="email-icon">
                <TfiEmail />
              </div>
              <p>oluwatobiojo2911@gmail.com</p>
            </div>
            <div className="social--links" id="social--links">
              {socialLinks.map((link, index) => (
                <SocialLink key={index} link={link.link} icon={link.icon} />
              ))}
            </div>
          </div>
        </div>
        <h3 className="copyright">&copy; Daniel Ayodeji {year} </h3>
      </div>
    </section>
  );
}

export default Contact;
