import Header2 from "../../components/Common/Header2";
import { FilArianeInterface } from "../../utils/interface";
import { IoMdBusiness } from "react-icons/io";
import { InferGetStaticPropsType } from "next";
import CardPartenaire from "../../components/Partenaire/CardPartenaire";

type StaticProps = {
    partenaires: {
        description: string;
        lienExterne: string;
        logo: string;
        nom: string;
    }[];
};

export const getStaticProps: () => Promise<{
    props: StaticProps;
}> = async () => {
    try {
        const partenaireRes = await fetch(
            process.env.NEXT_PUBLIC_URL_BACK +
                "/items/partenaire?filter[category][_eq]=Institutions"
        );
        return {
            props: {
                partenaires: (await partenaireRes.json()).data,
            } as StaticProps,
        };
    } catch (e) {
        console.log(e);
        return {
            props: {
                partenaires: [],
            },
        };
    }
};

const institutions = (
    props: InferGetStaticPropsType<typeof getStaticProps>
) => {
    const filArianes: FilArianeInterface[] = [
        {
            text: "Accueil",
            link: "/",
        },
        {
            text: "Institutions",
            link: "/partenaires/institutions",
        },
    ];
    return (
        <div>
            <Header2 title="Institutions partenaires" filArianes={filArianes}>
                <IoMdBusiness className="text-6xl" />
            </Header2>
            <div className="container mx-auto px-4">
                <div className="flex xl:grid xl:grid-cols-2 gap-x-8 flex-col gap-y-12 my-8">
                    {props.partenaires.map((partenaire, i) => (
                        <CardPartenaire
                            description={partenaire.description}
                            lienExterne={partenaire.lienExterne}
                            logo={partenaire.logo}
                            nom={partenaire.nom}
                            key={i}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default institutions;