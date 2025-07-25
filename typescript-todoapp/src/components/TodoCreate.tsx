import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/todoSlice";
import type { TodoType } from "../types/Types";

function TodoCreate() {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState<string>("");
  const handleCreateTodo = () => {
    if (newTodo.trim().length == 0) {
      alert("Todo Giriniz !");
      return;
    }
    const payload: TodoType = {
      id: Math.floor(Math.random() * 9999999999999),
      content: newTodo,
    };
    dispatch(createTodo(payload));
    setNewTodo("");
  };
  return (
    <div className="todo-create">
      <input
        value={newTodo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewTodo(e.target.value)
        }
        className="todo-input"
        placeholder="Todo Giriniz.."
        type="text"
      />
      <button onClick={handleCreateTodo} className="todo-create-button">
        Oluştur
      </button>
    </div>
  );
}
export default TodoCreate;
