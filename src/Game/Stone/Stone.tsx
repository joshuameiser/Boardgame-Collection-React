import React from "react";
import classes from "./Stone.module.css";

const Stone = (props: { value: number }) => {
	let player;
	if (props.value === 1) {
		player = classes.Player1;
	} else if (props.value === 2) {
		player = classes.Player2;
	}

	// props.value === 1 ? "Player1" : "Player2";

	return <div className={classes.stone + " " + player}></div>;
};

export default Stone;
