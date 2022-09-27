import { MembreProps } from "../../pages/qui-sommes-nous/membres-equipe";
import MembreCard from "./MembreCard";

type Props = {
    membres: MembreProps[]
};
const MembreItems = (props: Props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 justify-items-center truncate my-8">
            {props.membres.map((membre, i) => (
                <MembreCard
                    nom={membre.nom}
                    prenom={membre.prenom}
                    image={membre.image}
                    titre={membre.titre}
                    key={i}
                />
            ))}
        </div>
    );
};

export default MembreItems;
