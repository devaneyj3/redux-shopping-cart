import { TOGGLE_AMOUNT, REMOVE, CLEAR_CART, GET_TOTAL } from "./ActionTypes";

export const remove = (id) => {
	return { type: REMOVE, payload: id };
};

export const toggle = (id, op) => {
	return { type: TOGGLE_AMOUNT, id: id, op: op };
};

export const clearCart = () => {
	return { type: CLEAR_CART };
};
export const getTotal = () => {
	return { type: GET_TOTAL };
};
