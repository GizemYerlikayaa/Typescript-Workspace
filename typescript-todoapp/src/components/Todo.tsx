import React, { useState } from "react";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import type { TodoType, TodoProps } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodoById, updateTodo } from "../redux/todoSlice";

function Todo({ todoProps }: TodoProps) {
  const { id, content } = todoProps;
  const dispatch = useDispatch();

  const [editable, setEditable] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>(content);
  const handleRemoveTodo = () => {
    dispatch(removeTodoById(id));
  };
  const handleUptadeTodo = () => {
    const payload = {
      id: id,
      content: newTodo,
    };
    dispatch(updateTodo(payload));
    setEditable(false);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        border: "1px solid lightgrey",
        padding: "16px ",
        marginTop: "25px",
        borderRadius: "5px",
      }}
    >
      {editable ? (
        <input
          type="text"
          style={{
            width: "400px",
            border: "none",
            borderBottom: "1px solid lightgrey",
            outline: "none",
          }}
          value={newTodo}
          onChange={(e: React.ChangeEvent<HTMLInputElemet>) =>
            setNewTodo(e.target.value)
          }
        />
      ) : (
        <div>{content}</div>
      )}
      <div>
        <IoMdRemoveCircleOutline
          onClick={handleRemoveTodo}
          className="icons"
          style={{ marginRight: "8px" }}
        />
        {editable ? (
          <FaCheckCircle className="icons" onClick={handleUptadeTodo} />
        ) : (
          <FaEdit onClick={() => setEditable(true)} className="icons" />
        )}
      </div>
    </div>
  );
}

export default Todo;
