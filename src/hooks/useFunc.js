import { useState } from "react";

export const useFunc = (initialValue = 0) => {
  const [number, setNumber] = useState(initialValue);

  const increase = () => {
    // setNumber(number + 1);
    setNumber((prev) => prev + 1);
  };
  const decrease = () => {
    setNumber(number - 1);
  };
  const reset = () => {
    setNumber(initialValue);
  };
  return [number, increase, decrease, reset];
};
