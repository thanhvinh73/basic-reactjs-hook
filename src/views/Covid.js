import { useEffect, useState } from "react";
import axios from "axios";
const Covid = () => {
  const [dataCovid, setDataCovid] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState({ title: "", isErr: false });

  let fetchData = async () => {
    let res = await axios.get(
      "https://api.apify.com/v2/key-value-stores/EaCBL1JNntjR3EakU/records/LATEST?disableRedirect=true"
    );
    return res && res.data ? res.data : [];
  };
  useEffect(() => {
    fetchData()
      .then((data) => {
        setDataCovid(data);
        setisLoading(false);
        setError({ title: "", isErr: false });
      })
      .catch((err) => {
        setisLoading(false);
        setError({ title: err.message, isErr: true });
      });
  }, []);
  return (
    <>
      <table id="customers">
        <thead>
          <tr>
            <th>Country</th>
            <th>Death</th>
            <th>Recovered</th>
            <th>Cases-today</th>
          </tr>
        </thead>
        <tbody>
          {!isLoading &&
            dataCovid &&
            dataCovid.locations &&
            dataCovid.locations.length > 0 &&
            dataCovid.locations.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.death}</td>
                  <td>{item.recovered}</td>
                  <td>{item.casesToday}</td>
                </tr>
              );
            })}
          {!error.isErr ? (
            <tr>
              <td
                colSpan={4}
                style={{
                  textAlign: "center",
                  backgroundColor: "#545454",
                  fontSize: "24px",
                }}
              >
                Loading...
              </td>
            </tr>
          ) : (
            <tr>
              <td
                colSpan={4}
                style={{
                  textAlign: "center",
                  backgroundColor: "#545454",
                  color: "red",
                  fontSize: "18px",
                }}
              >
                Something was wrong: {error.title}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default Covid;
