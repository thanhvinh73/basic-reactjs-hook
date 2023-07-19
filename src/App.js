import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import { useState } from "react";

//~~class
const App = () => {
  //state
  let [name, setName] = useState("Vinh");
  let [address, setAddress] = useState("");

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Hello world with {name}</h3>
        <h4>Address: {address}</h4>
        <input
          type="text"
          value={address}
          onChange={(event) => {
            setAddress(event.target.value);
          }}
        />
        <button
          type="button"
          style={{ marginTop: "10px" }}
          onClick={() => {
            setName(address);
          }}
        >
          Click me
        </button>
      </header>
    </div>
  );
};

export default App;
