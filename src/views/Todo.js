import { useState } from "react";

const Todo = () => {
  const createNewTodo = () => {
    if (newTodoTitle && newTodoTitle !== "") {
      let newTodo = {
        title: newTodoTitle,
        id: Math.floor(Math.random() * 100),
        type: "eric",
      };
      setTodos([...todos, newTodo]);
      setNewTodoTitle("");
    }
  };

  const handleDeleteTodo = (todo) => {
    let newTodos = todos;
    newTodos = newTodos.filter((item) => item.id !== todo.id);
    setTodos(newTodos);
  };

  let [newTodoTitle, setNewTodoTitle] = useState("");
  const [todos, setTodos] = useState([
    { id: "todo1", title: "Doing homework", type: "eric" },
    { id: "todo2", title: "Watching movie", type: "eric" },
    { id: "todo3", title: "Playing game", type: "VinhThanh" },
    { id: "todo4", title: "Listening japanese", type: "VinhThanh" },
  ]);
  return (
    <>
      <div className="todos-container">
        {todos.length !== 0 &&
          todos.map((item, index) => {
            return (
              <li className="todo-child" key={item.id}>
                {index + 1} - {item.title} ({item.id})
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    handleDeleteTodo(item);
                  }}
                >
                  {"    "}X
                </span>
              </li>
            );
          })}
        <hr />
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
      </div>
    </>
  );
};

export default Todo;
