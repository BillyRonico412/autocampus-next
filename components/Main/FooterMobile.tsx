import Image from "next/image";
import suivezNousSvg from "../../public/svg/suivez-nous.svg";
import informationsSvg from "../../public/svg/informations.svg";
import localisationSvg from "../../public/svg/localisation.svg";
import newsLetterSvg from "../../public/svg/news-letter.svg";

const FooterMobile = () => {
    return (
        <div className="bg-footer">
            <div className="pt-4 pb-8 px-4 flex flex-col items-center gap-y-6 container mx-auto">
                <div className="flex flex-col items-center">
                    <div className="flex gap-x-4 items-center font-semibold">
                        <Image src={suivezNousSvg} alt="Suivez-Nous" />
                        Suivez-nous
                    </div>
                    <div className="flex flex-col items-center mt-4">
                        <a href="#">LinkedIn</a>
                        <a href="#">Twitter</a>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex gap-x-4 items-center font-semibold">
                        <Image src={informationsSvg} alt="Suivez-Nous" />
                        Informations
                    </div>
                    <div className="flex flex-col items-center mt-4">
                        <a href="#">Protection des données</a>
                        <a href="#">Plan du site</a>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-y-4">
                    <div className="flex gap-x-4 items-center font-semibold">
                        <Image src={newsLetterSvg} alt="Suivez-Nous" />
                        Newsletter
                    </div>
                    <input
                        type="text"
                        className="w-full rounded-lg py-1 px-4 shadow"
                        placeholder="Votre adresse e-mail"
                    />
                    <button className="bg-primary-old rounded-lg py-1 font-semibold w-32">
                        S&apos;inscrire
                    </button>
                </div>
                <div className="flex flex-col items-center">
                    <div className="flex gap-x-4 items-center font-semibold">
                        <Image src={localisationSvg} alt="Suivez-Nous" />
                        Localisation
                    </div>
                    <div className="flex flex-col mt-4 items-center">
                        <span>Université Paul Sabatier</span>
                        <span>118 Route de Narbonne</span>
                        <span>31400, Toulouse</span>
                    </div>
                </div>
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245.2392993138105!2d1.4678154162430668!3d43.56114037060321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebc3b5b9554cf%3A0x73b3f0f100a74d5f!2sIRIT%20Institut%20de%20Recherche%20en%20Informatique%20de%20Toulouse!5e0!3m2!1sfr!2sfr!4v1664143107002!5m2!1sfr!2sfr"
                        width="300"
                        height="300"
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default FooterMobile;
