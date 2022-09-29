import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/store";
import ArticleSearch from "../Article/ArticleSearch";
import { publicationsScientifiquesActions } from "./publicationsScientifiquesStore";

const PublicationsScientifiquesSearch = () => {
    const dateList = useSelector(
        (state: RootState) => state.publicationsScientifique.dateList
    );
    const categorieList = useSelector(
        (state: RootState) => state.publicationsScientifique.categorieList
    );
    const projetList = useSelector(
        (state: RootState) => state.publicationsScientifique.projetList
    );
    const auteurList = useSelector(
        (state: RootState) => state.publicationsScientifique.auteurList
    );
    const dispatch = useDispatch();
    return (
        <div>
            <ArticleSearch
                anneeValues={dateList}
                anneeOnChange={(s: string) =>
                    dispatch(
                        publicationsScientifiquesActions.setDateFilter(
                            s === "0" ? null : Number(s)
                        )
                    )
                }
                categorieValues={categorieList}
                categorieOnChange={(s: string) =>
                    dispatch(
                        publicationsScientifiquesActions.setCategorieFilter(
                            s === "0" ? null : s
                        )
                    )
                }
                projetValues={projetList}
                projetOnChange={(s: string) =>
                    dispatch(
                        publicationsScientifiquesActions.setProjetFilter(
                            s === "0" ? null : s
                        )
                    )
                }
                auteurValues={auteurList}
                auteurOnChange={(s: string) =>
                    dispatch(
                        publicationsScientifiquesActions.setAuteurFilter(
                            s === "0" ? null : s
                        )
                    )
                }
            />
        </div>
    );
};

export default PublicationsScientifiquesSearch;
