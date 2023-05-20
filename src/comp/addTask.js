import React, { useState, useEffect } from "react";
import addIcon from "../assets/add.png";
import Tasks from "./tasks";
import "./style/addTask.css";

const AddTask = () => {
  const [task, setTask] = useState("");
  const [savedTasks, setSavedTasks] = useState([]);
  useEffect(() => {
    if (savedTasks.length !== 0 ) {
      
    
    localStorage.setItem("tasks", JSON.stringify(savedTasks));
    console.log(savedTasks);
    }
  }, [savedTasks]);

  // useEffect(() => {

  //   console.log(localStorage.getItem("tasks"));
  // }, [savedTasks]);

 

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

  const handleEdit = (index, text) => {
    const newTasks = [...savedTasks];
    newTasks[index] = text;
    setSavedTasks(newTasks);
  };

  return (
    <>
      <div className="wrapper">
        <div className="add-task-container">
          <h2 className="text-Title">Add Task</h2>

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
              onEdit={handleEdit}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AddTask;
