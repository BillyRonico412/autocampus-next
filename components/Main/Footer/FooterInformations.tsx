import informationsSvg from "../../../public/svg/informations.svg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getElementInApi, getImageApi } from "../../../utils/variables";

type Props = {
    center?: true;
};

const FooterInformations = (props: Props) => {
    const [planDuSite, setPlanDuSite] = useState<string | null>(null);
    useEffect(() => {
        (async () => {
            try {
                const resPlanDuSite = await getElementInApi<{
                    planDuSite: string;
                }>("/items/autres?fields=planDuSite");
                if (resPlanDuSite.data) {
                    setPlanDuSite(resPlanDuSite.data.planDuSite);
                }
            } catch (e) {}
        })();
    }, []);
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
                <Link href="/protection-donnee">Protection des données</Link>
                <a
                    href={planDuSite ? getImageApi(planDuSite) : "#"}
                    target="_blank"
                >
                    Plan du site
                </a>
            </div>
        </div>
    );
};

export default FooterInformations;
