import React, { useState } from "react";

function App() {
	const [inputUpdate, setInputUpdate] = useState("");
	const [buttonUpdate, setButtonUpdate] = useState("");

	function setToDo(event) {
		const { value } = event.target;
		setInputUpdate(value);
	}
	// OBSERVATION 1: This updates here should be a reactive value (state), I suppose. So, I'll comment it and add it as state.
	// const updates = [];
	const [updates, setUpdates] = useState([]);

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
				{/* OBSERVATION 2: This unordered list should actually be mapping the 'updates' state array. Right now, it's just displaying a single value. So, i'll comment this out and do the mapping  😁 */}
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
