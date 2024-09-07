// export const Home = (prop) => {
//   return <div>Home Page - userName is {prop.userName}</div>;
// };

import { useContext, useEffect, useState } from "react";
import { ProfileContex } from "../App";
import { setLogger, useQuery } from "react-query";
import Axios from "axios";
import { Game1Box } from "../components/game1-box";

// export default Home;

export const Game1 = () => {
  const [score, setScore] = useState(0);

  const [active, setActive] = useState(1);

  const sumScore = (boxScore, negetiveScore, clickRight) => {
    clickRight ? setScore(score + boxScore) : setScore(score + negetiveScore);
    console.log(boxScore, negetiveScore);
  };

  // console.log("document mounted", new Date().getSeconds());

  useEffect(() => {
    console.log("document mounted", new Date().getSeconds());
    setInterval(() => {
      setActive(Math.ceil(Math.random() * 8));
      // console.log(Math.ceil(Math.random() * 8));
    }, 1000);
  }, []);

  return (
    <>
      <div className="container">
        <div className="score-board">score: {score}</div>
        <div className="box-container">
          <Game1Box
            name="box1"
            callBackFunction={sumScore}
            boxScore={3}
            activate={false}
            timeOut={0}
            timeIn={0}
          />
          <Game1Box
            name="box2"
            callBackFunction={sumScore}
            boxScore={3}
            activate={active === 2}
            timeOut={0}
            timeIn={0}
          />
          <Game1Box
            name="box3"
            callBackFunction={sumScore}
            boxScore={3}
            activate={true}
            timeOut={0}
            timeIn={0}
          />
        </div>
      </div>
    </>
  );
};
