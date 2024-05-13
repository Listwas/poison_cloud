import useSWR from "swr";
const fetcher = (url) => fetch(url).then((r) => r.json());
const FetchData = () => {
  const token = "4c9cdbcba9603a60a569e0c7723287b3";

  const { data, error } = useSWR(
    "http://192.168.1.21:7708/v1/active_users",
    token,
    fetcher
  );
  if (error) return console.log("error fetching", error);
  if (data) console.log(data);
  return <div></div>;
};
export default FetchData;
