import React from "react";
import { useState } from "react";

import Button from "./button.jsx"

import ExcuseGenerator from "./generator.jsx";

//create your first component
const Home = () => {

	let [phrase, setCounter] = useState("Show me an excuse!");

	const generetate = () => {
		phrase = <ExcuseGenerator/>;
		setCounter(phrase);
	}

	return (
		<div className="text-center">
			<h1>Excuse Generator by Rui Silva</h1>
			<h3 class="shadow p-3 mb-5 bg-body-tertiary rounded"><strong>{phrase}</strong></h3>
			<Button title="Generate an excuse" click={generetate} />
		</div>
	);
};

export default Home;
