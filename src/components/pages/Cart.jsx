import { useContext } from "react";
import { cartDataContext } from "contexts/cartContext";
import snowboard from "images/snowboard_light.png";
import cross from "images/icons/cross.svg";

export const Cart = () => {
	const { cart, setCart } = useContext(cartDataContext);

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
		<div className="wrapper">
			{cart.length > 0 ? (
				<div className="cart">
					<h2>Cart</h2>
					<div className="cart__items">
						{cart.map((item) => (
							<div className="cart-item">
								<img
									className="cart-item__img"
									src={snowboard}
									alt="snowboard"
								/>
								<div className="cart-item__content">
									<p className="cart-item__title">
										{item.productName}
									</p>
									<img
										className="pointer"
										src={cross}
										alt="remove item from cart"
										onClick={() =>
											removeProductFromCart(item)
										}
									/>
									<p>{item.productName}</p>
									<div className="cart-item">
										<p
											className="pointer"
											onClick={() =>
												decreaseQuantity(item, 1)
											}
										>
											-
										</p>
										<p>{item.quantity}</p>
										<p
											className="pointer"
											onClick={() =>
												increaseQuantity(item, 1)
											}
										>
											+
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
					{/* <button onClick={() => getCartValue()}>
						Click
					</button> */}
				</div>
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
