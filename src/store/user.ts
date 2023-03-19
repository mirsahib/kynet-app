import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {};

const initialState: InitialStateType = {
	userList: [
		{
			product: null,
			count: 0,
			productPrice: 0,
		},
	],
	totalPrice: 0,
	totalItem: 0,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		addItem() {},
	},
});

export const { addItem } = userSlice.actions;
export default userSlice.reducer;
