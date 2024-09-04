// export const Home = (prop) => {
//   return <div>Home Page - userName is {prop.userName}</div>;
// };

import { useContext } from "react";
import { ProfileContex } from "../App";
import { useQuery } from "react-query";
import Axios from "axios";

// export default Home;

export const Home = () => {
  // react-query --- داخل براکت حتما data!
  const {
    data: catData,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  ////////////////////////////
  const { userName } = useContext(ProfileContex);

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Sorry! there was an error: {error.message}</h2>;

  return (
    <div>
      Home Page - userName is {userName}
      {/* // ? prevent error when data is empty */}
      <h1>{catData?.fact}</h1>
      <button onClick={refetch}>update</button>
    </div>
  );
};
