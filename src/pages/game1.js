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
  const setActiveBoxes = (boxesNum, activeBoxesNum) => {
    const boxesArray = [];
    for (let i = 1; i <= boxesNum; i++) {
      boxesArray.push(0);
    }

    while (
      boxesArray.filter((el) => {
        return el !== 0;
      }).length < activeBoxesNum
    ) {
      let randomIndx = Math.ceil(Math.random() * boxesNum);
      boxesArray[randomIndx - 1] = 1;
    }

    // console.log(boxesArray);
    return boxesArray;
  };

  const [score, setScore] = useState(0);
  const [boxesArray, setBoxesArray] = useState(Array(5).fill(0));

  const sumScore = (boxScore, negetiveScore, clickRight) => {
    clickRight ? setScore(score + boxScore) : setScore(score + negetiveScore);
    console.log(boxScore, negetiveScore);
  };

  console.log("document mounted", new Date().getSeconds());

  // useEffect(() => {
  //   console.log("document mounted", new Date().getSeconds());
  //   setInterval(() => {
  //     setBoxesArray(() => {
  //       const newArray = setActiveBoxes(5, 2);
  //       return newArray;
  //     });
  //     console.log(boxesArray);
  //   }, 2000);
  // }, []);

  return (
    <>
      <div className="container">
        <div className="score-board">score: {score}</div>
        <div className="box-container">
          {boxesArray.map((element, index) => {
            return (
              <Game1Box
                key={index}
                name={`box${index + 1}`}
                callBackFunction={sumScore}
                boxScore={3}
                activate={element === 1}
                timeOut={0}
                timeIn={0}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
