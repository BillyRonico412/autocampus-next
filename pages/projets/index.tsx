import { InferGetStaticPropsType } from "next";
import { FaProjectDiagram } from "react-icons/fa";
import { useSelector } from "react-redux";
import Layout1 from "../../components/Common/Layout1";
import ProjetItems from "../../components/Projets/ProjetItems";
import ProjetList from "../../components/Projets/ProjetList";
import ProjetSearch from "../../components/Projets/ProjetSearch";
import { FilArianeInterface } from "../../utils/interface";
import { RootState } from "../../utils/store";
import { getStaticPropsApi } from "../../utils/variables";

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
    contenu: string
};

export const getStaticProps = getStaticPropsApi<ProjetProps>(
    "/items/projet?filter[status][_eq]=published&fields=*,projetPlateforme.nom,projetMotcle.*.libelle"
);

const index = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const anneeFilter = useSelector(
        (state: RootState) => state.projet.anneeFilter
    );
    const filArianes: FilArianeInterface[] = [
        {
            text: "Accueil",
            link: "/",
        },
        {
            text: "Projets",
            link: "projets",
        },
    ];
    const annees = props.items
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
                        projets={props.items}
                        annees={anneeFilter === null ? annees : [anneeFilter]}
                    />
                </div>
                <div className="hidden md:flex w-[400px] flex-col gap-y-8">
                    <ProjetSearch annees={annees} />
                    <ProjetList
                        projets={props.items}
                        annees={anneeFilter === null ? annees : [anneeFilter]}
                    />
                </div>
            </div>
        </Layout1>
    );
};

export default index;
