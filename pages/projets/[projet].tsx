import {
    GetServerSideProps, InferGetServerSidePropsType, InferGetStaticPropsType
} from "next";
import { FaProjectDiagram } from "react-icons/fa";
import { ProjetProps } from ".";
import Content from "../../components/Common/Content";
import Layout2 from "../../components/Common/Layout2";
import { getElementInApi } from "../../utils/variables";

export const getServerSideProps: GetServerSideProps<{
    projet: ProjetProps;
}> = async (context) => {
    if (!context.params) {
        return {
            notFound: true,
        };
    }
    const projet = await getElementInApi<ProjetProps>(
        `/items/projet/${context.params.projet}?filter[status][_eq]=published&fields=*,projetPlateforme.nom,projetMotcle.*.libelle`
    );
    if (!projet.data) {
        return {
            notFound: true,
        };
    }
    return {
        props: {
            projet: projet.data,
        },
    };
};

const projet = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const filArianes = [
        {
            text: "Accueil",
            link: "/",
        },
        {
            text: "Projets",
            link: "/projets",
        },
        {
            text: String(props.projet.id),
            link: "/projets/" + props.projet.id,
        },
    ];
    return (
        <>
            <Layout2
                title={props.projet.titre}
                icons={<FaProjectDiagram className="text-6xl" />}
                filArianes={filArianes}
                motcles={props.projet.projetMotcle.map(
                    (motcle) => motcle.motcle_id.libelle
                )}
            >
                <Content content={props.projet.contenu} />
            </Layout2>
        </>
    );
};

export default projet;
