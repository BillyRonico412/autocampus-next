import Link from "next/link";
import { useRouter } from "next/router";
import { FaAngleRight, FaCircle } from "react-icons/fa";

type Props = {
    plateformes: {
        id: number;
        titre: string;
        couleur: string;
    }[];
};

const PlateformesList = (props: Props) => {
    const router = useRouter();
    return (
        <div className="shadow border px-4 py-4 rounded">
            <p className="font-bold text-xl">Liste des plateformes</p>
            <ul className="flex flex-col gap-y-2 mt-4">
                {props.plateformes.map((plateforme) => (
                    <li
                        className="flex items-center group cursor-pointer"
                        onClick={() =>
                            router.push("/plateformes/" + plateforme.id)
                        }
                    >
                        <FaAngleRight className="mr-2 opacity-0 group-hover:opacity-100 transition" />
                        <span className="font-medium group-hover:underline">{plateforme.titre}</span>
                        <FaCircle
                            style={{ color: plateforme.couleur }}
                            className="text-xs ml-auto"
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PlateformesList;
