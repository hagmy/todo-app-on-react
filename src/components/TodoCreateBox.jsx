export const ItemCreateBox = ({ newTodo, onSetNewTodo, onAddTodo }) => {
  return (
    <>
      <input
        id="input"
        type="text"
        value={newTodo}
        onChange={(event) => onSetNewTodo(event.target.value)}
      />
      <button onClick={() => onAddTodo()}>add</button>
    </>
  );
};
