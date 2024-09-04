import { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  //////1///////
  const [text, setText] = useState("");

  useEffect(() => {
    fetchText();
  }, []);

  const fetchText = () => {
    // fetch("https://catfact.ninja/fact")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setText(res.data.fact);
    });
  };

  //////2///////
  const [exName, setExName] = useState("");
  const [result, setResult] = useState({});

  const guessAge = (name) => {
    Axios.get(`https://api.agify.io/?name=${exName}`).then((res) => {
      setResult(res.data);
    });
  };

  //////3///////
  const [excuseText, setExcuseText] = useState("");

  const setTextForExcuse = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`).then(
      (res) => {
        setExcuseText(res.data[0].excuse);
      }
    );
  };

  return (
    <div className="App">
      {/* 1 */}
      <button onClick={fetchText}>fetch data</button>
      <p>{text}</p>

      {/* 2 */}
      <hr></hr>
      <input
        placeholder="enter name..."
        onChange={(ev) => {
          setExName(ev.target.value);
        }}
      ></input>
      <button onClick={guessAge}>Predict Age</button>
      {/* ? if not empty object... */}
      <h1>age is: {result?.age}</h1>
      <h1>name is: {result?.name}</h1>

      {/* 3 */}
      <hr></hr>
      <h1>Generate an excuse</h1>
      <button
        onClick={() => {
          setTextForExcuse("party");
        }}
      >
        Party
      </button>
      <button
        onClick={() => {
          setTextForExcuse("family");
        }}
      >
        Family
      </button>
      <button
        onClick={() => {
          setTextForExcuse("office");
        }}
      >
        Office
      </button>
      <h1>{excuseText}</h1>
    </div>
  );
}

export default App;
