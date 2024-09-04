import React from "react";
import { useNavigate } from "react-router-dom";

export const Contact = () => {
  let navigate = useNavigate();

  return (
    <React.Fragment>
      <div>Contact Page</div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go to HomePage!
      </button>
    </React.Fragment>
  );
};
