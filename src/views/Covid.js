import { useEffect, useState } from "react";
import axios from "axios";
const Covid = () => {
  const [dataCovid, setDataCovid] = useState([]);

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
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <table id="customers">
        {console.log("Check dataCovid table: ", dataCovid)}
        <thead>
          <tr>
            <th>Country</th>
            <th>Death</th>
            <th>Recovered</th>
            <th>Cases-today</th>
          </tr>
        </thead>
        <tbody>
          {dataCovid &&
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
        </tbody>
      </table>
    </>
  );
};

export default Covid;
