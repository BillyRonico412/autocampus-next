import informationsSvg from "../../../public/svg/informations.svg";
import Image from "next/image";

type Props = {
    center?: true;
};

const FooterInformations = (props: Props) => {
    return (
        <div className={"flex flex-col " + (props.center && "items-center")}>
            <div className="flex gap-x-4 items-center font-semibold ">
                <Image src={informationsSvg} alt="Suivez-Nous" />
                Informations
            </div>
            <div
                className={
                    "flex flex-col mt-4 " + (props.center && "items-center")
                }
            >
                <a href="#">Protection des données</a>
                <a href="#">Plan du site</a>
            </div>
        </div>
    );
};

export default FooterInformations;
