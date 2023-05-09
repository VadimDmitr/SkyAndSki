import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BASEURL } from "api/index";
import { Loader } from "components/icons/Loader";
import { ProductCard } from "components/ProductCard.jsx";
// import { Button } from "utils/Button";

const categories = [
	{ name: "All", value: "all" },
	{ name: "Board", value: "board" },
	{ name: "Ski", value: "ski" },
	{ name: "Other", value: "other" },
];

export const Catalog = () => {
	const [products, setProducts] = useState([]);
	const [error, setError] = useState(null);

	const BASEPRODUCTSURL = BASEURL + "products";
	const [selectedCategory, setSelectedCategory] =
		useState("all");

	console.log("selectedCategory ===> ", selectedCategory);
	console.log("products ===> ", products);

	const handleClick = (category) => {
		setSelectedCategory(category);
	};

	const filteredProducts =
		selectedCategory === "all"
			? products
			: products.filter(
					(product) => product.category === selectedCategory
			  );

	/* eslint-disable react-hooks/exhaustive-deps */
	useEffect(() => {
		fetch(BASEPRODUCTSURL, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.text())
			.then((result) => {
				console.log("products ====> ", products);
				setProducts([...JSON.parse(result).products]);
			})
			.catch((errorResponse) => {
				setError(errorResponse);
				console.log("errorResponse ===> ", errorResponse);
				console.log("error ===> ", error);
			});
	}, []);
	/* eslint-disable react-hooks/exhaustive-deps */

	return (
		<div className="catalog">
			<div className="catalog-header-container">
				<hr className="catalog-header-container__horizontal-line" />
				<p className="catalog-header-container__heading">
					Catalog
				</p>
			</div>
			<h2 className="catalog-header-container__title">
				Our Most Popular Board category
			</h2>
			{/* <SwitchCategory products={products} /> */}
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
				{products.length > 0 ? (
					filteredProducts.map((product, index) => (
						<Link
							key={index}
							to={`/product/${product._id}`}
						>
							<ProductCard
								product={product}
								id={product.id}
								key={product.id}
							/>
						</Link>
					))
				) : error ? (
					<p className="error">Error {error.status}</p>
				) : (
					<div className="loader-container">
						<Loader />
						{/* <p>load</p> */}
					</div>
				)}
			</div>
			{/* {productsRender} */}
			{/* <Button /> */}
		</div>
	);
};
