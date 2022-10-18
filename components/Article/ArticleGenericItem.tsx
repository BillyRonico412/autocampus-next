import { ArticleType } from "./utils";

type Props = {
    article: ArticleType;
};

const ArticleGenericItem = (props: Props) => {
    return (
        <div className="ml-8">
            <p className="font-semibold group">
                <a href={props.article.lien}>{props.article.titre}</a>
            </p>
            <p>
                {props.article.auteurs.map((auteur, i) => (
                    <span key={i}>
                        {i !== 0 && ", "}
                        {auteur}
                    </span>
                ))}
            </p>
        </div>
    );
};

export default ArticleGenericItem;
