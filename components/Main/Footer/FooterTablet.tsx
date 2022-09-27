import FooterInformations from "./FooterInformations";
import FooterLocalisation from "./FooterLocalisation";
import FooterNewsLetter from "./FooterNewsLetter";
import FooterSuivezNous from "./FooterSuivezNous";

const FooterTablet = () => {
    return (
        <div className="bg-footer">
            <div className="pt-4 pb-8 px-4 flex justify-between gap-x-4 container mx-auto">
                <div className="flex flex-col gap-y-6">
                    <FooterSuivezNous />
                    <FooterNewsLetter />
                </div>

                <div className="flex flex-col gap-y-6">
                    <FooterInformations />
                    <FooterLocalisation />
                </div>

                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245.2392993138105!2d1.4678154162430668!3d43.56114037060321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebc3b5b9554cf%3A0x73b3f0f100a74d5f!2sIRIT%20Institut%20de%20Recherche%20en%20Informatique%20de%20Toulouse!5e0!3m2!1sfr!2sfr!4v1664143107002!5m2!1sfr!2sfr"
                        width="250"
                        height="250"
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default FooterTablet;
