import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface NavbarInterface {
    indexMenuItemOpened: number | null;
    isShow: boolean;
}

const initialState: NavbarInterface = {
	indexMenuItemOpened: null,
	isShow: false,
};

export const navbarSlice = createSlice({
	name: "navbar",
	initialState,
	reducers: {
		setIndexMenuItemOpened(state, action: PayloadAction<number | null>) {
			state.indexMenuItemOpened = action.payload;
		},
		setIsShow(state, action: PayloadAction<boolean>) {
			state.isShow = action.payload;
		},
	},
});

export const navbarActions = navbarSlice.actions;

export const navbarReducer = navbarSlice.reducer;