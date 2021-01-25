import React from 'react';
import { Article, Locale } from '../../types';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_POST } from '../../operations/queries/getPost';
import Preloader from '../../components/Preloader';
import ArticlePage from '../../pages/Blog/ArticlePage';

export interface ArticleQueryData {
    post: Article;
}

export interface ArticlesQueryVar {
    locale: Locale;
    slug: string;
}

export const ArticleContainer: React.FC<{ lang: Locale }> = ({ lang }) => {
    const { slug } = useParams<{ slug: string }>();
    const { data, loading } = useQuery<ArticleQueryData, ArticlesQueryVar>(GET_POST, {
        variables: {
            locale: lang,
            slug,
        },
    });

    if (loading || !data) {
        return <Preloader />;
    }

    const article = {
        ...data.post,
        createdAt: new Date(data.post.createdAt),
    };

    return <ArticlePage article={article} />;
};

export default ArticleContainer;
