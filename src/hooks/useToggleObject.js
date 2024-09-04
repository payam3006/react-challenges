import { useState } from "react";

export const useToggleObject = (initialValue = false) => {
  const [state, setState] = useState(initialValue);

  const toggle = () => {
    setState((prev) => !prev);
  };

  return { state, toggle };
};
