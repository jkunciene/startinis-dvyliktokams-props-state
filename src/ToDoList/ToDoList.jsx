import React from "react";

const ToDoList = ({ task, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{task.text}</td>
    </tr>
  );
};
export default ToDoList;
