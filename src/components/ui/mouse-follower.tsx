import { useEffect, useRef } from "react";

function MouseFollower() {
  const ball = useRef<HTMLDivElement>(null);
  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const x = event.pageX;
      const y = event.pageY;

      ball.current!.style.left = `${x}px`; // Center the ball horizontally
      ball.current!.style.top = `${y}px`; // Center the ball vertically
    });
  });

  return <div className="mouse-ball" ref={ball}></div>;
}

export default MouseFollower;
