import React from "react";

function TodoCreate() {
  return (
    <div className="todo-create">
      <input className="todo-input" placeholder="Todo Giriniz.." type="text" />
      <button className="todo-create-button">Oluştur</button>
    </div>
  );
}
export default TodoCreate;
