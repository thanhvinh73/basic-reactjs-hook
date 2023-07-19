const Todo = (props) => {
  const todos = props.todos;
  return (
    <>
      <div className="title">{props.title}</div>
      <div className="todos-container">
        {todos.length !== 0 &&
          todos.map((item, index) => {
            return (
              <li className="todo-child" key={item.id}>
                {index + 1} - {item.title} ({item.id})
              </li>
            );
          })}
        <hr />
      </div>
    </>
  );
};

export default Todo;
