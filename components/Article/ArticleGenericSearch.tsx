import { useDispatch } from "react-redux";
import ArticleSearch from "./ArticleSearch";
import { ArticleEnum, useArticleValues } from "./utils";

type Props = {
    type: ArticleEnum;
};

const ArticleGenericSearch = (props: Props) => {
    const { dateList, categorieList, projetList, auteurList, actions } =
        useArticleValues(props.type);
    const dispatch = useDispatch();
    return (
        <div>
            <ArticleSearch
                anneeValues={dateList}
                anneeOnChange={(s: string) =>
                    dispatch(
                        actions.setDateFilter(s === "0" ? null : Number(s))
                    )
                }
                categorieValues={categorieList}
                categorieOnChange={(s: string) =>
                    dispatch(actions.setCategorieFilter(s === "0" ? null : s))
                }
                projetValues={projetList}
                projetOnChange={(s: string) =>
                    dispatch(actions.setProjetFilter(s === "0" ? null : s))
                }
                auteurValues={auteurList}
                auteurOnChange={(s: string) =>
                    dispatch(actions.setAuteurFilter(s === "0" ? null : s))
                }
            />
        </div>
    );
};

export default ArticleGenericSearch;
