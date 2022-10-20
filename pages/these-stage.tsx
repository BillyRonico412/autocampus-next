import { InferGetServerSidePropsType } from "next";
import { FaGraduationCap } from "react-icons/fa";
import ArticleGenericFilter from "../components/Article/ArticleGenericFilter";
import ArticleGenericSearch from "../components/Article/ArticleGenericSearch";
import { ArticleEnum } from "../components/Article/utils";
import Layout1 from "../components/Common/Layout1";
import { getServerSidePropsApi } from "../utils/variables";

export type TheseStageByApi = {
    abstract: string;
    annee: number;
    category: string;
    lienExterne: string;
    titre: string;
    theseStageProjet: [
        {
            projet_id: {
                titre: string;
            };
        }
    ];
    theseStageMotcle: [
        {
            motcle_id: {
                libelle: string;
            };
        },
        {
            motcle_id: {
                libelle: string;
            };
        }
    ];
    theseStageAuteur: {
        nom: string;
        prenom: string;
    };
};

export const getServerSideProps = getServerSidePropsApi<TheseStageByApi>(
    "/items/theseStage?filter[status][_eq]=published&fields=*,theseStageProjet.projet_id.titre,theseStageProjet.projet_id.id,theseStageMotcle.motcle_id.libelle,theseStageAuteur.nom,theseStageAuteur.prenom"
);

const TheseStage = (
    props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
    const filArianes = [
        {
            text: "Accueil",
            link: "/",
        },
        {
            text: "Thèses et stages",
            link: "/these-stage",
        },
    ];
    return (
        <Layout1
            filArianes={filArianes}
            text1="Thèses et"
            text2="stages"
            icons={<FaGraduationCap className="text-3xl md:text-6xl" />}
            title="Thèses et stages"
        >
            <div className="md:hidden">
                <ArticleGenericSearch type={ArticleEnum.TheseStage} />
            </div>
            <div className="mt-8 flex gap-x-8">
                <div className="flex-grow">
                    <ArticleGenericFilter
                        articles={props.items.map((item) => ({
                            titre: item.titre,
                            abstract: item.abstract,
                            annee: item.annee,
                            category: item.category,
                            lien: item.lienExterne,
                            auteurs: [
                                item.theseStageAuteur.prenom +
                                    " " +
                                    item.theseStageAuteur.nom,
                            ],
                            motcles: item.theseStageMotcle.map(
                                (motcle) => motcle.motcle_id.libelle
                            ),
                            projets: item.theseStageProjet.map(
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
    );
};

export default TheseStage;
