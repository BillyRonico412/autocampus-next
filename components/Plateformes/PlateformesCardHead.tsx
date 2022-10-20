import { FaCircle } from "react-icons/fa";

type Props = {
    nomPlateforme: string;
};

const PlateformesCardHead = (props: Props) => {
    return (
        <div className="absolute top-0 left-0 bg-dark-font text-white w-[200px] rounded-br-full pl-4 pr-6 py-1 text-xl font-semibold z-10 flex items-center">
            {props.nomPlateforme}
        </div>
    );
};

export default PlateformesCardHead;
