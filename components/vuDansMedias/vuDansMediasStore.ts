import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface VuDansLesMediasState {
    projetList: string[];
    projetFilter: string | null;
}

const initialState: VuDansLesMediasState = {
    projetFilter: null,
    projetList: [],
};

export const vuDansLesMediasSlice = createSlice({
    name: "vuDansLesMedias",
    initialState,
    reducers: {
        setProjetList(state, action: PayloadAction<string[]>) {
            state.projetList = action.payload;
        },
        setProjetFilter(state, action: PayloadAction<string | null>) {
            state.projetFilter = action.payload;
        },
    },
});

export const vuDansLesMediasActions = vuDansLesMediasSlice.actions;

export const vuDansLesMediasReducer = vuDansLesMediasSlice.reducer;
