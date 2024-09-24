import { useEffect, useRef } from "react";

function Navbar() {
  const ref = useRef(null);
  useEffect(function () {
    (ref.current! as HTMLElement).addEventListener("click", (e) => {
      e.preventDefault();
      const id = `${(e.target! as HTMLElement).getAttribute("href")}`;

      //   gsap.to(window, { duration: 2, scrollTo: `.${id}` });
      document.querySelector(`${id}`)?.scrollIntoView({ behavior: "smooth" });
    });
  });
  return (
    <nav>
      <div className="nav-container" ref={ref}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
