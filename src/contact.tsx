import { Github } from "./components/icons/github";
import { LinkedIn } from "./components/icons/linkedin";
import { Twitter } from "./components/icons/mail";
import FullStop from "./components/ui/full-stop";

function Contact() {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="header">
          {" "}
          <h1>Get in Touch</h1> <FullStop />
        </div>
        <div className="contact-box">
          <div className="contact-details">
            <h3>
              Looking to partner or work together? Reach out through the form
              and I'll get back to you in the next 48 hours.
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
          <div className="contact-message">
            <h3>Or you can reach out through these platforms</h3>
            <div className={`social--links`} id="social--links">
              <a
                href="https://www.linkedin.com/in/oluwatobi-ojo-samuel/"
                target="_blank"
                className="social--link"
              >
                <LinkedIn />
              </a>
              <a
                href="https://twitter.com/OluwatobiOjo5"
                target="_blank"
                className="social--link"
              >
                <Twitter />
              </a>
              <a
                href="https://github.com/ohteesss"
                target="_blank"
                className="social--link"
              >
                <Github />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
