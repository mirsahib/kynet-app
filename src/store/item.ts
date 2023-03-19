import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {};

const initialState: InitialStateType = {
	itemList: [
		{
			product: null,
			count: 0,
			productPrice: 0,
		},
	],
	totalPrice: 0,
	totalItem: 0,
};

const itemSlice = createSlice({
	name: "item",
	initialState,
	reducers: {
		addItem() {},
	},
});

export const { addItem } = itemSlice.actions;
export default itemSlice.reducer;
