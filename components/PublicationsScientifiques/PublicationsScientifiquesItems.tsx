import { Fragment } from "react";
import { useSelector } from "react-redux";
import { PublicationsScientifiquesInterface } from "../../pages/publications-scientifiques";
import { RootState } from "../../utils/store";
import PublicationsScientifiquesByCategory from "./PublicationsScientifiquesByCategory";

type Props = {
    publicationsScientifiques: PublicationsScientifiquesInterface[];
};

const PublicationsScientifiquesItems = (props: Props) => {
    const categorieList = useSelector(
        (state: RootState) => state.publicationsScientifique.categorieList
    );
    
    return (
        <div className="flex flex-col gap-y-12">
            {categorieList.map((categorie, i) => (
                <PublicationsScientifiquesByCategory
                    key={i}
                    publicationsScientifiques={props.publicationsScientifiques.filter(
                        (pub) => pub.category === categorie
                    )}
                    categorie={categorie}
                />
            ))}
        </div>
    );
};

export default PublicationsScientifiquesItems;
