import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { FaProjectDiagram } from "react-icons/fa";
import { ProjetProps } from ".";
import Content from "../../components/Common/Content";
import EnSavoirPlus from "../../components/Common/EnSavoirPlus";
import Layout2 from "../../components/Common/Layout2";
import ScrollHorizontalInfiniteImageContent from "../../components/ScrollHorizontalInfinite/ScrollHorizontalInfiniteImageContent";
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
        `/items/projet/${context.params.projet}?filter[status][_eq]=published&fields=*,projetPlateforme.nom,projetMotcle.*.libelle,projetPartenaire.partenaire_id.logo`
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

const projet = (
    props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
    const filArianes = [
        {
            text: "Accueil",
            link: "/",
        },
        {
            text: "Nos projets",
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
                <EnSavoirPlus />
                {props.projet.projetPartenaire.length > 0 && (
                    <div className="flex flex-col gap-y-8">
                        <p className="text-2xl font-bold mt-4">
                            <span className="">Partenaires du </span>
                            <span className="text-primary-old">projet</span>
                        </p>
                        <ScrollHorizontalInfiniteImageContent
                            imagesSrc={props.projet.projetPartenaire.map(
                                (partenaire) => partenaire.partenaire_id.logo
                            )}
                            height={200}
                            width={200}
                        />
                    </div>
                )}
            </Layout2>
        </>
    );
};

export default projet;
