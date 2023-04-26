import { useState } from "react";
import { Link } from "react-router-dom";
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
		<>
			{products.length > 0 ? (
				<>
					<div className="catalog__filters">
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
					</div>
					<div className="products">
						{filteredProducts.map((product) => (
							<Link
								to={`/product/${product._id}`}
								key={product._id}
							>
								<ProductCard
									product={product}
									id={product.id}
									key={product._id}
								/>
							</Link>
						))}
					</div>
					<div className="button pointer">
						More products
					</div>
				</>
			) : (
				<h2>
					There are no products available at this moment.
					Please come back later.
				</h2>
			)}
		</>
	);
};
