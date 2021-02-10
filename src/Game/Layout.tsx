import classes from "./Layout.module.css";
import React from "react";
import Field from "./Field/Field";

const Layout = () => {
	return (
		<div className={classes.layout}>
			<Field />
		</div>
	);
};

export default Layout;
