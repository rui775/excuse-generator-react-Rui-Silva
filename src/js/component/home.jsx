import React from "react";
// import { useState } from "react";

// import Button from "./button.jsx"

import ExcuseGenerator from "./generator.jsx";

import Counter from "./counter.jsx";

//create your first component
const Home = () => {

	// let [phrase, setCounter] = useState("Show me an excuse!");

	// const generetate = () => {
	// 	phrase = <ExcuseGenerator/>;        // if it is to use with button onclicK 
	// 	setCounter(phrase);
	// }

	return (
		<div className="text-center">
			<h1>Excuse Generator by Rui Silva</h1>
			<ExcuseGenerator/>
			<Counter/>
			{/* <Button title="Generate an excuse" click={generetate} /> if it is to use with button onclicK */}
		</div>
	);
};

export default Home;
