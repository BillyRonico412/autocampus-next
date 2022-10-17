import { InferGetServerSidePropsType } from "next";
import { FaCalendarAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ActualitesEnum } from "../../components/Actualites/utils";
import Layout1 from "../../components/Common/Layout1";
import EvenementsFilter from "../../components/Evenements/EvenementsFilter";
import EvenementsSearch from "../../components/Evenements/EvenementsSearch";
import { evenementsActions } from "../../components/Evenements/evenementsStore";
import { EvenementProps, FilArianeInterface } from "../../utils/interface";
import { RootState } from "../../utils/store";
import { getServerSidePropsApi } from "../../utils/variables";

export const getServerSideProps = getServerSidePropsApi<EvenementProps>(
    "/items/evenement?fields=*,evenementProjet.titre"
);

const evenements = (
    props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
    const dispatch = useDispatch();
    const dateList = useSelector(
        (state: RootState) => state.evenements.dateList
    );
    const projetList = useSelector(
        (state: RootState) => state.evenements.projetList
    );
    const filArianes: FilArianeInterface[] = [
        {
            text: "Accueil",
            link: "/",
        },
        {
            text: "Evenements",
            link: "/partenaires/evenements",
        },
    ];
    return (
        <>
            <Layout1
                filArianes={filArianes}
                title="Evenements"
                icons={<FaCalendarAlt className="text-6xl" />}
                text1="Evenements"
                text2=""
            >
                <div>
                    <EvenementsSearch
                        anneeValues={dateList}
                        projetValues={projetList}
                        anneeOnChange={(s: string) =>
                            dispatch(
                                evenementsActions.setDateFilter(
                                    s === "0" ? null : Number(s)
                                )
                            )
                        }
                        projetOnChange={(s: string) =>
                            dispatch(
                                evenementsActions.setProjetFilter(
                                    s === "0" ? null : s
                                )
                            )
                        }
                    />
                </div>
                <div className="mt-8 flex gap-x-8">
                    <div className="flex-grow">
                        <EvenementsFilter
                            evenements={props.items.map((item) => ({
                                titre: item.titre,
                                date: item.date,
                                projet: item.evenementProjet.titre,
                                image: item.image,
                                description: item.description,
                            }))}
                        />
                    </div>
                </div>
            </Layout1>
        </>
    );
};

export default evenements;
