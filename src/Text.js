import { useEffect, useState } from "react";

const Text = (props) => {
  const [text, setText] = useState("");

  //mounting stage
  useEffect(() => {
    console.log("component did mounted");

    return () => {
      console.log("component did unmounted");
    };
  }, []);

  //update stage
  useEffect(() => {
    console.log("component updated");
  }, [text]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></input>
      <h1>{text}</h1>
    </div>
  );
};

export default Text;
