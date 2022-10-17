import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../utils/store";
import {
    EvenementsType
} from "../Actualites/utils";
import EvenementsItems from "./EvenementsItems";
import { evenementsActions } from "./evenementsStore";

type Props = {
    evenements: EvenementsType[];
};

const EvenementsFilter = (props: Props) => {
    const dispatch = useDispatch();
    const dateFilter = useSelector(
        (state: RootState) => state.evenements.dateFilter
    );
    const projetFilter = useSelector(
        (state: RootState) => state.evenements.projetFilter
    );
    useEffect(() => {
        const dateList: number[] = [];
        const projetList: string[] = [];
        props.evenements.forEach((article) => {
            if (!dateList.includes(Number(article.date.slice(0, 4)))) {
                dateList.push(Number(article.date.slice(0, 4)));
            }
            if (!projetList.includes(article.projet)) {
                projetList.push(article.projet);
            }
        });
        dispatch(evenementsActions.setDateList(dateList));
        dispatch(evenementsActions.setProjetList(projetList));
    }, []);
    const propsWithFilter = props.evenements.filter(
        (article) =>
            (dateFilter === null ||
                dateFilter === Number(article.date.slice(0, 4))) &&
            (projetFilter === null || article.projet === projetFilter)
    );
    return (
        <>
            <EvenementsItems evenements={propsWithFilter} />
        </>
    );
};

export default EvenementsFilter;
