import React from "react";
import ImgDel from "../assets/x-mark.png";


const Tasks = (props) => {
  const handleDeleteClick = () => {
    props.onDelete(props.index);
  };

  return (
    <>
      <p className="Ptasks" contentEditable="true">{props.text}</p>
      <img className="img-del"
        onClick={handleDeleteClick}
       
        src={ImgDel}
        alt=""
      />
    </>
  );
};

export default Tasks;
