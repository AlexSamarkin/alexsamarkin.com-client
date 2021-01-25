import React from 'react';
import { Article, Locale } from '../../types';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../../operations/queries/getPosts';
import List from '../../pages/Blog/List';
import Preloader from '../../components/Preloader';

export interface ArticlesQueryData {
    posts: Article[];
}

export interface ArticlesQueryVar {
    locale: Locale;
}

export const ArticlesContainer: React.FC<{ lang: Locale }> = ({ lang }) => {
    const { data, loading } = useQuery<ArticlesQueryData, ArticlesQueryVar>(GET_POSTS, {
        variables: {
            locale: lang,
        },
    });

    if (loading || !data) {
        return <Preloader />;
    }

    const articles = data.posts.map((post) => {
        return {
            ...post,
            createdAt: new Date(post.createdAt),
        };
    });

    return <List articles={articles} lang={lang} />;
};

export default ArticlesContainer;
