import React, { useState, useEffect } from "react";
import addIcon from "../assets/add.png";
import Tasks from "./tasks";
import "./style/addTask.scss";

const AddTask = () => {
  const [task, setTask] = useState(""); // state for the input value
  const [savedTasks, setSavedTasks] = useState([]); // state for the saved tasks
  useEffect(() => {
    // effect for updating local storage when savedTasks changes
    if (savedTasks.length !== 0 ) {
      localStorage.setItem("tasks", JSON.stringify(savedTasks));
    }
  }, [savedTasks]);

  const localS = JSON.parse(localStorage.getItem("tasks")) || []; // get saved tasks from local storage
  useEffect(() => {
    // effect for initializing savedTasks with local storage data when component mounts
    setSavedTasks(localS);
  }, []);

  const handleSubmit = (event) => {
    // function for handling form submission
    event.preventDefault();
    if (task.trim() !== "") { // check if task is not empty
      setSavedTasks([...savedTasks, task]); // add task to savedTasks array
      setTask(""); // reset task state to empty string
    }
  };

  const handleDelete = (index) => {
    // function for handling task deletion
    const newTasks = [...savedTasks];
    newTasks.splice(index,1); // remove task at specified index
    setSavedTasks(newTasks); // update savedTasks with new array
    localStorage.setItem("tasks", JSON.stringify(newTasks)); // update local storage with new array
  };


  const handleEdit = (index, text) => {
    // function for handling task editing
    const newTasks = [...savedTasks];
    newTasks[index] = text; // update task at specified index with new text
    setSavedTasks(newTasks); // update savedTasks with new array
  };

  const post = () => {
    // function for rendering task list
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
            <div className="input-container">
            <input
              placeholder="Add Task"
              className="input"
              type="text"
              value={task}
              onChange={(event) => setTask(event.target.value)}
            />
            </div>
            {/* <button type="submit">
              <img
                className="img-add"
                width={"30px"}
                height={"30px"}
                src={addIcon}
                alt=""
              />
            </button> */}
            <div className="task-container">
            {post()}
            </div>
          </form>
        </div>
       
      </div>
    </>
  );
};

export default AddTask;
