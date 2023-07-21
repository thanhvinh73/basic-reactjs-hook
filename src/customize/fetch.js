import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState({ title: "", isErr: false });

  let fetchData = async () => {
    let res = await axios.get(url);
    return res && res.data ? res.data : [];
  };
  useEffect(() => {
    fetchData()
      .then((data) => {
        setData(data);
        setisLoading(false);
        setError({ title: "", isErr: false });
      })
      .catch((err) => {
        setisLoading(false);
        setError({ title: err.message, isErr: true });
      });
  }, []);
  return { data, isLoading, error };
};

export default useFetch;
