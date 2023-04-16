import { useState } from "react";
import { ProductCard } from "components/ProductCard";
// import { Product } from "components/Product";

// Refactor categories object
const categories = [
	{ name: "All", value: "all" },
	{ name: "Board", value: "board" },
	{ name: "Ski", value: "ski" },
	{ name: "Other", value: "other" },
];

export const SwitchCategory = ({ products }) => {
	// const [selectedCategory, setSelectedCategory] =
	// 	useState("all");

	const getProductsCurrentValue = () => {
		console.log("products ====> ", products);
	};

	// const handleClick = (category) => {
	// 	setSelectedCategory(category);
	// };

	// const filteredProducts =
	// 	selectedCategory === "all"
	// 		? products
	// 		: products.filter(
	// 				(product) => product.category === selectedCategory
	// 		  );

	return (
		<>
			{/* <div className="catalog__filters">
				{categories.map((category) => (
					<button
						className="catalog__filter pointer"
						key={category.value}
						onClick={() => handleClick(category.value)}
						style={{
							borderBottom:
								selectedCategory === category.value &&
								"1px solid var(--color-primary)",
						}}
					>
						{category.name}
					</button>
				))}
			</div> */}
			{/* <div className="products">
				{filteredProducts.map((product) => {
					return
					<ProductCard product={product} />
					// <a href={`/product/${product.productId}`}>
					// 	<ProductCard product={product} />
					// </a>;
				})}
			</div> */}
			{/* <button onClick={() => getProductsCurrentValue()}>Click</button> */}
			<div className="products">
				{products.map((product) => {
					<div>
						<p>{product.productName}</p>
					</div>;
					// <ProductCard product={product} />
					// <a href={`/product/${product.productId}`}>
					// 	<ProductCard product={product} />
					// </a>;
				})}
			</div>
		</>
	);
};
