import { useState } from "react";
import { ItemCreateBox } from "./TodoCreateBox";
import { TodoList } from "./TodoList";

export const TodoListContainer = () => {
  const [todoList, setTodoList] = useState(["reading books", "playing soccer"]);
  const [newTodo, setNewTodo] = useState("");

  const handleSetNewTodo = (value) => {
    setNewTodo(value);
  };

  const handleAddTodo = () => {
    if (newTodo === "") return;
    setTodoList([...todoList, newTodo]);
    setNewTodo("");
  };

  return (
    <>
      <ItemCreateBox
        newTodo={newTodo}
        onSetNewTodo={handleSetNewTodo}
        onAddTodo={handleAddTodo}
      />
      <TodoList todoList={todoList} />
    </>
  );
};
