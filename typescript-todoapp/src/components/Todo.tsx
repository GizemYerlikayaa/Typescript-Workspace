import React from "react";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import type { TodoType, TodoProps } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodoById } from "../redux/todoSlice";

function Todo({ todoProps }: TodoProps) {
  const { id, content } = todoProps;
  const dispatch = useDispatch();

  const handleRemoveTodo = () => {
    dispatch(removeTodoById(id));
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
      <div>{content}</div>
      <div>
        <IoMdRemoveCircleOutline
          onClick={handleRemoveTodo}
          className="icons"
          style={{ marginRight: "8px" }}
        />
        <FaEdit className="icons" />
        {/* <FaCheckCircle className="icons" /> */}
      </div>
    </div>
  );
}

export default Todo;
