import { useContext } from "react";
import { userDataContext } from "../contexts/userContext";
import snowboard from "../images/snowboard_light.png";

export const Product = () => {
	const { cart, setCart } = useContext(userDataContext);

	const item = {
		id: "0",
		title: "Sardinia White",
		category: "board",
		price: "312.49 SAR",
		img: snowboard,
	};

	let cartLocal = {};

	const addItemToCart = (item, quantity) => {
		// Check if the item already exists in the cart
		if (cartLocal[item.name]) {
			// If the item exists, update its quantity
			cartLocal[item.name].quantity += quantity;
		} else {
			// If the item doesn't exist, add it to the cartLocal with the specified quantity
			cartLocal[item.name] = { ...item, quantity };
		}
		console.log("cartLocal ====> ", cartLocal);
		setCart({ ...cart, cartLocal });
		console.log("cart ====> ", cart);
	};

	return (
		<div className="wrapper">
			<div className="product">
				<img
					className="product__img"
					src={snowboard}
					alt="snowboard"
				/>
				<div className="product__content">
					<p className="product__title">Sardinia White</p>
					<p className="product__price">312.49 SAR</p>
					<p className="product__description">Product Short Description senectus et netus et malesuada fames ac turpis egestas. Vesitbulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend </p>
					<div className="product__change-quantity-container">
						<span className="product__change-quantity product__change-quantity--left pointer">
							-
						</span>
						<span className="product__quantity pointer">
							1
						</span>
						<span
							className="product__change-quantity product__change-quantity--right pointer"
							onClick={() => addItemToCart(item, 1)}
						>
							+
						</span>
					</div>
					<button className="button pointer">Add to cart</button>
				</div>
			</div>
		</div>
	);
};
