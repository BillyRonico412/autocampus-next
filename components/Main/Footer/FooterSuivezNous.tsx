import suivezNousSvg from "../../../public/svg/suivez-nous.svg";
import Image from "next/image";
import { getElementInApi } from "../../../utils/variables";
import { useEffect } from "react";
import { useState } from "react";

type Props = {
    center?: true;
};

const FooterSuivezNous = (props: Props) => {
    const [linkedinLink, setLinkedinLink] = useState<string | null>(null);
    const [twitterLink, setTwitterLink] = useState<string | null>(null);
    useEffect(() => {
        (async () => {
            try {
                const resLinkedin = await getElementInApi<{
                    linkedinLink: string;
                }>("/items/autres?fields=linkedinLink");
                if (resLinkedin.data) {
                    setLinkedinLink(resLinkedin.data.linkedinLink);
                }
                const resTwitter = await getElementInApi<{
                    twitterLink: string;
                }>("/items/autres?fields=twitterLink");
                if (resTwitter.data) {
                    setTwitterLink(resTwitter.data.twitterLink);
                }
            } catch (e) {}
        })();
    }, []);
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
                <a href={linkedinLink ?? "#"} target="_blank">LinkedIn</a>
                <a href={twitterLink ?? "#"} target="_blank">Twitter</a>
            </div>
        </div>
    );
};

export default FooterSuivezNous;
