import Image from "next/image";
import localisationSvg from "../../../public/svg/localisation.svg";

type Props = {
    center?: true;
};

const FooterLocalisation = (props: Props) => {
    return (
        <div className={"flex flex-col " + (props.center && "items-center")}>
            <div className="flex gap-x-4 items-center font-semibold">
                <Image src={localisationSvg} alt="Suivez-Nous" />
                Localisation
            </div>
            <div
                className={
                    "flex flex-col mt-4 " + (props.center && "items-center")
                }
            >
                <span>Université Paul Sabatier</span>
                <span>118 Route de Narbonne</span>
                <span>31400, Toulouse</span>
            </div>
        </div>
    );
};

export default FooterLocalisation;
