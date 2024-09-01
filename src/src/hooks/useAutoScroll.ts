import { useEffect, useRef } from "react";

export const useAutoScroll = <T extends HTMLElement>() => {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: "auto",
        block: "nearest",
      });
    }
  }, [containerRef]);

  return containerRef;
};
