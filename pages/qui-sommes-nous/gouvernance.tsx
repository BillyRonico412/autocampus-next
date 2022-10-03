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

export const getStaticProps = getStaticPropsApi<MembreProps>(
    "/items/membre?filter[gouvernance][_eq]=true"
);

const gouvernance = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const filArianes: FilArianeInterface[] = [
        {
            text: "Accueil",
            link: "/",
        },
        {
            text: "Gouvernances",
            link: "/qui-sommes-nous/membres-equipe",
        },
    ];
    return (
        <>
            <Layout1
                title="Gouvernances"
                text1=""
                text2="Gouvernances"
                filArianes={filArianes}
                icons={<FaPeopleArrows className="text-3xl md:text-6xl" />}
            >
                <MembreItems membres={props.items} />
            </Layout1>
        </>
    );
};

export default gouvernance;
