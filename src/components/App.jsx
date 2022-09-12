import React, { useState } from "react";

function App() {
  const [inputUpdate, setInputUpdate] = useState("");
  const [buttonUpdate, setButtonUpdate] = useState("");

  function setToDo(event) {
    const { value } = event.target;
    setInputUpdate(value);
  }

  const updates = [];

  function setButton() {
    setButtonUpdate(inputUpdate);
    updates.push(inputUpdate);
    console.log(updates);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={setToDo} type="text" />
        <button onClick={setButton}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>{buttonUpdate}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
