import suivezNousSvg from "../../../public/svg/suivez-nous.svg";
import Image from "next/image";

type Props = {
    center?: true;
};

const FooterSuivezNous = (props: Props) => {
    return (
        <div className={"flex flex-col " + (props.center && "items-center")}>
            <div className="flex gap-x-4 items-center font-semibold">
                <Image src={suivezNousSvg} alt="Suivez-Nous" />
                Suivez-nous
            </div>
            <div
                className={
                    "flex flex-col mt-4 " + (props.center && "items-center")
                }
            >
                <a href="#">LinkedIn</a>
                <a href="#">Twitter</a>
            </div>
        </div>
    );
};

export default FooterSuivezNous;