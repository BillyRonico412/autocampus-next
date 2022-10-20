import { InferGetServerSidePropsType } from "next";
import { FaBookmark } from "react-icons/fa";
import Layout1 from "../../components/Common/Layout1";
import PlateformesItems from "../../components/Plateformes/PlateformesItems";
import PlateformesList from "../../components/Plateformes/PlateformesList";
import { FilArianeInterface, PlateformesProps } from "../../utils/interface";
import { getServerSidePropsApi } from "../../utils/variables";

export const getServerSideProps = getServerSidePropsApi<PlateformesProps>(
    "/items/plateforme?fields=*,plateformeMotcle.motcle_id.libelle"
);

const plateformes = (
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
    ];
    return (
        <Layout1
            text1="Nos"
            text2="plateformes"
            filArianes={filArianes}
            title="Nos plateformes"
            icons={<FaBookmark className="text-6xl" />}
        >
            <div className="flex">
                <div className="flex-grow">
                    <PlateformesItems
                        plateformes={props.items.map((item) => ({
                            couleur: item.couleur,
                            description: item.description,
                            image: item.image,
                            motcles: item.plateformeMotcle.map(
                                (motcle) => motcle.motcle_id.libelle
                            ),
                            nom: item.nom,
                            externalLink: item.externalLink,
                            id: item.id,
                        }))}
                    />
                </div>
                <div className="hidden md:flex w-[400px] flex-col gap-y-8">
                    <PlateformesList
                        plateformes={props.items.map((item) => ({
                            id: item.id,
                            titre: item.nom,
                            couleur: item.couleur,
                        }))}
                    />
                </div>
            </div>
            <div></div>
        </Layout1>
    );
};

export default plateformes;
