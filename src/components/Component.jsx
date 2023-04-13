export const Component = ({ product }) => {
    // alert("hello");
    // const productsRender = products.map((product) => {
	// 	<div className="product-card">
	// 		{/* <img src={product.img} alt={product.title} /> */}
	// 		<div className="product-card__text">
	// 			<p className="product-card__title">
	// 				{product.productName}
	// 			</p>
	// 			<p className="product-card__price">
	// 				{product.productPrice}
	// 			</p>
	// 		</div>
	// 	</div>
	// })

    return (
        <>
        {/* <div style={{background: "red"}}>{product?.productName}</div> */}
		<div className="product-card">
			{/* <img src={product.img} alt={product.title} /> */}
			<div className="product-card__text">
				<p className="product-card__title">
					{product?.productName}
				</p>
				<p className="product-card__price">
					{product?.productPrice}
				</p>
			</div>
		</div>
        </>
    )
}