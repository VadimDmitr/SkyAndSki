import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userDataContext } from "contexts/userContext";
import { cartDataContext } from "contexts/cartContext";
import { BASEURL } from "api/index";
import cardChip from "images/icons/chip.svg";
import shield from "images/icons/shield.svg";

export const Checkout = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		country: "",
		zip: "",
		city: "",
		address: "",
		cardNumber: "",
		cardHolder: "",
		expirationMonth: "",
		expirationYear: "",
		cvv: "",
	});
	const data = {
		firstName: "first",
		lastName: "last",
		email: "test@test.com",
		address: "123 n test",
		city: "city",
		state: "state",
		zipCode: "12345",
		country: "USA",
		cardHolder: "card holder",
		cardNumber: "1234",
		expirationMonth: "12",
		expirationYear: "34",
		ccv: "123",
		bill: "550",
	};

	const navigate = useNavigate();

	const { cart } = useContext(cartDataContext);
	const { userData } = useContext(userDataContext);

	useEffect(() => {
		console.log("userData =====> ", userData);
		// if (Object.keys(userData).length === 0)  navigate("/");
	});

	let estimate = 0;
	let tax = 0;
	let finalPrice = 0;
	if (cart.length > 0) {
		// console.log("cart ===> ", cart);
		// console.log("cart.length ===> ", cart.length);
		// console.log("typeof cart ====> ", typeof cart);
		estimate = cart.reduce(
			(total, current) =>
				total + current.quantity * current.price,
			0
		);
		// console.log("typeof estimate ====> ", typeof estimate);
		// console.log("estimate ===> ", estimate);
		tax = (estimate / 100) * 10.1;
		finalPrice = estimate + tax;
	}

	const URL = BASEURL + "orders";

	// const orderData = {
	// 	products: [
	// 		{
	// 			productId: "1",
	// 			name: "NewProduct",
	// 			quantity: "4",
	// 			price: "400",
	// 		},
	// 		{
	// 			productId: "2",
	// 			name: "NewProduct2",
	// 			quantity: "2",
	// 			price: "150",
	// 		},
	// 	],
	// 	bill: "550",
	// 	firstName: "first",
	// 	lastName: "last",
	// 	email: "test@test.com",
	// 	address: "123 n test",
	// 	city: "city",
	// 	state: "state",
	// 	zipCode: "12345",
	// 	country: "USA",
	// 	cardHolder: "card holder",
	// 	cardNumber: "1234",
	// 	expirationMonth: "12",
	// 	expirationYear: "34",
	// 	ccv: "123",
	// };

	const handleChange = (evt) => {
		const value = evt.target.value;
		setFormData({
			...formData,
			[evt.target.name]: value,
		});
		console.log("state ===> ", formData);
	};

	const handleSubmit = (event) => {
		console.log(
			"process.env.REACT_APP_USER_BEARER_TOKEN ====> ",
			process.env.REACT_APP_USER_BEARER_TOKEN
		);
		console.log("cart ===> ", cart);
		let order = {
			...{ products: [cart[0]] },
			...data,
			...{ bill: finalPrice },
		};
		console.log("order ===> ", order);
		event.preventDefault();
		console.log("userData.token ====> ", userData.token);
		const token = "Bearer " + userData.token;
		console.log("token ====> ", token);
		let myHeaders = new Headers();
		myHeaders.append(
			"Authorization",
			token
			// process.env.REACT_APP_USER_BEARER_TOKEN
		);
		myHeaders.append("Content-Type", "application/json");

		fetch(URL, {
			method: "POST",
			headers: myHeaders,
			body: JSON.stringify(order),
		})
			.then((response) => response.text())
			.then((result) => {
				console.log("result ====> ", result);
				console.log(
					"JSON.parse(result) ====> ",
					JSON.parse(result)
				);
				let resultFromResponse = JSON.parse(result);
				console.log(
					"resultFromResponse ====> ",
					resultFromResponse
				);
				console.log(
					"resultFromResponse[_id] ===> ",
					resultFromResponse.order._id
				);
				// setProducts([...JSON.parse(result).products]);
				// setOrderId(resultFromResponse.order._id);
				// console.log("orderId inside fetch ===> ", orderId);

				navigate(`/order/${resultFromResponse.order._id}`);

				// console.log("orderId before navigate ===> ", orderId);
				// navigate(`/order/${orderId}`);
			})
			.catch((error) => console.log("error", error));

		// navigate(`/order/${}`);

		// console.log("orderId before navigate ===> ", orderId);
		// navigate(`/order/${orderId}`);
	};

	if (Object.keys(userData).length !== 0)
		return (
			<div className="wrapper-mobile-full-screen">
				<form
					className="checkout"
					onSubmit={(e) => handleSubmit(e)}
				>
					<h1 className="checkout__header">Checkout</h1>
					<div className="checkout__address-container">
						<h2 className="checkout__sub-header">
							1. Your Address
						</h2>
						<div className="checkout__address-form">
							<div className="checkout__address-form-row-double">
								<div className="checkout__address-form-container">
									<label className="checkout__address-form-label">
										First Name
									</label>
									<input
										className="checkout__address-form-input"
										// required
										type="text"
										name="firstName"
										onChange={(event) =>
											handleChange(event)
										}
									/>
								</div>
								<div className="checkout__address-form-container">
									<label className="checkout__address-form-label">
										Last Name
									</label>
									<input
										className="checkout__address-form-input"
										// required
										type="text"
										name="lastName"
										onChange={(event) =>
											handleChange(event)
										}
									/>
								</div>
							</div>
							<div className="checkout__address-form-container">
								<label className="checkout__address-form-label">
									Email
								</label>
								<input
									className="checkout__address-form-input"
									// required
									type="text"
									name="email"
									onChange={(event) => handleChange(event)}
								/>
							</div>
							<div className="checkout__address-form-container">
								<label className="checkout__address-form-label">
									Country
								</label>
								<input
									className="checkout__address-form-input"
									// required
									type="text"
									name="contry"
									onChange={(event) => handleChange(event)}
								/>
							</div>
							<div className="checkout__address-form-row-double checkout__address-form-row-double--reverse">
								<div className="checkout__address-form-container">
									<label className="checkout__address-form-label">
										Zip Code
									</label>
									<input
										className="checkout__address-form-input"
										// required
										type="text"
										name="zip"
										onChange={(event) =>
											handleChange(event)
										}
									/>
								</div>
								<div className="checkout__address-form-container">
									<label className="checkout__address-form-label">
										City
									</label>
									<input
										className="checkout__address-form-input"
										// required
										type="text"
										name="city"
										onChange={(event) =>
											handleChange(event)
										}
									/>
								</div>
							</div>
							<div className="checkout__address-form-container">
								<label className="checkout__address-form-label">
									Address
								</label>
								<input
									className="checkout__address-form-input"
									// required
									type="text"
									name="address"
									onChange={(event) => handleChange(event)}
								/>
							</div>
						</div>
					</div>
					<div className="checkout__payment-container">
						<h2 className="checkout__sub-header">
							2. Payment
						</h2>
						<div className="checkout__payment-form">
							<div className="checkout__payment-form-row-outer align-items-end">
								<div className="checkout__payment-form-row">
									<label className="checkout__payment-form-label">
										Card number
									</label>
									<input
										className="checkout__payment-form-input"
										// required
										type="text"
										name="cardNumber"
										onChange={(event) =>
											handleChange(event)
										}
									/>
								</div>
								<img src={cardChip} alt="card chip" />
							</div>
							<div className="checkout__payment-form-row">
								<label className="checkout__payment-form-label">
									Card holder
								</label>
								<input
									className="checkout__payment-form-input"
									// required
									type="text"
									name="cardHolder"
									onChange={(event) => handleChange(event)}
								/>
							</div>
							<div className="checkout__payment-form-row-outer">
								<div className="checkout__payment-form-row">
									<label className="checkout__payment-form-label">
										Expiration date
									</label>
									<div className="checkout__payment-form-row-outer checkout__payment-form-row-outer--exp align-items-start">
										<input
											className="checkout__payment-form-input checkout__payment-form-input--exp"
											// required
											type="text"
											name="expirationMonth"
											onChange={(event) =>
												handleChange(event)
											}
										/>
										<input
											className="checkout__payment-form-input  checkout__payment-form-input--exp"
											// required
											type="text"
											name="expirationYear"
											onChange={(event) =>
												handleChange(event)
											}
										/>
									</div>
								</div>
								<div className="checkout__payment-form-row">
									<label className="checkout__payment-form-label">
										CVV/CVC
									</label>
									<input
										className="checkout__payment-form-input  checkout__payment-form-input--cvv"
										// required
										type="text"
										name="cvv"
										onChange={(event) =>
											handleChange(event)
										}
									/>
									<p>3 or 4 digits</p>
								</div>
							</div>
							<div className="checkout__payment-form-info-container">
								<img src={shield} alt="card shield" />
								<p className="checkout__payment-form-info">
									HTTPS/SSL - Secure connection
								</p>
							</div>
						</div>
					</div>
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
								$
								{cart.length > 0 ? (
									estimate.toFixed(2)
								) : (
									<></>
								)}
							</p>
						</div>
						<div className="cart-checkout-container__row">
							<p className="cart-checkout-container__before-total">
								Tax
							</p>
							{/* <p>Tax</p> */}
							<p className="cart-checkout-container__before-total">
								{/* ${tax.toFixed(2)}$ */}
								{cart.length > 0 ? tax.toFixed(2) : <></>}
							</p>
						</div>
						<div className="cart-checkout-container__row">
							<p className="cart-checkout-container__total">
								GRAND TOTAL
							</p>
							<p className="cart-checkout-container__total">
								{/* ${finalPrice.toFixed(2)}$ */}
								{cart.length > 0 ? (
									finalPrice.toFixed(2)
								) : (
									<></>
								)}
							</p>
						</div>
						{/* <Link to={"/checkout"ijuh */}
					</div>
					<div className="checkout__complete-container">
						<button
							className="button pointer"
							type="submit"
						>
							Complete payment
						</button>
						<p className="checkout__purchase-terms">
							By placing your order you agree to our{" "}
							<a
								className="checkout__purchase-terms-link"
								href="/terms"
							>
								Terms & Conditions
							</a>{" "}
							and you understand that we will process your
							personal data on the basis of our{" "}
							<a
								className="checkout__purchase-terms-link"
								href="/privacy-policy"
							>
								Privacy Policy
							</a>
							.
						</p>
					</div>
				</form>
			</div>
		);
	return <></>;
};
