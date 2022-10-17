import { useSelector } from "react-redux";
import { RootState } from "../../utils/store";
import {
    EvenementsType
} from "../Actualites/utils";
import EvenementsByYear from "./EvenementsByYear";

type Props = {
    evenements: EvenementsType[];
};

const EvenementsItems = (props: Props) => {
    const dateList = useSelector(
        (state: RootState) => state.evenements.dateList
    );
    return (
        <div className="flex flex-col gap-y-8">
            {dateList.map((annee, i) => (
                <EvenementsByYear
                    key={i}
                    annee={annee}
                    evenements={props.evenements.filter(
                        (actu) => Number(actu.date.slice(0, 4)) === annee
                    )}
                />
            ))}
        </div>
    );
};

export default EvenementsItems;
