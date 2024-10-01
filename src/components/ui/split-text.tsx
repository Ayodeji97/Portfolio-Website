import { useSprings, animated } from "@react-spring/web";
import { useEffect, useRef, useState } from "react";

export const SplitText = ({
  text,
  className = "",
  delay = 100,
}: {
  text: string;
  className?: string;
  delay?: number;
}) => {
  const letters = text.split("");
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current!); // Unobserve after triggering the animation
        }
      },
      { threshold: 0.1, rootMargin: "-100px" }
    );

    observer.observe(ref.current!);

    return () => observer.disconnect();
  }, []);

  const springs = useSprings(
    letters.length,
    letters.map((_, i) => ({
      from: { opacity: 0, transform: "translate3d(0,40px,0)" },
      to: inView
        ? async (
            next: (arg0: { opacity: number; transform: string }) => void
          ) => {
            await next({ opacity: 1, transform: "translate3d(0,-10px,0)" });
            await next({ opacity: 1, transform: "translate3d(0,0,0)" });
          }
        : { opacity: 0, transform: "translate3d(0,40px,0)" },
      delay: i * delay,
    }))
  );

  return (
    <p className={`split-parent ${className}`} ref={ref}>
      {springs.map((props, index) => (
        <animated.span key={index} style={props} className="letter">
          {letters[index] === " " ? " " : letters[index]}
        </animated.span>
      ))}
    </p>
  );
};
