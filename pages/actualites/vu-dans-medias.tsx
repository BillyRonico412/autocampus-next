import { useEffect, useState } from "react";
import { FaMobileAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Layout1 from "../../components/Common/Layout1";
import VuDansMediaFilter from "../../components/vuDansMedias/VuDansMediaFilter";
import VuDansMediasSearch from "../../components/vuDansMedias/VuDansMediasSearch";
import { vuDansLesMediasActions } from "../../components/vuDansMedias/vuDansMediasStore";
import { FilArianeInterface, VuDansMediasType } from "../../utils/interface";
import { RootState } from "../../utils/store";
import { getElementsInApi } from "../../utils/variables";

type LienProps = {
    lien: string;
    vuDansLesMediasProjets: {
        titre: string;
    };
};

const VuDansMedias = () => {
    const dispatch = useDispatch();
    const projetList = useSelector(
        (state: RootState) => state.vuDansLesMedias.projetList
    );
    const [medias, setMedias] = useState<VuDansMediasType[] | null>(null);
    console.log(medias);
    useEffect(() => {
        (async () => {
            const res = await getElementsInApi<LienProps>(
                "/items/vuDansLesMedias?fields=lien,vuDansLesMediasProjets.titre"
            );
            const mediasArr: VuDansMediasType[] = [];
            for (const data of res.data) {
                const res = await fetch(
                    process.env.NEXT_PUBLIC_URL_FRONT +
                        "/api/get-head-info?url=" +
                        data.lien
                );
                const metadata = await res.json();
                mediasArr.push({
                    metadata: metadata.metadata,
                    projet: data.vuDansLesMediasProjets.titre,
                    lien: data.lien,
                });
            }
            setMedias(mediasArr);
        })();
    }, []);

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
                        {medias && <VuDansMediaFilter medias={medias} />}
                    </div>
                </div>
            </Layout1>
        </>
    );
};

export default VuDansMedias;
