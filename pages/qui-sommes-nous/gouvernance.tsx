import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { FaPeopleArrows } from "react-icons/fa";
import Layout1 from "../../components/Common/Layout1";
import MembreItems from "../../components/Membre/MembreItems";
import { FilArianeInterface } from "../../utils/interface";
import { getElementInApi, getElementsInApi } from "../../utils/variables";
import Image from "next/image";
import Content from "../../components/Common/Content";

export type MembreProps = {
    nom: string;
    prenom: string;
    image: string;
    titre: string;
};

export const getServerSideProps: GetServerSideProps<{
    gouvernanceMembre: MembreProps[];
    gouvernanceContent: string;
}> = async () => {
    const gouvernanceMembre = await getElementsInApi<MembreProps>(
        "/items/membre?filter[gouvernance][_eq]=true"
    );
    const image = await getElementInApi<{ gouvernance: string }>(
        "/items/texte?fields=gouvernance"
    );
    if (!gouvernanceMembre.data || !image.data) {
        return {
            notFound: true,
        };
    }
    return {
        props: {
            gouvernanceMembre: gouvernanceMembre.data,
            gouvernanceContent: image.data.gouvernance,
        },
    };
};

const gouvernance = (
    props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
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
                <MembreItems membres={props.gouvernanceMembre} />
                <Content content={props.gouvernanceContent} />
            </Layout1>
        </>
    );
};

export default gouvernance;
