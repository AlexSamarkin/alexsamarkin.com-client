import React, { useEffect } from 'react';
import { Article, Locale } from '../../types';
import parse from 'html-react-parser';
import Footer from '../../components/Footer/Footer';
import { useParams } from 'react-router-dom';

export interface ArticlePageStateProps {
    article: Article | null;
    lang: Locale;
}

export interface ArticlePageDispatchProps {
    load: (slug: string) => void;
}

export type ArticlePageProps = ArticlePageStateProps & ArticlePageDispatchProps;

export const ArticlePage: React.FC<ArticlePageProps> = (props) => {
    const { article, load, lang } = props;
    const { slug } = useParams<{ slug: string }>();

    useEffect(() => {
        load(slug);
    }, [lang]);

    if (!article) {
        return <h2>Loading...</h2>;
    }

    return (
        <>
            <div className="pb-3">
                <header className="header-post">
                    <div className="header-post__date">{article.date.toLocaleDateString()}</div>
                    <h1 className="title title--h1">{article.title}</h1>
                    <div className="caption-post">
                        <p>{article.excerpt}</p>
                    </div>
                    <div className="header-post__image-wrap">
                        <img className="cover lazyload" src={article.thumb} alt={article.title} />
                    </div>
                </header>
                <br />
                {article.content && parse(article.content)}
            </div>
            <Footer />
        </>
    );
};

export default ArticlePage;
