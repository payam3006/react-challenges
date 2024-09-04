import Axios from "axios";
import { useQuery } from "react-query";

export const useGetCat = () => {
  const { data, isLoading, refetch, error } = useQuery(["cat"], async () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  const refetchData = () => {
    alert("data refetch");
    refetch();
  };
  return { data, isLoading, refetchData, error };
};
