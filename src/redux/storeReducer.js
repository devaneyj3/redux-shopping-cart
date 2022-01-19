import { createStore } from "redux";
// items
import cartItems from "../cart-items";
import { REMOVE, GET_TOTAL, TOGGLE_AMOUNT, CLEAR_CART } from "./ActionTypes";

import React from "react";
import { Provider } from "react-redux";
const initalState = {
	cart: cartItems,
	total: 0,
	amount: 0,
};
const reducer = (state, action) => {
	switch (action.type) {
		case CLEAR_CART:
			return {
				...state,
				cart: [],
				total: 0,
				amount: 0,
			};

		case TOGGLE_AMOUNT: {
			const { op, id } = action;
			let tempCart = state.cart.map((item) => {
				if (item.id === id) {
					if (op === "inc") {
						item = { ...item, amount: item.amount + 1 };
					}
					if (op === "dec") {
						item = { ...item, amount: item.amount - 1 };
					}
				}
				return item;
			});
			return { ...state, cart: tempCart };
		}
		case REMOVE:
			return {
				...state,
				cart: state.cart.filter((item) => item.id !== action.payload),
			};
		case GET_TOTAL: {
			let { total, amount } = state.cart.reduce(
				(cartTotal, cartItem) => {
					const { price, amount } = cartItem;
					let itemTotal = price * amount;
					cartTotal.total += itemTotal;
					cartTotal.amount += amount;
					return cartTotal;
				},
				{ total: 0, amount: 0 }
			);
			total = parseFloat(total.toFixed(2));
			return {
				...state,
				total,
				amount,
			};
		}
		default:
			return state;
	}
};
const store = createStore(reducer, initalState);

export const ReduxProvider = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};
