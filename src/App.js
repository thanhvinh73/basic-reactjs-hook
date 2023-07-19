import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import { useState } from "react";
import Todo from "./views/Todo";

//~~class
const App = () => {
  //state
  let [name, setName] = useState("Vinh");
  let [newTodoTitle, setNewTodoTitle] = useState("");
  const [todos, setTodos] = useState([
    { id: "todo1", title: "Doing homework" },
    { id: "todo2", title: "Watching movie" },
  ]);

  const createNewTodo = () => {
    if (newTodoTitle && newTodoTitle !== "") {
      let newTodo = {
        title: newTodoTitle,
        id: Math.floor(Math.random() * 100),
      };
      setTodos([...todos, newTodo]);
      setNewTodoTitle("");
    }
  };

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Hello world with {name}</h3>
        <Todo todos={todos} />
        <input
          type="text"
          value={newTodoTitle}
          onChange={(event) => {
            setNewTodoTitle(event.target.value);
          }}
        />
        <button
          type="button"
          style={{ marginTop: "10px" }}
          onClick={() => {
            createNewTodo();
          }}
        >
          Add todo
        </button>
      </header>
    </div>
  );
};

export default App;
