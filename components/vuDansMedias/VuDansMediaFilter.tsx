import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { VuDansMediasType } from "../../utils/interface";
import { RootState } from "../../utils/store";
import VuDansMediaItems from "./VuDansMediaItems";
import { vuDansLesMediasActions } from "./vuDansMediasStore";

type Props = {
    medias: VuDansMediasType[];
};

const VuDansMediaFilter = (props: Props) => {
    const dispatch = useDispatch();
    const projetFilter = useSelector(
        (state: RootState) => state.vuDansLesMedias.projetFilter
    );
    useEffect(() => {
        const projetList: string[] = [];
        props.medias.forEach((media) => {
            if (!projetList.includes(media.projet)) {
                projetList.push(media.projet);
            }
        });
        dispatch(vuDansLesMediasActions.setProjetList(projetList));
    }, []);
    const propsWithFilter = props.medias.filter(
        (media) => projetFilter === null || media.projet === projetFilter
    );
    return (
        <>
            <VuDansMediaItems medias={propsWithFilter} />
        </>
    );
};

export default VuDansMediaFilter;
