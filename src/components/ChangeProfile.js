import { useContext, useState } from "react";
import { ProfileContex } from "../App";

export const ChangeProfile = () => {
  const { setUserName } = useContext(ProfileContex);
  const [input, setInput] = useState("");
  return (
    <div>
      <input
        onChange={(ev) => {
          setInput(ev.target.value);
        }}
      />
      <button
        onClick={() => {
          setUserName(input);
        }}
      >
        Change userName
      </button>
    </div>
  );
};
