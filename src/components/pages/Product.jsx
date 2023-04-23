import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { BASEURL } from "api/index";
import { cartDataContext } from "contexts/cartContext";

export const Product = () => {
	const location = useLocation();
	const { cart, setCart } = useContext(cartDataContext);
	const [product, setProduct] = useState({});
	const [quantityBox, setQuantityBox] = useState(1);
	const BASEPRODUCTSURL = BASEURL + "products/";

	/* eslint-disable react-hooks/exhaustive-deps */
	useEffect(() => {
		const productIdFromURL =
			location.pathname.split("/")[2];

		fetch(BASEPRODUCTSURL + productIdFromURL, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.text())
			.then((result) => {
				console.log("result ===> ", result);
				const productFromBackend =
					JSON.parse(result).product;
				setProduct({ ...product, ...productFromBackend });
			})
			.catch((error) => console.log("error", error));
	}, []);
	/* eslint-disable react-hooks/exhaustive-deps */

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

	// const getCartCurrentValue = () => {
	// 	console.log(
	// 		"cart inside getCartCurrentValue =====> ",
	// 		cart
	// 	);
	// };

	const addItemToCart = (item, quantity) => {
		// Check if the item already exists in the cart
		if (cart) {
			if (
				cart.some(
					(cartItem) =>
						cartItem.title === item.title
				)
			) {
				let updatedCart = cart;
				updatedCart.find(
					(cartItemLocal) =>
						cartItemLocal.title === item.title
				).quantity += quantityBox;
				setCart([...updatedCart]);
			}
			// If the item doesn't exist, add it to the cart with the specified quantity
			else {
				const updatedCart = {
					...item,
					quantity,
				};
				setCart([...cart, updatedCart]);
			}
		}
		console.log("cart ====> ", cart);
	};

	return (
		<div className="wrapper">
			<div className="product">
				<img
					className="product__img"
					src={product.img}
					alt="snowboard"
				/>
				<div className="product__content">
					<p className="product__title">
						{product.title}
					</p>
					<p className="product__price">
						${product.price}
					</p>
					<p className="product__description">
						Product Short Description senectus et netus et
						malesuada fames ac turpis egestas. Vesitbulum
						tortor quam, feugiat vitae, ultricies eget,
						tempor sit amet, ante. Donec eu libero sit amet
						quam egestas semper. Aenean ultricies mi vitae
						est. Mauris placerat eleifend.
						{/* {product.description} */}
					</p>
					<div className="product__change-quantity-container">
						<button
							className="product__change-quantity product__change-quantity--left pointer"
							onClick={() => decreaseQuantityToAdd()}
						>
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
					{/* <button onClick={() => getCartCurrentValue()}>
						Click
					</button> */}
					<button
						className="button pointer"
						onClick={() =>
							addItemToCart(product, quantityBox)
						}
					>
						Add to cart
					</button>
				</div>
			</div>
		</div>
	);
};
