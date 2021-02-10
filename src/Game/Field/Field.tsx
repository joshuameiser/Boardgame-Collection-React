import React, { useState } from "react";
import classes from "./Field.module.css";
import Stone from "../Stone/Stone";

const Field: any = () => {
	const fieldArray: Array<Array<number>> = [
		[0, 0, 0, 0, 0, 0, 0],
		[1, 0, 2, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0],
	];
	const [field, updateField] = useState(fieldArray);

	const fieldVisual: JSX.Element[] = field.map((row) => {
		return (
			<div>
				{row.map((element) => {
					return (
						<div className={classes.outer}>
							<div className={classes.inner}>
								{element === 0 ? null : <Stone value={element} />}
							</div>
						</div>
					);
				})}
			</div>
		);
	});

	return <div className={classes.field}>{fieldVisual}</div>;
};

export default Field;
