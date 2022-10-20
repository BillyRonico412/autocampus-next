import Image from "next/image";
import ProjetCard, { ProjetCardProps } from "../Projets/ProjetCard";

type Props = {
    projets: ProjetCardProps[];
    numberImgOnContainer: number;
};

const ScrollHorizontalInfiniteProjetFrame = (props: Props) => {
    return (
        <div
            className="grid"
            style={{
                gridTemplateColumns: `repeat(${props.numberImgOnContainer}, 1fr)`,
            }}
        >
            {props.projets.map((projet, i) => (
                <div key={i} className="flex justify-center items-center">
                    <ProjetCard
                        id={projet.id}
                        description={projet.description}
                        image={projet.image}
                        motcles={projet.motcles}
                        nomPlateforme={projet.nomPlateforme}
                        titre={projet.titre}
                    />
                </div>
            ))}
        </div>
    );
};

export default ScrollHorizontalInfiniteProjetFrame;
