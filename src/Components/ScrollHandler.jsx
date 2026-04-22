import { useEffect } from "react";
import { useNavigationType } from "react-router-dom";

export default function ScrollHandler() {
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType === "PUSH") {
      window.scrollTo(0, 0);
    }
  }, [navigationType]);

  return null;
}
