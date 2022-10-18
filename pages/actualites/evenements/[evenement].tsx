import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { FaCalendarAlt } from "react-icons/fa";
import Content from "../../../components/Common/Content";
import Layout2 from "../../../components/Common/Layout2";
import { EvenementProps } from "../../../utils/interface";
import {
    dateString,
    getElementInApi,
    getImageApi,
} from "../../../utils/variables";
import Image from "next/image";

export const getServerSideProps: GetServerSideProps<{
    evenement: EvenementProps;
}> = async (context) => {
    if (!context.params) {
        return {
            notFound: true,
        };
    }
    const evenement = await getElementInApi<EvenementProps>(
        `/items/evenement/${context.params.evenement}?fields=*,evenementMotcle.motcle_id.libelle`
    );
    if (!evenement.data) {
        return {
            notFound: true,
        };
    }
    return {
        props: {
            evenement: evenement.data,
        },
    };
};

const Evenement = (
    props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
    const filArianes = [
        {
            text: "Accueil",
            link: "/",
        },
        {
            text: "Evenements",
            link: "/evenement",
        },
        {
            text: String(props.evenement.id),
            link: "/projets/" + props.evenement.id,
        },
    ];
    return (
        <>
            <Layout2
                title={props.evenement.titre}
                icons={<FaCalendarAlt className="text-6xl" />}
                filArianes={filArianes}
                motcles={props.evenement.evenementMotcle.map(
                    (motcle) => motcle.motcle_id.libelle
                )}
            >
                
                <h1 className="text-4xl font-bold mt-8">{props.evenement.titre}</h1>
                <p className="text-xl">{dateString(props.evenement.date)}</p>
                <Content content={props.evenement.contenu} />
            </Layout2>
        </>
    );
};

export default Evenement;
