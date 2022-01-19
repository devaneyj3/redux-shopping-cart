import { createStore } from "redux";
import { DECREASE, INCREASE, DELETE, REMOVE } from "./ActionTypes";

const initalState = {
	count: 0,
};
export const reducer = (state, action) => {
	switch (action.type) {
		case DECREASE:
			return { count: state.count - 1 };
		default:
			return state;
	}
};
export const store = createStore(reducer, initalState);
