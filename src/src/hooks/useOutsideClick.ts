import { useEffect, useRef } from "react";

type Handler = (event: MouseEvent) => void;

export const useOutsideClick = (handler: Handler) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event as MouseEvent);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener as EventListener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener as EventListener);
    };
  }, [handler]);

  return ref;
};
