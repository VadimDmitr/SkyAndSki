// import { useContext } from "react";
// import { userDataContext } from "contexts/userContext";
import snowboard from "images/snowboard_light.png";
import cross from "images/icons/cross.svg";

export const Cart = () => {
	// const { cart, setCart } = useContext(userDataContext);

	return (
		<div className="wrapper">
			<div className="cart">
				<h2>Cart</h2>
				<div className="cart__items">
					<div className="cart-item">
						<img
							className="cart-item__img"
							src={snowboard}
							alt="snowboard"
						/>
						<div className="cart-item__content">
							<p className="cart-item__title">
								Sardinia White
							</p>
							<img
								src={cross}
								alt="remove item from cart"
							/>
							<p>120$</p>
							<div className="cart-item">
								<p className="pointer">-</p>
								<p>1</p>
								<p className="pointer">+</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
