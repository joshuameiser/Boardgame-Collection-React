import React, { useState, useEffect } from "react";
import FieldSVG from "./FieldSVG";
import classes from "./Field.module.css";

const Field: any = () => {
	let fieldArray: Array<Array<number>> = [
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
	];
	const [field, updateField] = useState(fieldArray);
	const [playerOne, switchPlayer] = useState(true);

	const [player1, changePlayer1Name] = useState("Player 1");
	const [player2, changePlayer2Name] = useState("Player 2");
	let defaultMessage = `${playerOne ? player1 : player2} is now playing`;
	const [message, changeMessage] = useState(defaultMessage);
	const [gameOver, changeGameState] = useState(false);

	useEffect(() => {
		if (!gameOver) {
			defaultMessage = `${playerOne ? player1 : player2} is now playing`;
			changeMessage(defaultMessage);
		}
	}, [playerOne, player1, player2]);

	const clickedHandler = (key: string) => {
		if (gameOver) {
			return;
		} else {
			const index = key.split("");
			const index2: number = Number(index[1]);
			let fieldArray = [...field];
			let player;
			if (playerOne) {
				player = 1;
			} else {
				player = 2;
			}
			for (let i = height - 1; i >= 0; i--) {
				if (fieldArray[i][index2] === 0) {
					if (playerOne) {
						fieldArray[i][index2] = 1;
					} else {
						fieldArray[i][index2] = 2;
					}
					if (logicHandler(index2, i, player, fieldArray)) {
						changeMessage(`${playerOne ? player1 : player2} has won the game!`);
						changeGameState(true);
					} else {
						let activePlayer = !playerOne;
						switchPlayer(activePlayer);
					}
					updateField(fieldArray);

					break;
				}
			}
		}
	};

	const logicHandler = (
		xIndex: number,
		yIndex: number,
		player: number,
		fieldArray: Array<Array<number>>
	) => {
		//vertical direction:
		let verticalCount = 1;
		for (let i = yIndex + 1; i < height; i++) {
			if (fieldArray[i][xIndex] === player) {
				verticalCount += 1;
			} else {
				break;
			}
		}

		for (let i = yIndex - 1; i >= 0; i--) {
			if (fieldArray[i][xIndex] === player) {
				verticalCount += 1;
			} else {
				break;
			}
		}
		if (winHandler(verticalCount, player)) {
			return true;
		} else {
			verticalCount = 0;
		}

		// horizontal direction:
		let horizontalCount = 1;
		for (let i = xIndex + 1; i < width; i++) {
			if (fieldArray[yIndex][i] === player) {
				horizontalCount += 1;
			} else {
				break;
			}
		}
		for (let i = xIndex - 1; i >= 0; i--) {
			if (fieldArray[yIndex][i] === player) {
				horizontalCount += 1;
			} else {
				break;
			}
		}
		if (winHandler(horizontalCount, player)) {
			return true;
		} else {
			horizontalCount = 0;
		}

		//right diagonal direction:
		let rightDiagonalCounter = 1;
		for (
			let i = [xIndex + 1, yIndex + 1];
			i[0] < width && i[1] < height;
			[i[0]++, i[1]++]
		) {
			if (fieldArray[i[1]][i[0]] === player) {
				rightDiagonalCounter += 1;
			} else {
				break;
			}
		}
		for (
			let i = [xIndex - 1, yIndex - 1];
			i[0] >= 0 && i[1] >= 0;
			[i[0]--, i[1]--]
		) {
			if (fieldArray[i[1]][i[0]] === player) {
				rightDiagonalCounter += 1;
			} else {
				break;
			}
		}
		if (winHandler(rightDiagonalCounter, player)) {
			return true;
		} else rightDiagonalCounter = 0;

		//left diagonal direction:
		let leftDiagonalCounter = 1;
		for (
			let [x, y] = [xIndex + 1, yIndex - 1];
			x < width && y >= 0;
			[x++, y--]
		) {
			if (fieldArray[y][x] === player) {
				leftDiagonalCounter += 1;
			} else {
				break;
			}
		}
		for (
			let [x, y] = [xIndex - 1, yIndex + 1];
			x >= 0 && y < height;
			[x--, y++]
		) {
			if (fieldArray[y][x] === player) {
				leftDiagonalCounter += 1;
			} else {
				break;
			}
		}
		if (winHandler(leftDiagonalCounter, player)) {
			return true;
		} else {
			leftDiagonalCounter = 0;
			return false;
		}
	};

	const winHandler = (count: number, player: number) => {
		if (count >= 4) {
			return true;
		}
	};

	const resetHandler = () => {
		changeGameState(false);
		updateField(fieldArray);
		if (playerOne) {
		} else {
			switchPlayer(true);
		}
	};

	const height = field.length;
	const width = field[0].length;

	const playerSelect = (
		<div>
			<label htmlFor="player1">Player 1:</label>
			<input
				type="text"
				id="player1"
				name="player1"
				placeholder={player1}
				// value={player1}
				onChange={(e: any) => changePlayer1Name(e.target.value)}
			/>
			<br />
			<br />
			<label htmlFor="player2">Player 2:</label>
			<input
				type="text"
				id="player2"
				name="player2"
				placeholder={player2}
				onChange={(e: any) => changePlayer2Name(e.target.value)}
			/>
		</div>
	);

	return (
		<div className={classes.field}>
			{playerSelect}
			<h2>{message}</h2>
			<FieldSVG field={field} clicked={clickedHandler} />
			<button onClick={resetHandler}>Reset the game!</button>
		</div>
	);
};

export default Field;
