import { PartenaireProps } from "../../pages";
import ScrollHorizontalInfiniteImageContent from "../ScrollHorizontalInfinite/ScrollHorizontalInfiniteImageContent";

type Props = {
    partenaires: PartenaireProps[];
};

const HomepagePartenaires = (props: Props) => {
    return (
        <div className="flex flex-col gap-y-4 mt-8">
            <div className="flex flex-col gap-y-2">
                <p className="text-xl font-semibold">Entreprises</p>
                <ScrollHorizontalInfiniteImageContent
                    autoplay
                    imagesSrc={props.partenaires
                        .filter(
                            (partenaire) => partenaire.category === "Entreprise"
                        )
                        .map((partenaire) => partenaire.logo)}
                    height={200}
                    width={200}
                />
            </div>
            <div className="flex flex-col gap-y-2">
                <p className="text-xl font-semibold">Entreprises</p>
                <ScrollHorizontalInfiniteImageContent
                    autoplay
                    imagesSrc={props.partenaires
                        .filter(
                            (partenaire) =>
                                partenaire.category === "Institution"
                        )
                        .map((partenaire) => partenaire.logo)}
                    height={200}
                    width={200}
                />
            </div>
            <div className="flex flex-col gap-y-2">
                <p className="text-xl font-semibold">Entreprises</p>
                <ScrollHorizontalInfiniteImageContent
                    autoplay
                    imagesSrc={props.partenaires
                        .filter(
                            (partenaire) =>
                                partenaire.category === "Laboratoire"
                        )
                        .map((partenaire) => partenaire.logo)}
                    height={200}
                    width={200}
                />
            </div>
        </div>
    );
};

export default HomepagePartenaires;
