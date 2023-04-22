export const Order = () => {
	return (
		<div className="order">
			<h2>Your order has been placed</h2>
			<p>23 March 2023</p>
			<p>N-573927584</p>
			<p>Delivery date: 30 March 2023</p>
			<p>
				Address: 7, Oxford Street, London W 13 NP, Great
				Britain
			</p>
			<div className="checkout__estimate-container">
				<div className="cart-checkout-container__row">
					<p className="cart-checkout-container__before-total">
						Shipping & Handling
					</p>
					<p className="cart-checkout-container__before-total">
						Free
					</p>
				</div>
				<div className="cart-checkout-container__row">
					<p className="cart-checkout-container__before-total">
						Price
					</p>
					<p className="cart-checkout-container__before-total">
						{/* ${cart.length > 0 ? estimate : <></>} */}
					</p>
				</div>
				<div className="cart-checkout-container__row">
					<p className="cart-checkout-container__before-total">
						Tax
					</p>
					{/* <p>Tax</p> */}
					<p className="cart-checkout-container__before-total">
						{/* ${tax.toFixed(2)}$ */}
						{/* {cart.length > 0 ? tax : <></>} */}
					</p>
				</div>
				<div className="cart-checkout-container__row">
					<p className="cart-checkout-container__total">
						GRAND TOTAL
					</p>
					<p className="cart-checkout-container__total">
						{/* ${finalPrice.toFixed(2)}$ */}
						{/* {cart.length > 0 ? finalPrice : <></>} */}
					</p>
				</div>
				{/* <Link to={"/checkout"ijuh */}
			</div>
            <button className="button">Go to order history</button>
		</div>
	);
};
