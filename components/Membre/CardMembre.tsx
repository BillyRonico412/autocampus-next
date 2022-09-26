import Image from "next/image";

type Props = {
    nom: string;
    prenom: string;
    image: string;
    titre: string;
};

const CardMembre = (props: Props) => {
    return (
        <div className="flex justify-center relative w-[300px] shadow">
            <Image
                src={`${process.env.NEXT_PUBLIC_URL_BACK}/assets/${props.image}`}
                alt={`Image ${props.nom} ${props.prenom}`}
                width={300}
                height={300}
                className={"object-cover"}
            />
            <div className="bg-primary-old absolute w-full bottom-0 text-white px-4 py-2">
                <h2 className="font-semibold text-2xl">
                    <span className="capitalize">{props.prenom}</span>{" "}
                    <span className="uppercase ">{props.nom}</span>
                </h2>
                <h2 className="text-lg font-semibold">{props.titre}</h2>
            </div>
        </div>
    );
};

export default CardMembre;