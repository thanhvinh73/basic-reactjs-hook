import { useEffect, useState } from "react";
import axios from "axios";
const Covid = () => {
  const [dataCovid, setDataCovid] = useState([]);
  const [loading, setLoading] = useState(true);

  let fetchData = async () => {
    let res = await axios.get(
      "https://api.apify.com/v2/key-value-stores/EaCBL1JNntjR3EakU/records/LATEST?disableRedirect=true"
    );
    return res && res.data ? res.data : [];
  };
  useEffect(() => {
    setTimeout(() => {
      fetchData()
        .then((data) => {
          setDataCovid(data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }, 3000);
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
          {!loading &&
          dataCovid &&
          dataCovid.locations &&
          dataCovid.locations.length > 0 ? (
            dataCovid.locations.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.death}</td>
                  <td>{item.recovered}</td>
                  <td>{item.casesToday}</td>
                </tr>
              );
            })
          ) : (
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
          )}
        </tbody>
      </table>
    </>
  );
};

export default Covid;
