import ArticleGenericByCategory from "./ArticleGenericByCategory";
import { ArticleEnum, ArticleType, useArticleValues } from "./utils";

type Props = {
    type: ArticleEnum;
    articles: ArticleType[];
};

const ArticleGenericItems = (props: Props) => {
    const { categorieList } = useArticleValues(props.type);

    return (
        <div className="flex flex-col gap-y-12">
            {categorieList.map((categorie, i) => (
                <ArticleGenericByCategory
                    key={i}
                    articles={props.articles.filter(
                        (article) => article.category === categorie
                    )}
                    categorie={categorie}
                    type={props.type}
                />
            ))}
        </div>
    );
};

export default ArticleGenericItems;
