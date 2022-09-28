import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ProjetInterface {
    anneeFilter: number | null;
    anneeCloses: number[];
    search: string;
}

const initialState: ProjetInterface = {
    anneeFilter: null,
    anneeCloses: [],
    search: "",
};

export const projetSlice = createSlice({
    name: "projet",
    initialState,
    reducers: {
        setAnneeFilter(state, action: PayloadAction<number | null>) {
            state.anneeFilter = action.payload;
        },
        setAnneeCloses(state, action: PayloadAction<number[]>) {
            state.anneeCloses = action.payload;
        },
        setSearch(state, action: PayloadAction<string>) {
            state.search = action.payload;
        },
    },
});

export const projetActions = projetSlice.actions;

export const projetReducer = projetSlice.reducer;
