import Image from "next/image";

type Props = {
    description: string;
    lienExterne: string;
    logo: string;
    nom: string;
};

const CardPartenaire = (props: Props) => {
    return (
        <div className="flex flex-col items-center gap-y-2 md:flex-row md:h-[200px] md:overflow-hidden">
            <div className="w-[200px] h-[200px] flex items-center">
                <Image
                    src={`${process.env.NEXT_PUBLIC_URL_BACK}/assets/${props.logo}`}
                    width={200}
                    height={200}
                    className="object-cover"
                    alt={`Logo ${props.nom}`}
                />
            </div>
            <div className="w-full px-4">
                <div className="text-center font-bold text-xl">{props.nom}</div>
                <div className="text-center">{props.description}</div>
            </div>
        </div>
    );
};

export default CardPartenaire;
