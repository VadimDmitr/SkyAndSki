import { useContext } from "react";
import { cartDataContext } from "contexts/cartContext";
import snowboard from "images/snowboard_light.png";
import cross from "images/icons/cross.svg";

export const Cart = () => {
	const { cart, setCart } = useContext(cartDataContext);

	const estimate = cart.reduce(
		(total, current) =>
			total + current.quantity * current.productPrice,
		0
	);
	const tax = (estimate / 100) * 10.1;
	const finalPrice = estimate + tax;

	// const getCartValue = () => {
	// 	console.log("cart inside getCartValue =====> ", cart);
	// };

	const removeProductFromCart = (item) => {
		let updatedCart = cart;
		const index = updatedCart.indexOf(item);
		const x = updatedCart.splice(index, 1);
		// TO DO
		// need to figure out how to remove item from cart without creating variable X that we will not use again
		console.log("x => ", x);
		setCart([...updatedCart]);
	};

	const increaseQuantity = (item, quantity) => {
		if (
			cart.some(
				(cartItem) =>
					cartItem.productName === item.productName
			)
		) {
			let updatedCart = cart;
			updatedCart.find(
				(cartItemLocal) =>
					cartItemLocal.productName === item.productName
			).quantity += quantity;
			setCart([...updatedCart]);
		}
		console.log("cart after setCart ====> ", cart);
	};

	const decreaseQuantity = (item, quantity) => {
		if (
			cart.some(
				(cartItem) =>
					cartItem.productName === item.productName
			)
		) {
			let updatedCart = cart;
			let cartItemQuantity = updatedCart.find(
				(cartItemLocal) =>
					cartItemLocal.productName === item.productName
			).quantity;
			if (cartItemQuantity > 1) {
				updatedCart.find(
					(cartItemLocal) =>
						cartItemLocal.productName === item.productName
				).quantity -= quantity;
				setCart([...updatedCart]);
			}
		}
	};

	return (
		<div className="cart">
			{cart.length > 0 ? (
				<>
					<div className="wrapper">
						<div>
							<h2 className="cart__heading">Cart</h2>
							<div className="cart__items">
								{cart.map((item) => (
									<div className="cart-item">
										<img
											className="cart-item__img"
											src={snowboard}
											alt="snowboard"
										/>
										<div className="cart-item__content">
											<div className="cart-item__title-container">
												<p className="cart-item__title">
													{item.productName}
												</p>
											</div>
											<img
												className="cart-item__cross pointer"
												src={cross}
												alt="remove item from cart"
												onClick={() =>
													removeProductFromCart(item)
												}
											/>
											<div className="cart-item__category-container">
												<p className="cart-item__category">
													category
												</p>
											</div>
											<div className="cart-item__price-container">
												<p className="cart-item__price">
													$ {item.productPrice}
												</p>
											</div>
											<div className="cart-item__quantity-container-outer">
												<div className="cart-item-quantity-container">
													<button
														className="cart-item-quantity-container__change pointer"
														onClick={() =>
															decreaseQuantity(item, 1)
														}
													>
														<svg
															width="16"
															height="16"
															viewBox="0 0 16 16"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M1 8L15 8"
																stroke="#4F4F4F"
																stroke-width="2"
																stroke-linecap="round"
															/>
														</svg>
													</button>
													<p className="cart-item-quantity-container__quantity">
														{item.quantity}
													</p>
													<button
														className="cart-item-quantity-container__change pointer"
														onClick={() =>
															increaseQuantity(item, 1)
														}
													>
														<svg
															width="16"
															height="16"
															viewBox="0 0 16 16"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M8 14V8M8 8V2M8 8L14 8M8 8H2"
																stroke="#4F4F4F"
																stroke-width="2"
																stroke-linecap="round"
															/>
														</svg>
													</button>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
							{/* <button onClick={() => getCartValue()}>
								Click
							</button> */}
						</div>
					</div>
					<div className="cart__checkout-container cart-checkout-container">
						<div className="cart-checkout-container__row">
							<p className="cart-checkout-container__before-total">
								Price
							</p>
							<p className="cart-checkout-container__before-total">
							${estimate}
							</p>
						</div>
						<div className="cart-checkout-container__row">
							<p className="cart-checkout-container__before-total">
								Tax
							</p>
							{/* <p>Tax</p> */}
							<p className="cart-checkout-container__before-total">
								${tax.toFixed(2)}
							</p>
						</div>
						<div className="cart-checkout-container__row">
							<p className="cart-checkout-container__total">
								GRAND TOTAL
							</p>
							<p className="cart-checkout-container__total">
								${finalPrice.toFixed(2)}
							</p>
						</div>
						<button className="button pointer">
							Go to checkout
						</button>
					</div>
				</>
			) : (
				<div
					className={{
						display: "flex",
						flexDirection: "column",
					}}
				>
					<h1>Cart is empty</h1>
					<br />
					<a
						style={{ display: "block", fontSize: "1.6rem" }}
						href="/"
					>
						Go back to shopping
					</a>
				</div>
			)}
		</div>
	);
};
