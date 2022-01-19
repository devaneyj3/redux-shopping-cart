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
		default:
			return state;
	}
};
const store = createStore(reducer, initalState);

export const ReduxProvider = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};
