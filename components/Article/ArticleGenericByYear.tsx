import { useState } from "react";
import { FaCaretDown, FaCaretRight } from "react-icons/fa";
import ArticleGenericItem from "./ArticleGenericItem";
import { ArticleType } from "./utils";

type Props = {
    articles: ArticleType[];
    annee: number;
};
const ArticleGenericByYear = (props: Props) => {
    const [isShow, setIsShow] = useState(true);
    return (
        <>
            {props.articles.length > 0 && (
                <div className="ml-8">
                    <p
                        className="text-lg font-semibold flex items-center gap-x-2 cursor-pointer"
                        onClick={() => setIsShow(!isShow)}
                    >
                        {props.annee}
                        {isShow ? <FaCaretDown /> : <FaCaretRight />}
                    </p>
                    {isShow && (
                        <div className="flex flex-col gap-y-2 mt-2">
                            {props.articles.map((pub, i) => (
                                <ArticleGenericItem
                                    key={i}
                                    article={pub}
                                />
                            ))}
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default ArticleGenericByYear;
