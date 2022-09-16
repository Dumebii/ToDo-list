import React, { useState } from "react";
import ToDoItem from "./ToDo";
import DeleteItem from "./ToDoDelete"

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteEvent(id) {
    setItems(prevValue => 
     { return prevValue.filter((item, index) => 
     { return index !== id});
     });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          placeholder="Text goes in here"
          onChange={handleChange}
          type="text"
          value={inputText}
        />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <DeleteItem
            text = {todoItem}
            key = {index}
            id = {index}
            delete={deleteEvent} />
          ))}
          
        </ul>
      </div>
    </div>
  );
}

export default App;
