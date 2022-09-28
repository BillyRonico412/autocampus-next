import { PartenaireProps } from "./variable";
import LayoutCard from "../Common/LayoutCard";
import PartenaireCard from "./PartenaireCard";

type Props = {
    partenaireItems: PartenaireProps[];
};

const PartenaireItems = (props: Props) => {
    return (
        <LayoutCard>
            {props.partenaireItems.map((partenaire, i) => (
                <PartenaireCard
                    description={partenaire.description}
                    lienExterne={partenaire.lienExterne}
                    logo={partenaire.logo}
                    nom={partenaire.nom}
                    key={i}
                />
            ))}
        </LayoutCard>
    );
};

export default PartenaireItems;
