import React, { useState } from "react";
import addIcon from "../assets/add.png";
import Tasks from "./tasks";
import ".//style/addTask.css";


const AddTask = () => {
  const [task, setTask] = useState("");
  const [savedTasks, setSavedTasks] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSavedTasks([...savedTasks, task]);
    setTask("");
  };

  const handleDelete = (index) => {
    const newTasks = [...savedTasks];
    newTasks.splice(index, 1);
    setSavedTasks(newTasks);
  };

  return (
    <>
      <div className="add-task-container">
        <h1 className="text-Title">Add Task</h1>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Add Task"
            className="input"
            type="text"
            value={task}
            onChange={(event) => setTask(event.target.value)}
          />
          <button type="submit">
            <img
              className="img-add"
              width={"30px"}
              height={"30px"}
              src={addIcon}
              alt=""
            />
          </button>
        </form>
      </div>
      <div className="tasks-container">
        {savedTasks.map((task, index) => (
          <Tasks
            key={index}
            text={task}
            index={index}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </>
  );
};

export default AddTask;
