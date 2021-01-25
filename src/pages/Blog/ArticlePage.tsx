import React from 'react';
import { Article } from '../../types';
import parse from 'html-react-parser';
import Footer from '../../components/Footer/Footer';

export interface ArticlePageProps {
    article: Article;
}

export const ArticlePage: React.FC<ArticlePageProps> = (props) => {
    const { article } = props;

    return (
        <>
            <div className="pb-3">
                <header className="header-post">
                    <div className="header-post__date">{article.createdAt.toLocaleDateString()}</div>
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
