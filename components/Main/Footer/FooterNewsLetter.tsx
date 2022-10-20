import newsLetterSvg from "../../../public/svg/news-letter.svg";
import Image from "next/image";

type Props = {
    center?: true;
};

const FooterNewsLetter = (props: Props) => {
    return (
        <div
            className={
                "flex flex-col gap-y-4 " + (props.center && "items-center")
            }
        >
            <div className="flex gap-x-4 items-center font-semibold">
                <Image src={newsLetterSvg} alt="Suivez-Nous" />
                Newsletter
            </div>
            <input
                type="text"
                className="w-full rounded-lg py-1 px-4 shadow"
                placeholder="Votre adresse e-mail"
            />
            <button
                className="bg-primary-old rounded-lg py-1 font-semibold w-32"
                onClick={() => {
                    window.alert(
                        "La fonctionnalité news letter est en cours de developpement"
                    );
                }}
            >
                S&apos;inscrire
            </button>
        </div>
    );
};

export default FooterNewsLetter;
