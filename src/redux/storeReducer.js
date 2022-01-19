import { createStore } from "redux";
// items
import cartItems from "../cart-items";
import {
	DECREASE,
	INCREASE,
	REMOVE,
	GET_TOTAL,
	GET_AMOUNT,
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
		case DECREASE:
			console.log("decreasing");
			return {
				...state,
				cart: [],
			};
		case INCREASE:
			console.log("increasing");
			return { ...state };
		case REMOVE:
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
