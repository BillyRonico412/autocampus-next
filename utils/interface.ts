import { MetadataInformation } from "link-meta-extractor/dist/metadata";

export interface MenuItemInterface {
    title: string;
    childrens: MenuItemInterface[];
    link?: string;
}

export interface FilArianeInterface {
    link: string;
    text: string;
}

export interface EvenementProps {
    id: number;
    titre: string;
    description: string;
    contenu: string;
    image: string;
    date: string;
    evenementProjet: {
        titre: string;
    };
}

export type VuDansMediasType = {
    lien: string;
    metadata: MetadataInformation;
    projet: string;
};

export interface EvenementProps {
    id: number;
    titre: string;
    contenu: string;
    date: string;
    image: string;
    evenementMotcle: {
        motcle_id: {
            libelle: string;
        };
    }[];
}
