import { InferGetServerSidePropsType } from "next";
import { FaMobileAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Layout1 from "../../components/Common/Layout1";
import VuDansMediaFilter from "../../components/vuDansMedias/VuDansMediaFilter";
import VuDansMediasSearch from "../../components/vuDansMedias/VuDansMediasSearch";
import { vuDansLesMediasActions } from "../../components/vuDansMedias/vuDansMediasStore";
import { FilArianeInterface } from "../../utils/interface";
import { RootState } from "../../utils/store";
import { getServerSidePropsApi } from "../../utils/variables";

type VuDansMediasProps = {
    lien: string;
    titre: string;
    description: string;
    image: string;
    vuDansLesMediasProjets: {
        titre: string;
    };
};

export const getServerSideProps = getServerSidePropsApi<VuDansMediasProps>(
    "/items/vuDansLesMedias?fields=*,vuDansLesMediasProjets.titre"
);

const VuDansMedias = (
    props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
    const dispatch = useDispatch();
    const projetList = useSelector(
        (state: RootState) => state.vuDansLesMedias.projetList
    );
    const filArianes: FilArianeInterface[] = [
        {
            text: "Accueil",
            link: "/",
        },
        {
            text: "Vu dans les médias",
            link: "/partenaires/vu-dans-medias",
        },
    ];
    return (
        <>
            <Layout1
                filArianes={filArianes}
                title="Vu dans les médias"
                icons={<FaMobileAlt className="text-6xl" />}
                text1="Vu dans"
                text2="les médias"
            >
                <div>
                    <VuDansMediasSearch
                        projetValues={projetList}
                        projetOnChange={(s: string) =>
                            dispatch(
                                vuDansLesMediasActions.setProjetFilter(
                                    s === "0" ? null : s
                                )
                            )
                        }
                    />
                </div>
                <div className="mt-8 flex gap-x-8">
                    <div className="flex-grow">
                        <VuDansMediaFilter
                            medias={props.items.map((item) => ({
                                lien: item.lien,
                                projet: item.vuDansLesMediasProjets.titre,
                                metadata: {
                                    title: item.titre,
                                    description: item.description,
                                    banner: item.image,
                                },
                            }))}
                        />
                    </div>
                </div>
            </Layout1>
        </>
    );
};

export default VuDansMedias;
