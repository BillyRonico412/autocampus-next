import { GetServerSideProps } from "next";
import { MenuItemInterface } from "./interface";

export const menuItems: MenuItemInterface[] = [
    {
        title: "Qui sommes nous ?",
        childrens: [
            {
                title: "Membres de l’équipe",
                link: "/qui-sommes-nous/membres-equipe",
                childrens: [],
            },
            {
                title: "Notre démarche",
                link: "/qui-sommes-nous/notre-demarche",
                childrens: [],
            },
            {
                title: "Gouvernance",
                link: "/qui-sommes-nous/gouvernance",
                childrens: [],
            },
        ],
    },

    {
        title: "Nos projets",
        link: "/projets",
        childrens: [],
    },
    {
        title: "Nos publications",
        childrens: [
            {
                title: "Publications scientifiques",
                link: "/publications-scientifiques",
                childrens: [],
            },
            {
                title: "Thèses & stages",
                childrens: [],
                link: "/these-stage",
            },
        ],
    },
    {
        title: "Nos partenariats",
        childrens: [
            {
                title: "Entreprises",
                link: "/partenaires/entreprises",
                childrens: [],
            },
            {
                title: "Institutions",
                link: "/partenaires/institutions",
                childrens: [],
            },
            {
                title: "Laboratoires",
                link: "/partenaires/laboratoires",
                childrens: [],
            },
        ],
    },
    {
        title: "Actualités",
        childrens: [
            {
                title: "Vu dans les médias",
                childrens: [],
            },
            {
                title: "Évènements",
                childrens: [],
            },
        ],
    },
    {
        title: "Les plateformes boîtes à outils",
        childrens: [
            {
                title: "Plateau technique",
                childrens: [],
            },
            {
                title: "Tarif et utilisation",
                childrens: [],
            },
        ],
    },
    {
        title: "Contactez-nous",
        childrens: [],
    },
    {
        title: "Offres d’emplois",
        childrens: [],
    },
];

export const getImageApi = (image: string) =>
    `${process.env.NEXT_PUBLIC_URL_BACK}/assets/${image}`;

export const getElementsInApi = async <ItemGeneric>(url: string) => {
    try {
        const itemsRes = await fetch(process.env.NEXT_PUBLIC_URL_BACK + url);
        return {
            data: (await itemsRes.json()).data as ItemGeneric[],
        };
    } catch (e) {
        console.log("Erreur when fetch", e);
        return {
            data: [] as ItemGeneric[],
        };
    }
};

export const getElementInApi = async <ItemGeneric>(url: string) => {
    try {
        const itemsRes = await fetch(process.env.NEXT_PUBLIC_URL_BACK + url);
        return {
            data: (await itemsRes.json()).data as ItemGeneric,
        };
    } catch (e) {
        console.log("Erreur when fetch", e);
        return {
            data: null,
        };
    }
};

export const getServerSidePropsApi =
    <ItemGeneric>(url: string): GetServerSideProps<{ items: ItemGeneric[] }> =>
    async () => {
        const res = await getElementsInApi<ItemGeneric>(url);
        if (res.data) {
            return {
                props: {
                    items: res.data,
                },
            };
        }
        return {
            notFound: true,
        };
    };

export const allPath = [
    "/",
    "/protection-donnee",
    "/publications-scientifiques",
    "/these-stage",
    "/partenaires/entreprises",
    "/partenaires/institutions",
    "/partenaires/laboratoires",
    "/projets",
    "/qui-sommes-nous/gouvernance",
    "/qui-sommes-nous/membres-equipe",
    "/qui-sommes-nous/notre-demarche",
];
