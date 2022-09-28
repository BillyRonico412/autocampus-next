import { configureStore } from "@reduxjs/toolkit";
import { navbarReducer } from "../components/Main/Navbar/navbarStore";
import { projetReducer } from "../components/Projets/projetStore";

export const store = configureStore({
    reducer: {
        navbar: navbarReducer,
        projet: projetReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
