import { createStore } from "redux";
import {
	DECREASE,
	INCREASE,
	REMOVE,
	GET_TOTAL,
	GET_AMOUNT,
	CLEAR_CART,
} from "./ActionTypes";

const initalState = {
	count: 0,
};
export const reducer = (state, action) => {
	switch (action.type) {
		case DECREASE:
			return { count: state.count - 1 };
		case INCREASE:
			return { count: state.count + 1 };
		case CLEAR_CART:
			return { count: 0 };
		default:
			return state;
	}
};
export const store = createStore(reducer, initalState);
