import { InferGetStaticPropsType } from "next";
import { FaBookReader } from "react-icons/fa";
import Layout1 from "../components/Common/Layout1";
import PublicationsScientifiquesFilter from "../components/PublicationsScientifiques/PublicationsScientifiquesFilter";
import PublicationsScientifiquesSearch from "../components/PublicationsScientifiques/PublicationsScientifiquesSearch";
import { getStaticPropsApi } from "../utils/variables";

export type PublicationsScientifiquesInterface = {
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

export const getStaticProps = getStaticPropsApi<PublicationsScientifiquesInterface>(
    "/items/publicationScientifique?fields=*,publicationScientifiqueProjet.projet_id.titre,publicationScientifiqueProjet.projet_id.id,publicationScientifiqueMotcle.motcle_id.libelle,publicationScientifiqueAuteur.auteur_id.nom,publicationScientifiqueAuteur.auteur_id.prenom"
);

const PublicationsScientifiques = (
    props: InferGetStaticPropsType<typeof getStaticProps>
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
                    <PublicationsScientifiquesSearch />
                </div>
                <div className="mt-8 flex gap-x-8">
                    <div className="flex-grow">
                        <PublicationsScientifiquesFilter publicationsScientifiques={props.items}/>
                    </div>
                    <div className="hidden md:block md:w-[400px]">
                        <PublicationsScientifiquesSearch />
                    </div>
                </div>
            </Layout1>
        </>
    );
};

export default PublicationsScientifiques;
