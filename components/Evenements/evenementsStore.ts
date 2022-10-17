import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface EvenementState {
    dateList: number[];
    projetList: string[];
    dateFilter: number | null;
    projetFilter: string | null;
}

const initialState: EvenementState = {
    dateFilter: null,
    projetFilter: null,
    dateList: [],
    projetList: [],
};

export const evenementsSlice = createSlice({
    name: "evenements",
    initialState,
    reducers: {
        setDateList(state, action: PayloadAction<number[]>) {
            state.dateList = action.payload;
        },
        setProjetList(state, action: PayloadAction<string[]>) {
            state.projetList = action.payload;
        },
        setDateFilter(state, action: PayloadAction<number | null>) {
            state.dateFilter = action.payload;
        },
        setProjetFilter(state, action: PayloadAction<string | null>) {
            state.projetFilter = action.payload;
        },
    },
});

export const evenementsActions = evenementsSlice.actions;

export const evenementsReducer = evenementsSlice.reducer;
