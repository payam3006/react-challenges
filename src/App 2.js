import logo from "./logo.svg";
import "./App.css";
import { User } from "./User";
//modular css:
// import styles from "./App.module.css";

function App() {
  // const age = 20;

  const names = [
    { name: "papa", age: 40 },
    { name: "doctor", age: 42 },
    { name: "loyeh", age: 43 },
  ];

  const classes = [
    { name: "html", finished: true },
    { name: "js", finished: false },
    { name: "css", finished: true },
    { name: "bootstrap", finished: false },
    { name: "react", finished: true },
    { name: "python", finished: false },
  ];

  // if (age > 20) console.log("over age");
  // else console.log("under age");

  // age > 20 ? console.log("over age") : console.log("under age");

  return (
    //modular css:
    // <div className={styles.App}>

    // inline css:
    // <div style={{ color: "blue", fontSize: "23px" }}>

    // <div className="App">{age > 20 ? "over" : "under"}</div>

    //conditional rendering
    <div className="App">
      {/* {age > 20 ? <h1>over</h1> : <h1>"under"</h1>}
      {age == 20 && <h1>age is 20</h1>}

      <button
        type="submit"
        style={{ color: age > 10 ? "red" : "white" }}
        className={age >= 20 ? "success" : "warning"}
      >
        click me
      </button> */}

      {names.map((user, indx) => {
        return <User key={indx} name={user.name} age={user.age} />;
      })}

      {classes.map((corse, indx) => {
        // return <h3 key={indx}>{corse.finished == true && corse.name}</h3>;
        return corse.finished == true && <h3 key={indx}>{corse.name}</h3>;
      })}
    </div>
  );
}

export default App;
