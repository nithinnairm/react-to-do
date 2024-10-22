/* eslint-disable react/prop-types */
// import checkmark from "/public/checkmark.png";
import "./ToDoCard.scss";
import { useState } from "react";

const ToDoCard = ({
  value,
  onDeleteListItem,
  isCompletedUpdate,
  hideCheckbox,
}) => {
  const [checkedItem, setCheckedItem] = useState(false);

  return (
    <div
      className={`to-do-card ${
        checkedItem ? "to-do-card-finished" : "to-do-card-unfinished"
      }`}
    >
      <input
        type="checkbox"
        hidden={hideCheckbox}
        name=""
        id="to-do-checkbox"
        onChange={() => {
          setCheckedItem(!checkedItem);
          isCompletedUpdate(value);
        }}
      />
      <p className="todoName">{value.desc}</p>
      <button onClick={() => onDeleteListItem(value)} className="to-do-submit">
        Delete
      </button>
    </div>
  );
};

export default ToDoCard;
