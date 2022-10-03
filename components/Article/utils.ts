import { useSelector } from "react-redux";
import { RootState } from "../../utils/store";
import { publicationsScientifiquesActions } from "../PublicationsScientifiques/publicationsScientifiquesStore";
import { theseStageActions } from "../TheseStage/theseStateStore";

export enum ArticleEnum {
    PublicationScientifique,
    TheseStage,
}

export type ArticleType = {
    titre: string;
    annee: number;
    category: string;
    abstract: string;
    lien: string;
    auteurs: string[];
    motcles: string[];
    projets: string[];
};

export const useArticleValues = (type: ArticleEnum) => {
    switch (type) {
        case ArticleEnum.PublicationScientifique:
            return {
                dateList: useSelector(
                    (state: RootState) =>
                        state.publicationsScientifique.dateList
                ),
                categorieList: useSelector(
                    (state: RootState) =>
                        state.publicationsScientifique.categorieList
                ),
                projetList: useSelector(
                    (state: RootState) =>
                        state.publicationsScientifique.projetList
                ),
                auteurList: useSelector(
                    (state: RootState) =>
                        state.publicationsScientifique.auteurList
                ),
                dateFilter: useSelector(
                    (state: RootState) =>
                        state.publicationsScientifique.dateFilter
                ),
                categorieFilter: useSelector(
                    (state: RootState) =>
                        state.publicationsScientifique.categorieFilter
                ),
                projetFilter: useSelector(
                    (state: RootState) =>
                        state.publicationsScientifique.projetFilter
                ),
                auteurFilter: useSelector(
                    (state: RootState) =>
                        state.publicationsScientifique.auteurFilter
                ),
                actions: publicationsScientifiquesActions,
            };
        case ArticleEnum.TheseStage:
            return {
                dateList: useSelector(
                    (state: RootState) => state.theseStage.dateList
                ),
                categorieList: useSelector(
                    (state: RootState) => state.theseStage.categorieList
                ),
                projetList: useSelector(
                    (state: RootState) => state.theseStage.projetList
                ),
                auteurList: useSelector(
                    (state: RootState) => state.theseStage.auteurList
                ),
                dateFilter: useSelector(
                    (state: RootState) => state.theseStage.dateFilter
                ),
                categorieFilter: useSelector(
                    (state: RootState) => state.theseStage.categorieFilter
                ),
                projetFilter: useSelector(
                    (state: RootState) => state.theseStage.projetFilter
                ),
                auteurFilter: useSelector(
                    (state: RootState) => state.theseStage.auteurFilter
                ),
                actions: theseStageActions,
            };
    }
};
