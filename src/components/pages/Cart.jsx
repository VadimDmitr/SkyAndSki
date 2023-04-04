import snowboard from "../../images/snowboard_light.png";
import cross from "../../images/icons/cross.svg";

export const Cart = () => {
	return (
		<div className="wrapper">
			<div className="cart">
				<h2>Cart</h2>
				<div className="cart__items">
					<div className="cart-item">
						<img
							className="cart-item__img"
							src={snowboard}
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
								<p>-</p>
								<p>1</p>
								<p>+</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
