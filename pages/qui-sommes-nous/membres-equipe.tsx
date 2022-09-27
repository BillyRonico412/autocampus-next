import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import FilAriane from "../../components/Common/FilAriane";
import Header1 from "../../components/Common/Header1";
import MembreCard from "../../components/Membre/MembreCard";
import MembreItems from "../../components/Membre/MembreItems";
import { FilArianeInterface } from "../../utils/interface";

export type MembreProps = {
    nom: string;
    prenom: string;
    image: string;
    titre: string;
};

type StaticProps = {
    membres: MembreProps[];
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
                    <MembreItems membres={props.membres} />
                </div>
            </div>
        </>
    );
};

export default membresEquipe;
