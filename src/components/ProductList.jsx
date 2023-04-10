import React from "react";
import ProductCard from "components/ProductCard";
import "components/ProductList.css";

const products = [
	// products here
];

const ProductList = ({ products }) => {
	return (
		<div className="product-list">
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
};

export default ProductList;
