import React, { Fragment, useContext } from "react";
import { useParams } from "react-router-dom";
import { ChangeProfile } from "../components/ChangeProfile";
import { ProfileContex } from "../App";

// export const Profile = (props) => {
//   const { name, id } = useParams();
//   return (
//     <React.Fragment>
//       <p>get name from props:</p>
//       <h1>Profile Page - userName is {props.userName}</h1>
//       <p>get name from useParams:</p>
//       <h1>
//         Profile Page for {name} - {id}
//       </h1>
//       <hr />
//       <ChangeProfile setUserName={props.setUserName} />
//     </React.Fragment>
//   );
// };

export const Profile = () => {
  const { userName } = useContext(ProfileContex);
  const { name, id } = useParams();
  return (
    <React.Fragment>
      <p>get name from props:</p>
      <h1>Profile Page - userName is {userName}</h1>
      <p>get name from useParams:</p>
      <h1>
        Profile Page for {name} - {id}
      </h1>
      <hr />
      <ChangeProfile />
    </React.Fragment>
  );
};
