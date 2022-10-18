import { useState } from "react";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";
import ArticleGenericByYear from "./ArticleGenericByYear";
import { ArticleEnum, ArticleType, useArticleValues } from "./utils";

type Props = {
    type: ArticleEnum;
    articles: ArticleType[];
    categorie: string;
};
const ArticleGenericByCategory = (props: Props) => {
    const [isShow, setIsShow] = useState(true);
    const { dateList } = useArticleValues(props.type);
    return (
        <>
            {props.articles.length > 0 && (
                <div>
                    <p
                        className="font-bold text-xl flex gap-x-2 items-center cursor-pointer"
                        onClick={() => {
                            setIsShow(!isShow);
                        }}
                    >
                        {props.categorie}
                        {isShow ? <FaCaretDown /> : <FaCaretRight />}
                    </p>
                    {isShow && (
                        <div className="flex flex-col gap-y-6 mt-6">
                            {dateList.map((annee, i) => (
                                <ArticleGenericByYear
                                    key={i}
                                    articles={props.articles.filter(
                                        (article) => article.annee === annee
                                    )}
                                    annee={annee}
                                />
                            ))}
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default ArticleGenericByCategory;
