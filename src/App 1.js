//npx create-react-app
import logo from "./logo.svg";
import "./App.css";

function App() {
  const user = (
    <div>
      <h1>{getName()}</h1>
      <h2>40</h2>
      <h3>payam3006@gmail.com</h3>
    </div>
  );

  return (
    <div className="App">
      {user}
      {GetName(propsExample)}
      <GetName name="test" email={40}></GetName>
      <GetName name="payam" age={40} email="payam3006@gmail.com" />

      <Job salary={1000} position="modir!" company="google" />
    </div>
  );
}

// parent element (here div) in components is necessary!
const Job = (props111) => {
  return (
    <div>
      {/* <h1>{props111.salary}</h1>
      <h2>{props111.position}</h2>
      <h3>{props111.company}</h3> */}
      {props111.salary} , {props111.position} , {props111.company}
    </div>
  );
};

//props
const propsExample = {
  name: "payam in propsExample",
  age: 40,
  email: "payam3006@gmail.com in propsExample",
};

//component
const GetName = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{getName()}</p>
      <h2>{props.age}</h2>
      <h3>{props.email}</h3>
    </div>
  );
};

//function
const getName = () => {
  return "payam";
};

export default App;
