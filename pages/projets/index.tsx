import { InferGetServerSidePropsType } from "next";
import { FaProjectDiagram } from "react-icons/fa";
import { useSelector } from "react-redux";
import Layout1 from "../../components/Common/Layout1";
import ProjetItems from "../../components/Projets/ProjetItems";
import ProjetList from "../../components/Projets/ProjetList";
import ProjetSearch from "../../components/Projets/ProjetSearch";
import { FilArianeInterface } from "../../utils/interface";
import { RootState } from "../../utils/store";
import { getServerSidePropsApi } from "../../utils/variables";

export type ProjetProps = {
    id: number;
    titre: string;
    annee: number;
    description: string;
    image: string;
    projetPlateforme: {
        nom: string;
    };
    projetMotcle: {
        motcle_id: {
            libelle: string;
        };
    }[];
    projetPartenaire: {
        partenaire_id: {
            logo: string;
        };
    }[];
    contenu: string;
};

export const getServerSideProps = getServerSidePropsApi<ProjetProps>(
    "/items/projet?filter[status][_eq]=published&fields=*,projetPlateforme.nom,projetMotcle.*.libelle"
);

const index = (
    props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
    const search = useSelector((state: RootState) => state.projet.search);
    const anneeFilter = useSelector(
        (state: RootState) => state.projet.anneeFilter
    );
    const filArianes: FilArianeInterface[] = [
        {
            text: "Accueil",
            link: "/",
        },
        {
            text: "Nos",
            link: "projets",
        },
    ];

    const projetFilterBySearch = props.items.filter((item) =>
        new RegExp(search, "i").test(item.titre)
    );

    const annees = projetFilterBySearch
        .map((projet) => projet.annee)
        .filter((annee, i, arr) => !arr.includes(annee, i + 1))
        .sort((a1, a2) => a2 - a1);

    return (
        <Layout1
            title="Projets"
            text1="Nos"
            text2="Projets"
            icons={<FaProjectDiagram className="text-3xl md:text-6xl" />}
            filArianes={filArianes}
        >
            <div className="md:hidden">
                <ProjetSearch annees={annees} />
            </div>
            <div className="flex">
                <div className="flex-grow">
                    <ProjetItems
                        projets={projetFilterBySearch}
                        annees={anneeFilter === null ? annees : [anneeFilter]}
                    />
                </div>
                <div className="hidden md:flex w-[400px] flex-col gap-y-8">
                    <ProjetSearch annees={annees} />
                    <ProjetList
                        projets={projetFilterBySearch}
                        annees={anneeFilter === null ? annees : [anneeFilter]}
                    />
                </div>
            </div>
        </Layout1>
    );
};

export default index;
