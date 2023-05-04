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
			}}
			className="not-found"
		>
			<h1>404 Not Found</h1>
			<p>Oops... you lost in the mountain.</p>
			<p>
				We can't find the page that you are looking for.
			</p>
			<Link to="/" className="small-button">
				Go Home
			</Link>
		</div>
	);
};
