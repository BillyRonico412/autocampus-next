import { NextRouter } from "next/router";
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
                childrens: [],
            },
            {
                title: "Gouvernance",
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
                childrens: [],
            },
            {
                title: "Thèses & stages",
                childrens: [],
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

export const getImageUrl = (image: string) => `${process.env.NEXT_PUBLIC_URL_BACK}/assets/${image}`