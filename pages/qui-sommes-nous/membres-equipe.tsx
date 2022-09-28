import { InferGetStaticPropsType } from "next";
import { FaPeopleArrows } from "react-icons/fa";
import Layout1 from "../../components/Common/Layout1";
import MembreItems from "../../components/Membre/MembreItems";
import { FilArianeInterface } from "../../utils/interface";
import { getStaticPropsApi } from "../../utils/variables";

export type MembreProps = {
    nom: string;
    prenom: string;
    image: string;
    titre: string;
};

export const getStaticProps = getStaticPropsApi<MembreProps>("/items/membre");

const membresEquipe = (
    props: InferGetStaticPropsType<typeof getStaticProps>
) => {
    const filArianes: FilArianeInterface[] = [
        {
            text: "Accueil",
            link: "/",
        },
        {
            text: "Membres de l'équipe",
            link: "/qui-sommes-nous/membres-equipe",
        },
    ];

    return (
        <>
            <Layout1
                title="Membres de l'équipe"
                text1="Membres de"
                text2="l'équipe"
                filArianes={filArianes}
                icons={<FaPeopleArrows className="text-3xl md:text-6xl" />}
            >
                <MembreItems membres={props.items} />
            </Layout1>
        </>
    );
};

export default membresEquipe;
