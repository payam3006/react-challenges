import "./App.css";
import { useState } from "react";

function App() {
  // let age = 0;

  // const increaseAge = () => {
  //   age += 1;
  // };

  // return (
  //   <div className="App">
  //     <h1>{age}</h1>
  //     <button onClick={increaseAge()}>Increase age</button>
  //   </div>
  // );

  const [age, setAge] = useState(0);

  // const increaseAge = () => {
  //   setAge(age + 1);
  // };

  // return (
  //   <div className="App">
  //     <h1>{age}</h1>
  //     <button onClick={increaseAge}>Increase age</button>
  //   </div>
  // );

  const [inputValue, setInputValue] = useState("");

  const [showText, setShowText] = useState(true);
  const toggleText = () => {
    setShowText(!showText);
  };

  const [textColor, changeColor] = useState("red");

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Set to 0
      </button>
      <h1>{count}</h1>

      <h3>
        <button
          onClick={() => {
            changeColor(textColor == "red" ? "green" : "red");
          }}
        >
          Toggle Color
        </button>
      </h3>
      <h1 style={{ color: textColor }}>Color Payam!!!</h1>

      <h3>
        <button onClick={toggleText}>Toggle</button>
      </h3>
      {showText && <h1>Showing Payam!!!</h1>}

      <input
        type="text"
        onInput={(event) => {
          setInputValue(event.target.value);
        }}
      ></input>

      <h1>{inputValue}</h1>

      <h1>{age}</h1>

      <button
        onClick={() => {
          setAge(age + 1);
        }}
      >
        Increase age
      </button>
      <button
        onClick={() => {
          setAge(age - 1);
        }}
      >
        Decrease age
      </button>
    </div>
  );
}

export default App;
