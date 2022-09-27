import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import Header1 from "../components/Common/Header1";
import ProjetCardFooter from "../components/Projets/ProjetCardFooter";
import ProjetItems from "../components/Projets/ProjetItems";

export type ProjetProps = {
    projets: {
        titre: string;
        annee: number;
        description: string;
        image: string;
        projetPlateforme: {
            nom: string;
        };
        projetMotcle: {
            motcle_id: {
                libelle: string;
            };
        }[];
    }[];
};

type StaticProps = ProjetProps;
export const getStaticProps: () => Promise<{
    props: StaticProps;
}> = async () => {
    try {
        const projetsRes = await fetch(
            process.env.NEXT_PUBLIC_URL_BACK +
                "/items/projet?filter[status][_eq]=published&fields=*,projetPlateforme.nom,projetMotcle.*.libelle"
        );
        return {
            props: {
                projets: (await projetsRes.json()).data,
            } as StaticProps,
        };
    } catch (e) {
        console.log(e);
        return {
            props: {
                projets: [],
            },
        };
    }
};

const projets = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <>
            <Head>
                <title>Projets</title>
            </Head>
            <div className="container mx-auto px-4 my-8">
                <Header1 text1="Nos" text2="Projets" />
                <ProjetItems projets={props.projets} />
            </div>
        </>
    );
};

export default projets;
