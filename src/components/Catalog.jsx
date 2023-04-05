import { useState } from "react";
import { Filters } from "./Filters";
import { Products } from "./Products";
import { SwitchCategory } from "./SwitchCategory";
// import { Button } from "./utils/Button";
import snowboardLight from "../images/snowboard_light.png";
import snowboardDark from "../images/snowboard_dark.png";
import goggles from "../images/goggles.png";
import boots from "../images/boots.png";

export const Catalog = () => {
	const productsData = [
		{
			id: "0",
			name: "Sardinia White",
			category: "board",
			price: "312.49 SAR",
			img: snowboardLight,
		},
		{
			id: "1",
			name: "Sicily Grey ",
			category: "ski",
			price: "312.49 SAR",
			img: snowboardDark,
		},
		{
			id: "2",
			name: "Sicily Grey",
			category: "other",
			price: "312.49 SAR",
			img: goggles,
		},
		{
			id: "3",
			name: "Sicily Grey Décor 30×60",
			category: "other",
			price: "312.49 SAR",
			img: boots,
		},
	];

	const [currentCategory, setCurrentCategory] =
		useState("All");
	const categories = ["All", "Board", "Ski", "Other"];
	// const categories = [
	// 	...new Set(
	// 		productsData.map((product) => product.category)
	// 	),
	// ];

	const [products, setProducts] = useState(productsData);

	const handleCategoryChange = (category) => {
		setCurrentCategory(category);
	};

	const filterItems = (currentCategory) => {
		const newProducts = productsData.filter((product) => {
			return product.category === currentCategory;
		});
		setProducts(newProducts);
	};

	return (
		<div className="catalog">
			<div className="catalog-header-container">
				<hr className="catalog-header-container__horizontal-line" />
				<p className="catalog-header-container__heading">
					Catalog
				</p>
			</div>
			<h2>Our Most Popular Board category</h2>
			{/* <div className="catalog__filters">
				<p className="catalog__filter">All</p>
				<p className="catalog__filter">Sky</p>
				<p className="catalog__filter">Ski</p>
				<p className="catalog__filter">Boards</p>
				<p className="catalog__filter">Other</p>
			</div> */}
			<SwitchCategory
				products={products}
				categories={categories}
				currentCategory={currentCategory}
				onCategoryChange={handleCategoryChange}
			/>
			{/* <Filters
				filterItems={filterItems}
				setItems={setProducts}
				categories={categories}
				productsData={productsData}
			/> */}
			{/* <Products products={products} /> */}
			{/* <Button /> */}
			<div className="button">More products</div>
		</div>
	);
};
