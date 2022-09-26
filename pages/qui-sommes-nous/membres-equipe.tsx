import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import FilAriane from "../../components/Common/FilAriane";
import Header1 from "../../components/Common/Header1";
import CardMembre from "../../components/Membre/CardMembre";
import { FilArianeInterface } from "../../utils/interface";

type StaticProps = {
    membres: {
        nom: string;
        prenom: string;
        image: string;
        titre: string;
    }[];
};

export const getStaticProps: () => Promise<{
    props: StaticProps;
}> = async () => {
    try {
        const membreRes = await fetch(
            process.env.NEXT_PUBLIC_URL_BACK + "/items/membre"
        );
        return {
            props: {
                membres: (await membreRes.json()).data,
            } as StaticProps,
        };
    } catch (e) {
        console.log(e);
        return {
            props: {
                membres: [],
            },
        };
    }
};

const membresEquipe = (
    props: InferGetStaticPropsType<typeof getStaticProps>
) => {
    const filArianes: FilArianeInterface[] = [
        {
            text: "Accueil",
            link: "/",
        },
        {
            text: "Membres de l'équipe",
            link: "/qui-sommes-nous/membres-equipe",
        },
    ];

    return (
        <>
            <Head>
                <title>Membres de l&apos;équipe</title>
            </Head>
            <div className="container mx-auto px-4">
                <div>
                    <div className="mt-4">
                        <Header1 text1="Membres de" text2="l'équipe" />
                        <FilAriane filArianes={filArianes} />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 justify-items-center truncate my-8">
                    {props.membres.map((membre, i) => (
                        <CardMembre
                            nom={membre.nom}
                            prenom={membre.prenom}
                            image={membre.image}
                            titre={membre.titre}
                            key={i}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default membresEquipe;
