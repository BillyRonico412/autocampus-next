import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ArticleGenericItems from "./ArticleGenericItems";
import { ArticleEnum, ArticleType, useArticleValues } from "./utils";

type Props = {
    type: ArticleEnum;
    articles: ArticleType[];
};

const ArticleGenericFilter = (props: Props) => {
    const dispatch = useDispatch();
    const { dateFilter, categorieFilter, projetFilter, auteurFilter, actions } =
        useArticleValues(props.type);
    useEffect(() => {
        const dateList: number[] = [];
        const projetList: string[] = [];
        const categorieList: string[] = [];
        const auteurList: string[] = [];
        props.articles.forEach((article) => {
            if (!dateList.includes(article.annee)) {
                dateList.push(article.annee);
            }
            article.projets.forEach((projet) => {
                if (!projetList.includes(projet)) {
                    projetList.push(projet);
                }
            });
            if (!categorieList.includes(article.category)) {
                categorieList.push(article.category);
            }
            article.auteurs.forEach((auteur) => {
                if (!auteurList.includes(auteur)) {
                    auteurList.push(auteur);
                }
            });
        });
        dispatch(actions.setDateList(dateList));
        dispatch(actions.setProjetList(projetList));
        dispatch(actions.setCategorieList(categorieList));
        dispatch(actions.setAuteurList(auteurList));
    }, []);

    const propsWithFilter = props.articles.filter(
        (article) =>
            (dateFilter === null || dateFilter === article.annee) &&
            (projetFilter === null ||
                article.projets.some((projet) => projet === projetFilter)) &&
            (categorieFilter === null ||
                categorieFilter === article.category) &&
            (auteurFilter === null ||
                article.auteurs.some((auteur) => auteur === auteurFilter))
    );

    return (
        <>
            <ArticleGenericItems articles={propsWithFilter} type={props.type} />
        </>
    );
};

export default ArticleGenericFilter;
