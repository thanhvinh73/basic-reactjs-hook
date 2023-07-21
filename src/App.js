import logo from "./logo.svg";
import "./App.css";
import Nav from "./views/Nav";
import { useState, useEffect } from "react";
import Todo from "./views/Todo";
import Covid from "./views/Covid";

//~~class
const App = () => {
  //state
  // let [name] = useState("Vinh");
  // let [newTodoTitle, setNewTodoTitle] = useState("");
  // const [todos, setTodos] = useState([
  //   { id: "todo1", title: "Doing homework", type: "eric" },
  //   { id: "todo2", title: "Watching movie", type: "eric" },
  //   { id: "todo3", title: "Playing game", type: "VinhThanh" },
  //   { id: "todo4", title: "Listening japanese", type: "VinhThanh" },
  // ]);

  // const createNewTodo = () => {
  //   if (newTodoTitle && newTodoTitle !== "") {
  //     let newTodo = {
  //       title: newTodoTitle,
  //       id: Math.floor(Math.random() * 100),
  //       type: "eric",
  //     };
  //     setTodos([...todos, newTodo]);
  //     setNewTodoTitle("");
  //   }
  // };

  // const deleteTodo = (todo) => {
  //   let newTodos = todos;
  //   newTodos = newTodos.filter((item) => item.id !== todo.id);
  //   setTodos(newTodos);
  // };

  useEffect(() => {
    // console.log("Run useEffect");
  }, []);
  //useEffect((), []) = componentDidMount
  //useEffect((), [a, b, c]) = componentDidUpdate
  //useEffect((...return...), []) = componentDidMount, componentWillUnmount

  return (
    <div className="App">
      <header className="App-header">
        <Nav />

        <div
          style={{ display: "flex", flexWrap: "nowrap", margin: "22 px 10px" }}
        >
          <h2 style={{ margin: "auto 0" }}>
            Coronavirus stats in the Vietnam{" "}
          </h2>
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            style={{ margin: "auto 0" }}
          />
        </div>
        <Covid />

        {/* <Todo todos={todos} title={"All Todo"} deleteTodo={deleteTodo} />
        <Todo
          todos={todos.filter((item) => item.type === "VinhThanh")}
          title={"VinhThanh's Todo"}
          deleteTodo={deleteTodo}
        />
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
        </button> */}
      </header>
    </div>
  );
};

export default App;
