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
    metadata: {
        title: string;
        description: string;
        banner: string;
    };
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

export interface PlateformesProps {
    id: number;
    contenu: string;
    couleur: string;
    description: string;
    externalLink: string;
    image: string;
    nom: string;
    plateformeMotcle: {
        motcle_id: {
            libelle: string;
        };
    }[];
    plateformePartenaire: {
        partenaire_id: {
            logo: string;
        };
    }[];
}
