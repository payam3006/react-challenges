// import Axios from "axios";
// import { useQuery } from "react-query";

import { useGetCat } from "../hooks/useGetCat";

export const Cat = () => {
  // const { data: catData } = useQuery(["cat"], async () => {
  //   return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  // });

  const { data: catData, isLoading, refetchData } = useGetCat();
  if (isLoading) return <h2>Loading...</h2>;
  return (
    <div>
      <button onClick={refetchData}>refetch data</button>
      <h1>{catData?.fact}</h1>
    </div>
  );
};
