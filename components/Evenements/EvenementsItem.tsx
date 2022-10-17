import { EvenementsType } from "../Actualites/utils";
import EvenementsCard from "./EvenementsCard";

type Props = {
    evenement: EvenementsType;
};

const EvenementsItem = (props: Props) => {
    return (
        <div className="">
            <EvenementsCard
                titre={props.evenement.titre}
                date={props.evenement.date}
                description={props.evenement.description}
                image={props.evenement.image}
            />
        </div>
    );
};

export default EvenementsItem;
