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
    }
  }, [savedTasks]);
  
  const localS = JSON.parse(localStorage.getItem("tasks")) || [];
  useEffect(() => {
    setSavedTasks(localS);
  }, []);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim() !== "") {
      setSavedTasks([...savedTasks, task]);
      setTask("");
    }
  };
  
  const handleDelete = (index) => {
    const newTasks = [...savedTasks];
    newTasks.splice(index,1);
    setSavedTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
   
  };
  

  const handleEdit = (index, text) => {
    const newTasks = [...savedTasks];
    newTasks[index] = text;
    setSavedTasks(newTasks);
  

  };
  const post = () => {
    return savedTasks.map((task, index) => (
      <div className="tasks" key={index}>
        <Tasks
          key={index}
          text={task}
          index={index}
          onDelete={handleDelete}
          onEdit={handleEdit}
          savedTasks={savedTasks}
        />

      </div>
    ));
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
            {post()}
        </div>
      </div>
    </>
  );
};

export default AddTask;
//useEffect(() => {
    //save tasks to local storage on window close
  //   const saveTasksToLocalStorage = () =>
  //     localStorage.setItem("reactTasks", JSON.stringify(tasks));
  //   window.addEventListener("beforeunload", saveTasksToLocalStorage);
  //   return () => {
  //     window.removeEventListener("beforeunload", saveTasksToLocalStorage);
  //   };
  // }, [tasks]);