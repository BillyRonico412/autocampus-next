import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PublicationsScientifiquesProps {
    dateList: number[];
    projetList: string[];
    categorieList: string[];
    auteurList: string[];
    dateFilter: number | null;
    projetFilter: string | null;
    categorieFilter: string | null;
    auteurFilter: string | null;
}

const initialState: PublicationsScientifiquesProps = {
    dateFilter: null,
    projetFilter: null,
    categorieFilter: null,
    auteurFilter: null,
    dateList: [],
    projetList: [],
    categorieList: [],
    auteurList: []
};

export const publicationsScientifiquesSlice = createSlice({
    name: "publicationsScientifiques",
    initialState,
    reducers: {
        setDateList(state, action: PayloadAction<number[]>) {
            state.dateList = action.payload;
        },
        setProjetList(state, action: PayloadAction<string[]>) {
            state.projetList = action.payload;
        },
        setCategorieList(state, action: PayloadAction<string[]>) {
            state.categorieList = action.payload;
        },
        setAuteurList(state, action: PayloadAction<string[]>) {
            state.auteurList = action.payload;
        },
        setDateFilter(state, action: PayloadAction<number | null>) {
            state.dateFilter = action.payload;
        },
        setProjetFilter(state, action: PayloadAction<string | null>) {
            state.projetFilter = action.payload;
        },
        setCategorieFilter(state, action: PayloadAction<string | null>) {
            state.categorieFilter = action.payload;
        },
        setAuteurFilter(state, action: PayloadAction<string | null>) {
            state.auteurFilter = action.payload;
        },
    },
});

export const publicationsScientifiquesActions =
    publicationsScientifiquesSlice.actions;

export const publicationsScientifiquesReducer =
    publicationsScientifiquesSlice.reducer;
