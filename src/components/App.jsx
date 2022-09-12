import React, { useState } from "react";

function App() {
	const [inputUpdate, setInputUpdate] = useState("");
	// OBSERVATION 3: I think this state isn't quite useful. So Imma just comment it out. And comment out where you used it on line 17. Because you set the state, but you're not using the state's value anywhere.
	// const [buttonUpdate, setButtonUpdate] = useState("");

	function setToDo(event) {
		const { value } = event.target;
		setInputUpdate(value);
	}
	// OBSERVATION 1: This updates here should be a reactive value (state), I suppose. So, I'll comment it and add it as state.
	// const updates = [];
	const [updates, setUpdates] = useState([]);

	function setButton() {
		// setButtonUpdate(inputUpdate);
		// OBSERVATION 4: You're pushing to the state value directly, which is wrong. You should use the setUpdate function like I did right on line 20. But I guess I made it use the useState, so, it's on me.
		// updates.push(inputUpdate);
		setUpdates((prevState) => prevState.push(inputUpdate)); // btw, if you pass a function in a setState function like this, the argument represents the previous value and what is returned will be the new value.
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
				{/* OBSERVATION 2: This unordered list should actually be mapping the 'updates' state array. Right now, it's just displaying a single value. So, i'll comment this out and do the mapping underneath. 😁 */}
				{/* <ul>
					<li>{buttonUpdate}</li>
				</ul> */}
				<ul>
					{updates.map((todoItem) => (
						<li>{todoItem}</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default App;
