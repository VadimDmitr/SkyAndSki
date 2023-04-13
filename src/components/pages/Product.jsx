import { useState, useContext } from "react";
import { cartDataContext } from "../../contexts/cartContext";
import snowboard from "images/snowboard_light.png";

export const Product = () => {
	const { cart, setCart } = useContext(cartDataContext);
	const [quantityBox, setQuantityBox] = useState(1);

	const item = {
		id: "0",
		title: "Sardinia White",
		category: "board",
		price: "312.49 SAR",
		img: snowboard,
	};

	const increaseQuantityToAdd = () => {
		console.log("quantityBox ===> ", quantityBox);
		setQuantityBox(quantityBox + 1);
	};

	const decreaseQuantityToAdd = () => {
		if (quantityBox > 1) {
			console.log("quantityBox ===> ", quantityBox);
			setQuantityBox(quantityBox - 1);
		}
	};

	// const addItemToCart = (item, quantity) => {
	// 	// TODO
	// 	// REFACTOR THIS
	// 	// Check if the item already exists in the cart
	// 	if (cart) {
	// 		if (cart[item.title]) {
	// 			// If the item exists, update its quantity
	// 			cart[item.title].quantity += quantity;
	// 		} else {
	// 			// If the item doesn't exist, add it to the cartLocal with the specified quantity
	// 			cart[item.title] = { ...item, quantity };
	// 		}
	// 	}
	// };

	const addItemToCart = (item, quantity) => {
		// Check if the item already exists in the cart
		if (cart) {
			if (cart[item.title]) {
				// If the item exists, update its quantity
				const updatedCart = {
					...cart,
					[item.title]: {
						...cart[item.title],
						quantity: cart[item.title].quantity + quantity,
					},
				};
				setCart(updatedCart);
			} else {
				// If the item doesn't exist, add it to the cart with the specified quantity
				const updatedCart = {
					...cart,
					[item.title]: {
						...item,
						quantity,
					},
				};
				setCart(updatedCart);
			}
		}

		// console.log("cart before setCart ====> ", cart);
		// setCart({ ...cart, ...cart });
		console.log("cart after setCart ====> ", cart);
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
					<p className="product__description">
						Product Short Description senectus et netus et
						malesuada fames ac turpis egestas. Vesitbulum
						tortor quam, feugiat vitae, ultricies eget,
						tempor sit amet, ante. Donec eu libero sit amet
						quam egestas semper. Aenean ultricies mi vitae
						est. Mauris placerat eleifend{" "}
					</p>
					<div className="product__change-quantity-container">
						<button className="product__change-quantity product__change-quantity--left pointer"
						onClick={() => decreaseQuantityToAdd()}>
							<svg
								width="17"
								height="17"
								viewBox="0 0 17 17"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<line
									x1="1"
									y1="8.5"
									x2="16"
									y2="8.5"
									stroke="black"
								/>
							</svg>
						</button>
						<span className="product__quantity pointer">
							{quantityBox}
						</span>
						<button
							className="product__change-quantity product__change-quantity--right pointer"
							onClick={() => increaseQuantityToAdd()}
						>
							<svg
								width="17"
								height="17"
								viewBox="0 0 17 17"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M8.5 1L8.5 16" stroke="black" />
								<line
									x1="1"
									y1="8.5"
									x2="16"
									y2="8.5"
									stroke="black"
								/>
							</svg>
						</button>
					</div>
					<button
						className="button pointer"
						onClick={() => addItemToCart(item, quantityBox)}
					>
						Add to cart
					</button>
				</div>
			</div>
		</div>
	);
};
