import React, { useState } from "react";

var changeColor = true;

function ToDoItem(props) {
  const [styling, setStyling] = useState(false);

  function settingStyle() {
    setStyling((prevStyle) => !prevStyle);
  }

  return (
    <li
      onClick={settingStyle}
      style={{ textDecoration: styling ? "line-through" : "none" }}
    >
      {props.text}
    </li>
  );
}

export default ToDoItem;
