import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { FaBookmark } from "react-icons/fa";
import Content from "../../components/Common/Content";
import EnSavoirPlus from "../../components/Common/EnSavoirPlus";
import Layout2 from "../../components/Common/Layout2";
import ScrollHorizontalInfiniteImageContent from "../../components/ScrollHorizontalInfinite/ScrollHorizontalInfiniteImageContent";
import ScrollHorizontalInfiniteProjetContent from "../../components/ScrollHorizontalInfinite/ScrollHorizontalInfiniteProjetContent";
import { FilArianeInterface, PlateformesProps } from "../../utils/interface";
import { getElementInApi, getElementsInApi } from "../../utils/variables";
import { ProjetProps } from "../projets";

export const getServerSideProps: GetServerSideProps<{
    plateforme: PlateformesProps;
    projets: ProjetProps[];
}> = async (context) => {
    if (!context.params) {
        return {
            notFound: true,
        };
    }
    const plateforme = await getElementInApi<PlateformesProps>(
        `/items/plateforme/${context.params.plateforme}?fields=*,plateformeMotcle.motcle_id.libelle,plateformePartenaire.partenaire_id.logo`
    );

    if (!plateforme.data) {
        return {
            notFound: true,
        };
    }
    const projets = await getElementsInApi<ProjetProps>(
        `/items/projet?filter[projetPlateforme][_eq]=${plateforme.data.id}&fields=*,projetMotcle.motcle_id.libelle&sort=-id`
    );
    if (!projets.data) {
        return {
            notFound: true,
        };
    }
    return {
        props: {
            plateforme: plateforme.data,
            projets: projets.data,
        },
    };
};

const plateforme = (
    props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
    const filArianes: FilArianeInterface[] = [
        {
            text: "Accueil",
            link: "/",
        },
        {
            text: "Nos plateformes",
            link: "/plateformes",
        },
        {
            text: String(props.plateforme.id),
            link: "/plateformes/" + props.plateforme.id,
        },
    ];
    return (
        <Layout2
            filArianes={filArianes}
            icons={<FaBookmark className="text-6xl" />}
            title={props.plateforme.nom}
            motcles={props.plateforme.plateformeMotcle.map(
                (motcle) => motcle.motcle_id.libelle
            )}
        >
            <Content content={props.plateforme.contenu} />
            <EnSavoirPlus />
            {props.plateforme.plateformePartenaire.length > 0 && (
                <div className="flex flex-col gap-y-8">
                    <p className="text-2xl font-bold mt-4">
                        <span className="">Partenaires du </span>
                        <span className="text-primary-old">projet</span>
                    </p>
                    <ScrollHorizontalInfiniteImageContent
                        imagesSrc={props.plateforme.plateformePartenaire.map(
                            (partenaire) => partenaire.partenaire_id.logo
                        )}
                        height={200}
                        width={200}
                    />
                </div>
            )}
            {props.projets.length > 0 && (
                <div className="flex flex-col gap-y-8">
                    <p className="text-2xl font-bold mt-4">
                        <span>Projets labellisés </span>
                        <span className="text-primary-old">
                            {props.plateforme.nom}
                        </span>
                        <span> en cours de réalisation </span>
                    </p>
                    <ScrollHorizontalInfiniteProjetContent
                        projets={props.projets.map((projet) => ({
                            id: projet.id,
                            titre: projet.titre,
                            description: projet.description,
                            image: projet.image,
                            motcles: projet.projetMotcle.map(
                                (motcle) => motcle.motcle_id.libelle
                            ),
                            nomPlateforme: props.plateforme.nom,
                        }))}
                    />
                </div>
            )}
        </Layout2>
    );
};

export default plateforme;
