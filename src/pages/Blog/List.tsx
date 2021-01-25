import React, { useMemo } from 'react';
import { Article, Locale } from '../../types';
import Footer from '../../components/Footer/Footer';
import { Article as Post } from '../../components/Blog';
import translates from '../../lang';

export interface ListProps {
    articles: Article[];
    lang: Locale;
}

export const List: React.FC<ListProps> = (props) => {
    const { articles, lang } = props;
    const t = useMemo(() => translates(lang), [lang]);

    return (
        <>
            <div className="pb-2">
                <h1 className="title title--h1 first-title title__separate">{t('headers.articles')}</h1>
            </div>

            <div className="news-grid pb-0">
                {!articles && <h2>{t('headers.loading')}</h2>}
                {articles &&
                    articles.map((article: Article) => {
                        return <Post {...article} key={article.slug} />;
                    })}
            </div>
            <Footer />
        </>
    );
};

export default List;
