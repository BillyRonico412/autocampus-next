import PlateformesCard from "./PlateformesCard";

type Props = {
    plateformes: {
        id: number;
        nom: string;
        couleur: string;
        description: string;
        externalLink: string;
        image: string;
        motcles: string[];
    }[];
};

const PlateformesItems = (props: Props) => {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-y-8 justify-items-center">
            {props.plateformes.map((plateforme, i) => (
                <div>
                    <PlateformesCard
                        couleur={plateforme.couleur}
                        description={plateforme.description}
                        image={plateforme.image}
                        motcles={plateforme.motcles}
                        id={plateforme.id}
                        nomPlateforme={plateforme.nom}
                        key={i}
                    />
                </div>
            ))}
        </div>
    );
};

export default PlateformesItems;
