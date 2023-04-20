import React from "react";
import { Link } from "react-router-dom";
import background from "images/NotFound.jpg";

export const NotFound = () => {
	return (
		<div
			style={{
				backgroundImage: `url(${background})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "center center",
				width: "98.7vw",
				height: "40vw",
				display: "flex",
				// flexWrap: 'wrap',
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<h1>404 Not Found</h1>
			<br />
			<p>Oops... you lost in the mountain.</p>
			<br />
			<p>
				We can't find the page that you are looking for.
			</p>
			<br />
			<Link to="/" className="small-button">
				Go Home
			</Link>
		</div>
	);
};
