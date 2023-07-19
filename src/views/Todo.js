const Todo = (props) => {
  const { todos, title, deleteTodo } = props;
  const handleDeleteTodo = (todo) => {
    deleteTodo(todo);
  };
  return (
    <>
      <div className="title">{title}</div>
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
      </div>
    </>
  );
};

export default Todo;
