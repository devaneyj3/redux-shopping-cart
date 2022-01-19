import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { CLEAR_CART, GET_TOTAL } from "../redux/ActionTypes";

import { useSelector, useDispatch } from "react-redux";
const CartContainer = () => {
	const { cart, total } = useSelector((state) => state);
	console.log(total);
	const dispatch = useDispatch();
	useEffect(() => {
		console.log("running get total");
		dispatch({ type: GET_TOTAL });
	}, [dispatch, cart]);

	if (cart.length === 0) {
		return (
			<section className="cart">
				{/* cart header */}
				<header>
					<h2>your bag</h2>
					<h4 className="empty-cart">is currently empty</h4>
				</header>
			</section>
		);
	}
	return (
		<section className="cart">
			{/* cart header */}
			<header>
				<h2>your bag</h2>
			</header>
			{/* cart items */}
			<article>
				{cart.map((item) => {
					return <CartItem key={item.id} {...item} />;
				})}
			</article>
			{/* cart footer */}
			<footer>
				<hr />
				<div className="cart-total">
					<h4>
						total <span>${total}</span>
					</h4>
				</div>
				<button
					onClick={() => dispatch({ type: CLEAR_CART })}
					className="btn clear-btn">
					clear cart
				</button>
			</footer>
		</section>
	);
};

export default CartContainer;
