import { useDispatch } from "react-redux";
import Search from "../Common/Search";
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
            <Search placeholder="Rechercher un projet" />
            <div className="flex gap-x-8">
                <span className="text-xl font-semibold">Année:</span>
                <select
                    className="w rounded-full px-8 appearance-none bg-footer text-lg"
                    onChange={(e) => onChangeAnneeFilter(e.currentTarget.value)}
                >
                    <option value={0}>Choisir l'année</option>
                    {props.annees.map((item, i) => (
                        <option value={item} key={i}>
                            {item}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default ProjetSearch;
