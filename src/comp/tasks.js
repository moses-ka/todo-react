import React, { useState } from "react";
import ImgDel from "../assets/x-mark.png";

const Tasks = (props) => {
  const [isEditable, setIsEditable] = useState(false);
  const [text, setText] = useState(props.text);

  const handleDeleteClick = () => {
    props.onDelete(props.index);
  };

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleInputBlur = () => {
    setIsEditable(false);
    props.onEdit(props.index, text);
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
          autoFocus
        />
      ) : (
        <p className="Ptasks" onClick={() => setIsEditable(true)}>
          {text}
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
