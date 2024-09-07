import { useEffect, useState } from "react";

export const Game1Box = ({
  name = "undefinedBox",
  activate = true,
  boxScore = 1,
  negetiveScore = -1,
  boxColor = "red",
  timeOut = 2000,
  timeIn = 3000,
  callBackFunction,
}) => {
  const [active, setActive] = useState(activate);
  // const [score, setScore] = useState(0);

  const setDisappear = () => {
    timeOut !== 0 &&
      setTimeout(() => {
        console.log(name, "disappear", new Date().getSeconds());
        setActive(false);
      }, timeOut);
  };
  const setAppear = () => {
    timeIn !== 0 &&
      setTimeout(() => {
        console.log(name, "appear", new Date().getSeconds());
        setActive(true);
      }, timeIn);
  };

  // console.log(name, "mounted", new Date().getSeconds());

  useEffect(() => {
    console.log(name, "mounted", new Date().getSeconds());

    if (!active) {
      setAppear();
    } else {
      setDisappear();
    }

    return () => {
      console.log(name, "unmounted", new Date().getSeconds());
      clearTimeout(setAppear);
      clearTimeout(setDisappear);
    };
  }, [active]);

  return (
    <div
      className={`box ${active && "active"}`}
      onClick={() => {
        setActive(false);
        callBackFunction(boxScore, negetiveScore, active);

        // console.log(boxScore);
        // active === 1 ? setScore(score + 1) : setScore(score - 1);
      }}
    >
      {name}
    </div>
  );
};
