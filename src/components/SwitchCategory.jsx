import { useState } from "react";
import { Products } from "./Products";

const categories = [
	{ name: "All", value: "all" },
	{ name: "Board", value: "board" },
	{ name: "Ski", value: "ski" },
	{ name: "Other", value: "other" },
];

// const products = [
// 	{ name: "Product 1", category: "electronics" },
// 	{ name: "Product 2", category: "clothing" },
// 	{ name: "Product 3", category: "home" },
// 	{ name: "Product 4", category: "electronics" },
// 	{ name: "Product 5", category: "clothing" },
// 	{ name: "Product 6", category: "home" },
// 	{ name: "Product 7", category: "electronics" },
// 	{ name: "Product 8", category: "clothing" },
// 	{ name: "Product 9", category: "home" },
// ];

export const SwitchCategory = ({ products }) => {
	const [selectedCategory, setSelectedCategory] =
		useState("all");

	const handleClick = (category) => {
		setSelectedCategory(category);
	};

	const filteredProducts =
		selectedCategory === "all"
			? products
			: products.filter(
					(product) => product.category === selectedCategory
			  );

	return (
		<div>
			{categories.map((category) => (
				<button
					key={category.value}
					onClick={() => handleClick(category.value)}
					style={{
						background:
							selectedCategory === category.value &&
							"lightblue",
					}}
				>
					{category.name}
				</button>
			))}
			<div className="products">
			{filteredProducts.map((product) => {
				return (
						<div className="product" key={product.id}>
							<img src={product.img} alt={product.name} />
							<div className="product__text">
								<p className="product__title">{product.name}</p>
								<p className="product__price">{product.price}</p>
							</div>
						</div>
					);
				})}
			</div>
			{/* <ul>
				{filteredProducts.map((product) => (
					<li key={product.name}>{product.name}</li>
				))}
			</ul> */}
		</div>
	);
};

// export default SwitchCategory;
