import { GetStaticProps, InferGetStaticPropsType } from "next";
import { FaLock } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import Content from "../components/Common/Content";
import Layout2 from "../components/Common/Layout2";
import { FilArianeInterface } from "../utils/interface";
import { getElementInApi } from "../utils/variables";

type ProtectionDonneeProps = {
    protectionDonnee: string;
};

export const getStaticProps: GetStaticProps<{
    item: ProtectionDonneeProps;
}> = async () => {
    const item = await getElementInApi<ProtectionDonneeProps>(
        "/items/texte?fields=protectionDonnee"
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

const ProtectionDonnee = (
    props: InferGetStaticPropsType<typeof getStaticProps>
) => {
    const filArianes: FilArianeInterface[] = [
        {
            text: "Accueil",
            link: "/",
        },
        {
            text: "Protection des données",
            link: "/protection-donnee",
        },
    ];
    return (
        <Layout2
            filArianes={filArianes}
            icons={<FaLock className="text-3xl md:text-6xl" />}
            title="Protection des données"
        >
            <Content content={props.item.protectionDonnee} />
        </Layout2>
    );
};

export default ProtectionDonnee;
