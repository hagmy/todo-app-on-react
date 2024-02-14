export const TodoList = ({ todoList }) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ul>
  );
};
