import { useState } from "react";
// import { Button } from "./utils/Button";
// import Data from "./Data";
import { Filters } from "./Filters";
import { Products } from "./Products"
// import Card from "./Card";
import snowboard from "../images/snowboard.png";

export const Catalog = () => {
	const productsData = [
		{
			id: "0",
			title: "Sardinia White",
			category: "board",
			price: "312.49 SAR",
			img: snowboard,
		},
		{
			id: "1",
			title: "Sardinia White",
			category: "ski",
			price: "312.49 SAR",
			img: snowboard,
		},
		{
			id: "2",
			title: "Sardinia White",
			category: "other",
			price: "312.49 SAR",
			img: snowboard,
		},
	];

	const [products, setProducts] = useState(productsData);

	const categories = [
		...new Set(
			productsData.map((product) => product.category)
		),
	];

	const filterItems = (currentCategory) => {
		const newProducts = productsData.filter((product) => {
			return product.category === currentCategory;
		});
		setProducts(newProducts);
	};

	// const productsList = products.map((card) => {
	// 	return (
	// 		<div className="product">
	// 			<img src={card.img} alt="snowboard" />
	// 			<div className="product__text">
	// 				<p className="product__title">{card.title}</p>
	// 				<p className="product__price">{card.price}</p>
	// 			</div>
	// 		</div>
	// 	);
	// });

	return (
		<div className="catalog">
			<div className="catalog-header-container">
				<hr className="catalog-header-container__horizontal-line" />
				<p className="catalog-header-container__heading">
					Catalog
				</p>
			</div>
			<h2>Our Most Popular Board category</h2>
			<div className="catalog__filters">
				<p className="catalog__filter">All</p>
				<p className="catalog__filter">Sky</p>
				<p className="catalog__filter">Ski</p>
				<p className="catalog__filter">Boards</p>
				<p className="catalog__filter">Other</p>
			</div>
			<Filters
				filterItems={filterItems}
				setItems={setProducts}
				categories={categories}
				productsData={productsData}
			/>
            <Products products={products} />
			{/* <Card items={products} /> */}
			{/* <div className="products">{productsList}</div> */}
			{/* <Button /> */}
			<div className="button">More products</div>
		</div>
	);
};
