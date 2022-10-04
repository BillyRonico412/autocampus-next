import {
    GetServerSideProps, InferGetServerSidePropsType
} from "next";
import { GiProgression } from "react-icons/gi";
import Content from "../../components/Common/Content";
import Layout2 from "../../components/Common/Layout2";
import { FilArianeInterface } from "../../utils/interface";
import { getElementInApi } from "../../utils/variables";

type NotreDemarcheProps = {
    notre_demarche: string;
};

export const getServerSideProps: GetServerSideProps<{
    item: NotreDemarcheProps;
}> = async () => {
    const item = await getElementInApi<NotreDemarcheProps>(
        "/items/texte?fields=notre_demarche"
    );
    if (item.data === null) {
        return {
            notFound: true,
        };
    }
    return {
        props: {
            item: item.data,
        },
    };
};

const NotreDemarche = (
    props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
    const filArianes: FilArianeInterface[] = [
        {
            text: "Accueil",
            link: "/",
        },
        {
            text: "Notre Démarche",
            link: "/notre-demarche",
        },
    ];
    return (
        <Layout2
            filArianes={filArianes}
            icons={<GiProgression className="text-3xl md:text-6xl" />}
            title="Notre démarche"
        >
            <Content content={props.item.notre_demarche} />
        </Layout2>
    );
};

export default NotreDemarche;
