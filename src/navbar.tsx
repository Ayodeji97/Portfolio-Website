import { RefObject, useEffect, useRef, useState } from "react";
import {
  HamburgetMenuOpen,
  HamburgetMenuClose,
} from "./components/icons/HamburgerMenu";
import { AnimatePresence, motion } from "framer-motion";
import useOutsideClick from "./hooks/outside-click";
import { useResize } from "./hooks/resize";
function Navbar() {
  const ref = useRef(null);
  const { width } = useResize();
  const [click, setClick] = useState(false);
  useEffect(function () {
    let timer: number;
    (ref.current! as HTMLElement).addEventListener("click", (e) => {
      e.preventDefault();
      const id = `${(e.target! as HTMLElement).getAttribute("href")}`;

      //   gsap.to(window, { duration: 2, scrollTo: `.${id}` });
      timer = setTimeout(() => {
        document.querySelector(`${id}`)?.scrollIntoView({ behavior: "smooth" });
      }, 500);
      setClick(false);
    });

    document.addEventListener("scroll", () => {
      if (click) {
        setClick(false);
      }
    });

    return () => {
      document.removeEventListener("scroll", () => {
        if (click) {
          setClick(false);
        }
      });
      clearTimeout(timer);
    };
  });

  const { ref: outsideRef } = useOutsideClick(handleClick);

  function handleClick() {
    setClick(!click);
  }
  return (
    <nav>
      <div className="nav-container" ref={ref}>
        <AnimatePresence>
          {" "}
          {(width > 960 || click) && (
            <motion.ul
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              onClick={handleClick}
              ref={outsideRef as RefObject<HTMLUListElement>}
            >
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
            </motion.ul>
          )}
        </AnimatePresence>
        <div className="nav-icon" onClick={handleClick}>
          {!click ? (
            <span className="icon">
              <HamburgetMenuOpen />{" "}
            </span>
          ) : (
            <span className="icon" style={{ color: "white" }}>
              <HamburgetMenuClose />
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
