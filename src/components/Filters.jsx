// import React from "react";
// import { useEffect, useRef } from "react";

export const Filters = ({
	categories,
	filterItems,
	setItems,
	productsData,
}) => {
	// const elementRef = useRef();

	// const fireEvent = (el, eventName) => {
	// 	const event = new Event(eventName, { bubbles: true });
	// 	el.dispatchEvent(event);
	// };

	// useEffect(() => {
	// 	// const buttonElement = elementRef.current;
	// 	// console.log("buttonElement =>> ", buttonElement);
	// 	// fireEvent(buttonElement, "click");
	// 	// // elementRef.current.focus();
	// 	// document.getElementById("filter-all-button").click();
	// }, []);

	const capitalize = (word) => {
		return word.charAt(0).toUpperCase() + word.slice(1);
	};

	return (
		<div className="catalog__filters">
			<button
				className="catalog__filter pointer"
				onClick={() => setItems(productsData)}
				// id="filter-all-button"
				// ref={elementRef}
			>
				All
			</button>
			{categories.map((category, id) => {
				return (
					<button
						className="catalog__filter pointer"
						onClick={() => filterItems(category)}
						key={id}
					>
						{capitalize(category)}
					</button>
				);
			})}
		</div>
	);
};
