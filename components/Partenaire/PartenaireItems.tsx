import { PartenaireProps } from "./variable";
import LayoutCard1 from "../Common/LayoutCard1";
import PartenaireCard from "./PartenaireCard";

type Props = {
    partenaireItems: PartenaireProps[];
};

const PartenaireItems = (props: Props) => {
    return (
        <LayoutCard1>
            {props.partenaireItems.map((partenaire, i) => (
                <PartenaireCard
                    description={partenaire.description}
                    lienExterne={partenaire.lienExterne}
                    logo={partenaire.logo}
                    nom={partenaire.nom}
                    key={i}
                />
            ))}
        </LayoutCard1>
    );
};

export default PartenaireItems;
