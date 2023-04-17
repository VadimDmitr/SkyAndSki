import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { SwitchCategory } from "components/SwitchCategory";
import { BASEPRODUCTSURL } from "api/index";
import { ProductCard } from "components/ProductCard.jsx";
// import { Button } from "utils/Button";

export const Catalog = () => {
	const [products, setProducts] = useState([]);

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
			.catch((error) => console.log("error", error));
	}, []);

	return (
		<div className="catalog">
			<div className="catalog-header-container">
				<hr className="catalog-header-container__horizontal-line" />
				<p className="catalog-header-container__heading">
					Catalog
				</p>
			</div>
			<h2>Our Most Popular Board category</h2>
			<SwitchCategory products={products} />
			{/* <Component products={products} /> */}
			<div className="products">
				{products.length > 0 ? (
					products.map((product) => (
						<Link to={`/product/${product._id}`}>
							<ProductCard
								product={product}
								id={product.id}
							/>
						</Link>
					))
				) : (
					<h2>
						There are no products available at this moment.
						Please come back later.
					</h2>
				)}
			</div>
			{/* {productsRender} */}
			{/* <Button /> */}
			<div className="button pointer">More products</div>
		</div>
	);
};
