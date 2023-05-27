import React, { useState } from "react";
import ImgDel from "../assets/x-mark.png";

const Tasks = (props) => {
  const { savedTasks, index, onDelete, onEdit } = props;
  const [isEditable, setIsEditable] = useState(false);
  const [text, setText] = useState(savedTasks[index]);

  const handleDeleteClick = () => {
    onDelete(index);
  };

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleInputBlur = () => {
    setIsEditable(false);
    onEdit(index, text);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      handleInputBlur();
    }
  };

  return (
    <>
      {isEditable ? (
        <input
          className="input-tasks"
          type="text"
          value={text}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <p className="Ptasks" onClick={() => setIsEditable(true)}>
          {savedTasks[index]}
        </p>
      )}
      <img
        className="img-del"
        onClick={handleDeleteClick}
        src={ImgDel}
        alt=""
      />
    </>
  );
};


export default Tasks;
