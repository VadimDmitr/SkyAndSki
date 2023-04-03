import React from "react";

export const Filters = ({ categories, filterItems, setItems, productsData }) => {
	return (
		<div>
			{categories.map((category, id) => {
				return (
					<button onClick={() => filterItems(category)} key={id}>
						{category}
					</button>
				);
			})}
			<button onClick={() => setItems(productsData)}>All</button>
		</div>
	);
};
