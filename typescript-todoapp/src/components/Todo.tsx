import React from "react";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import type { TodoType, TodoProps } from "../types/Types";

function Todo({ todoProps }: TodoProps) {
  const { id, content } = todoProps;
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
