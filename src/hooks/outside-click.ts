import { useRef } from "react";
import { useEffect } from "react";

export default function useOutsideClick<T>(
  handler: () => void,
  listenCapturing = true
) {
  const ref = useRef<T | HTMLElement>();

  useEffect(
    function () {
      function handleClick(e: React.MouseEvent): void {
        if (
          ref.current &&
          !(ref.current! as HTMLElement).contains(e.target as Node)
        ) {
          handler();

          //
        }
      }
      document.addEventListener(
        "click",
        handleClick as () => void,
        listenCapturing
      );

      return () =>
        document.removeEventListener(
          "click",
          handleClick as () => void,
          listenCapturing
        );
    },
    [handler, listenCapturing]
  );

  return { ref };
}
