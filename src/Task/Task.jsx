import React, { useState } from "react";

const Task = ({ addNewTask }) => {
  const [value, setNewTask] = useState("");

  //input reiksmes isvalymo funkcija ir duomenu i vidinia state irasymas, uzsetinimas
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addNewTask(value);
    setNewTask("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          placeholder="Add new task..."
          onChange={(e) => setNewTask(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Task;
