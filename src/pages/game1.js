// export const Home = (prop) => {
//   return <div>Home Page - userName is {prop.userName}</div>;
// };

import { useContext, useEffect, useState } from "react";
import { ProfileContex } from "../App";
import { useQuery } from "react-query";
import Axios from "axios";

// export default Home;

export const Game1 = () => {
  const [active, setActive] = useState(1);
  const [score, setScore] = useState(0);
  useEffect(() => {
    setInterval(() => {
      // console.log(Math.ceil(Math.random() * 6));
      setActive(Math.ceil(Math.random() * 6));
    }, 1000);
  }, []);
  return (
    <>
      <div className="score-board">{score}</div>
      <div className="box-container">
        <div
          className={`box ${active === 1 && "active"}`}
          onClick={() => {
            setScore(score + 1);
          }}
        >
          box1
        </div>
        <div
          className={`box ${active === 2 && "active"}`}
          onClick={() => {
            setScore(score + 1);
          }}
        >
          box2
        </div>
        <div
          className={`box ${active === 3 && "active"}`}
          onClick={() => {
            setScore(score + 1);
          }}
        >
          box3
        </div>
        <div
          className={`box ${active === 4 && "active"}`}
          onClick={() => {
            setScore(score + 1);
          }}
        >
          box4
        </div>
        <div
          className={`box ${active === 5 && "active"}`}
          onClick={() => {
            setScore(score + 1);
          }}
        >
          box5
        </div>
        <div
          className={`box ${active === 6 && "active"}`}
          onClick={() => {
            setScore(score + 1);
          }}
        >
          box6
        </div>
      </div>
    </>
  );
};
