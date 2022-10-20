import { useDispatch } from "react-redux";
import Search from "../Common/Search";
import Select from "../Common/Select";
import { projetActions } from "./projetStore";

type Props = {
    annees: number[];
};

const ProjetSearch = (props: Props) => {
    const dispatch = useDispatch();
    const onChangeAnneeFilter = (val: string) => {
        if (val === "0") {
            dispatch(projetActions.setAnneeFilter(null));
        } else {
            dispatch(projetActions.setAnneeFilter(Number(val)));
        }
    };
    return (
        <div className="shadow border px-4 py-4 rounded flex flex-col gap-y-4 w-full">
            <p className="text-xl font-semibold">Rechercher</p>
            <Search
                placeholder="Rechercher un projet"
                onSearch={(s) => {
                    dispatch(projetActions.setSearch(s));
                }}
            />
            <Select
                text="Annee"
                onChange={onChangeAnneeFilter}
                values={props.annees.map((annee) => ({
                    key: String(annee),
                    val: String(annee),
                }))}
                defaultValue={{
                    key: "Choisir l'année",
                    val: "0",
                }}
            />
        </div>
    );
};

export default ProjetSearch;
