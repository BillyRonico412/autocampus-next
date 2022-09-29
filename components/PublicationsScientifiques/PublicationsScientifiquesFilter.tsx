import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { PublicationsScientifiquesInterface } from "../../pages/publications-scientifiques";
import { RootState } from "../../utils/store";
import PublicationsScientifiquesItems from "./PublicationsScientifiquesItems";
import { publicationsScientifiquesActions } from "./publicationsScientifiquesStore";

type Props = {
    publicationsScientifiques: PublicationsScientifiquesInterface[];
};

const PublicationsScientifiquesFilter = (props: Props) => {
    const dispatch = useDispatch();
    const dateFilter = useSelector(
        (state: RootState) => state.publicationsScientifique.dateFilter
    );
    const projetFilter = useSelector(
        (state: RootState) => state.publicationsScientifique.projetFilter
    );
    const categorieFilter = useSelector(
        (state: RootState) => state.publicationsScientifique.categorieFilter
    );
    const auteurFilter = useSelector(
        (state: RootState) => state.publicationsScientifique.auteurFilter
    );
    useEffect(() => {
        const dateList: number[] = [];
        const projetList: string[] = [];
        const categorieList: string[] = [];
        const auteurList: string[] = [];
        props.publicationsScientifiques.forEach((pub) => {
            if (!dateList.includes(pub.annee)) {
                dateList.push(pub.annee);
            }
            pub.publicationScientifiqueProjet.forEach((projet) => {
                if (!projetList.includes(projet.projet_id.titre)) {
                    projetList.push(projet.projet_id.titre);
                }
            });
            if (!categorieList.includes(pub.category)) {
                categorieList.push(pub.category);
            }
            pub.publicationScientifiqueAuteur.forEach((auteur) => {
                if (
                    !auteurList.includes(
                        auteur.auteur_id.prenom + " " + auteur.auteur_id.nom
                    )
                ) {
                    auteurList.push(
                        auteur.auteur_id.prenom + " " + auteur.auteur_id.nom
                    );
                }
            });
        });
        dispatch(publicationsScientifiquesActions.setDateList(dateList));
        dispatch(publicationsScientifiquesActions.setProjetList(projetList));
        dispatch(
            publicationsScientifiquesActions.setCategorieList(categorieList)
        );
        dispatch(publicationsScientifiquesActions.setAuteurList(auteurList));
    }, []);

    const propsWithFilter = props.publicationsScientifiques.filter(
        (pub) =>
            (dateFilter === null || dateFilter === pub.annee) &&
            (projetFilter === null ||
                pub.publicationScientifiqueProjet.some(
                    (projet) => projet.projet_id.titre === projetFilter
                )) &&
            (categorieFilter === null || categorieFilter === pub.category) &&
            (auteurFilter === null ||
                pub.publicationScientifiqueAuteur.some(
                    (auteur) =>
                        auteur.auteur_id.prenom + " " + auteur.auteur_id.nom ===
                        auteurFilter
                ))
    );

    return (
        <>
            <PublicationsScientifiquesItems
                publicationsScientifiques={propsWithFilter}
            />
        </>
    );
};

export default PublicationsScientifiquesFilter;
