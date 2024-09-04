//custom hook
// previous lessons: useState useContex useEffect
import { useState } from "react";
import "./App.css";
import { useToggle } from "./hooks/useToggle";
import { useToggleObject } from "./hooks/useToggleObject";
//2
import { QueryClient, QueryClientProvider } from "react-query";
import { Cat } from "./components/Cat";
//3
import { useFunc } from "./hooks/useFunc";

function App() {
  // const [isVisible, setIsVisible] = useState(false);
  const [isVisible, toggle] = useToggle();
  const [isVisible2, toggle2] = useToggle();
  const { state: isVisible3, toggle: toggle3 } = useToggleObject();

  //2
  const client = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: true },
    },
  });

  //3
  const [number, increase, decrease, reset] = useFunc(41);

  return (
    // <div className="App">
    //   <button
    //     onClick={() => {
    //       setIsVisible((prev) => !prev);
    //     }}
    //   >
    //     {isVisible ? "Hide" : "Show"}
    //   </button>
    //   {isVisible && <h1>This is my hidden text</h1>}
    // </div>

    <div className="App">
      <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
      {isVisible && <h1>This is my hidden text</h1>}

      <button onClick={toggle2}>{isVisible2 ? "Hide2" : "Show2"}</button>
      {isVisible2 && <h1>This is my hidden text2</h1>}

      <button onClick={toggle3}>{isVisible3 ? "Hide3" : "Show3"}</button>
      {isVisible3 && <h1>This is my hidden text3</h1>}

      <hr />

      <QueryClientProvider client={client}>
        <Cat />
      </QueryClientProvider>

      <hr />

      <button onClick={increase}>increse</button>
      <button onClick={decrease}>decrese</button>
      <button onClick={reset}>reset</button>
      <h1>{number}</h1>
    </div>
  );
}

export default App;
