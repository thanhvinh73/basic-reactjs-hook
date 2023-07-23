import axios, { Axios } from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState({ title: "", isErr: false });

  let fetchData = async (ourRequest) => {
    let res = await axios.get(url, { cancelToken: ourRequest });
    return res && res.data ? res.data : [];
  };
  useEffect(() => {
    const ourRequest = axios.CancelToken.source();
    setTimeout(() => {
      fetchData()
        .then((data) => {
          setData(data);
          setisLoading(false);
          setError({ title: "", isErr: false });
        })
        .catch((err) => {
          if (axios.isCancel(err)) {
            console.log("Request canceled: ", err.message);
          } else {
            setisLoading(false);
            setError({ title: err.message, isErr: true });
          }
        });
    }, 3000);

    return () => {
      ourRequest.cancel();
    };
  }, [url]);
  return { data, isLoading, error };
};

export default useFetch;
