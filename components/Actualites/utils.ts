import { useSelector } from "react-redux";
import { RootState } from "../../utils/store";
import { evenementsActions } from "../Evenements/evenementsStore";
import { vuDansLesMediasActions } from "../vuDansMedias/vuDansMediasStore";

export enum ActualitesEnum {
    Evenements,
    VuDansLesMedias,
}

export type EvenementsType = {
    image: string;
    titre: string;
    description: string;
    date: string;
    projet: string;
    link?: {
        ext: boolean;
        target: string;
    };
};

export const useActualitesValues = (type: ActualitesEnum) => {
    switch (type) {
        case ActualitesEnum.Evenements:
            return {
                dateList: useSelector(
                    (state: RootState) => state.evenements.dateList
                ),
                projetList: useSelector(
                    (state: RootState) => state.evenements.projetList
                ),
                dateFilter: useSelector(
                    (state: RootState) => state.evenements.dateFilter
                ),
                projetFilter: useSelector(
                    (state: RootState) => state.evenements.projetFilter
                ),
                actions: evenementsActions,
            };
        case ActualitesEnum.VuDansLesMedias:
            return {
                dateList: useSelector(
                    (state: RootState) => state.vuDansLesMedias.dateList
                ),
                projetList: useSelector(
                    (state: RootState) => state.vuDansLesMedias.projetList
                ),
                dateFilter: useSelector(
                    (state: RootState) => state.vuDansLesMedias.dateFilter
                ),
                projetFilter: useSelector(
                    (state: RootState) => state.vuDansLesMedias.projetFilter
                ),
                actions: vuDansLesMediasActions,
            };
    }
};
