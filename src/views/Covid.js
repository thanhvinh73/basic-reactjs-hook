import useFetch from "../customize/fetch";

const Covid = () => {
  const {
    data: dataCovid,
    isLoading,
    error,
  } = useFetch(
    "https://api.apify.com/v2/key-value-stores/EaCBL1JNntjR3EakU/records/LATEST?disableRedirect=true"
  );

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
                  color: "greenyellow",
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
