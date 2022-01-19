import { createStore } from "redux";
// items
import cartItems from "../cart-items";
import {
	DECREASE,
	INCREASE,
	REMOVE,
	GET_TOTAL,
	TOGGLE_AMOUNT,
	CLEAR_CART,
} from "./ActionTypes";

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
		case DECREASE: {
			const { id, amount } = action.payload;
			let foundItem = state.cart.find((item) => item.id === id);

			if (amount === 1) {
				return {
					...state,
					cart: state.cart.filter((item) => item.id !== action.payload.id),
				};
			} else {
				foundItem.amount = foundItem.amount - 1;

				return {
					...state,
					cart: [...state.cart],
				};
			}
		}
		case INCREASE: {
			const id = action.payload;
			let foundItem = state.cart.find((item) => item.id === id);
			foundItem.amount = foundItem.amount + 1;
			return { ...state, cart: [...state.cart] };
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
		case TOGGLE_AMOUNT:
			return {
				...state,
				cart: state.cart.filter((item) => item.id !== action.payload),
			};
		default:
			return state;
	}
};
const store = createStore(reducer, initalState);

export const ReduxProvider = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};
