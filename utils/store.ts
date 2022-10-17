import { configureStore } from "@reduxjs/toolkit";
import { navbarReducer } from "../components/Main/Navbar/navbarStore";
import { projetReducer } from "../components/Projets/projetStore";
import { publicationsScientifiquesReducer } from "../components/PublicationsScientifiques/publicationsScientifiquesStore";
import { theseStageReducer } from "../components/TheseStage/theseStateStore";
import { evenementsReducer } from "../components/Evenements/evenementsStore";
import { vuDansLesMediasReducer } from "../components/vuDansMedias/vuDansMediasStore";

export const store = configureStore({
    reducer: {
        navbar: navbarReducer,
        projet: projetReducer,
        publicationsScientifique: publicationsScientifiquesReducer,
        theseStage: theseStageReducer,
        evenements: evenementsReducer,
        vuDansLesMedias: vuDansLesMediasReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
