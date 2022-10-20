import { InferGetServerSidePropsType } from "next";
import { FaBookReader } from "react-icons/fa";
import ArticleGenericFilter from "../components/Article/ArticleGenericFilter";
import ArticleGenericSearch from "../components/Article/ArticleGenericSearch";
import { ArticleEnum } from "../components/Article/utils";
import Layout1 from "../components/Common/Layout1";
import { getServerSidePropsApi } from "../utils/variables";

export type PublicationsScientifiquesByApi = {
    titre: string;
    annee: number;
    category: string;
    abstract: string;
    lien: string;
    publicationScientifiqueAuteur: {
        auteur_id: {
            nom: string;
            prenom: string;
        };
    }[];
    publicationScientifiqueMotcle: {
        motcle_id: {
            libelle: string;
        };
    }[];

    publicationScientifiqueProjet: {
        projet_id: {
            titre: string;
            id: number;
        };
    }[];
};

export const getServerSideProps =
    getServerSidePropsApi<PublicationsScientifiquesByApi>(
        "/items/publicationScientifique?filter[status][_eq]=published&fields=*,publicationScientifiqueProjet.projet_id.titre,publicationScientifiqueProjet.projet_id.id,publicationScientifiqueMotcle.motcle_id.libelle,publicationScientifiqueAuteur.auteur_id.nom,publicationScientifiqueAuteur.auteur_id.prenom"
    );

const PublicationsScientifiques = (
    props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
    const filArianes = [
        {
            text: "Accueil",
            link: "/",
        },
        {
            text: "Publications scientifiques",
            link: "/publications-scientifiques",
        },
    ];

    return (
        <>
            <Layout1
                filArianes={filArianes}
                text1="Publications"
                text2="Scientifiques"
                title="Publications scientifiques"
                icons={<FaBookReader className="text-3xl md:text-6xl" />}
            >
                <div className="md:hidden">
                    <ArticleGenericSearch
                        type={ArticleEnum.PublicationScientifique}
                    />
                </div>
                <div className="mt-8 flex gap-x-8">
                    <div className="flex-grow">
                        <ArticleGenericFilter
                            articles={props.items.map((item) => ({
                                titre: item.titre,
                                abstract: item.abstract,
                                annee: item.annee,
                                category: item.category,
                                lien: item.lien,
                                auteurs: item.publicationScientifiqueAuteur.map(
                                    (auteur) =>
                                        auteur.auteur_id.prenom +
                                        " " +
                                        auteur.auteur_id.nom
                                ),
                                motcles: item.publicationScientifiqueMotcle.map(
                                    (motcle) => motcle.motcle_id.libelle
                                ),
                                projets: item.publicationScientifiqueProjet.map(
                                    (projet) => projet.projet_id.titre
                                ),
                            }))}
                            type={ArticleEnum.PublicationScientifique}
                        />
                    </div>
                    <div className="hidden md:block md:w-[400px]">
                        <ArticleGenericSearch
                            type={ArticleEnum.PublicationScientifique}
                        />
                    </div>
                </div>
            </Layout1>
        </>
    );
};

export default PublicationsScientifiques;
