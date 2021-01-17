import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { Article, CourseItem, JobItem, Locale, NavItem } from '../types';
import { getApolloClient } from './apolloClient';
import contentQuery from '../graphql/content.graphql';
import postsQuery from '../graphql/posts.graphql';
import postQuery from '../graphql/post.graphql';
import messageMutation from '../graphql/message.graphql';

export interface ApolloContentQueryVars {
    locale: Locale;
}

export interface ApolloPostsQueryVars {
    locale: Locale;
}

export interface ApolloPostQueryVars {
    locale: Locale;
    slug: string;
}

export interface ApolloSendMessageMutationVars {
    name: string;
    email: string;
    message: string;
}

export interface ApolloContentQueryResult {
    courses: CourseItem[];
    jobs: JobItem[];
    navs: NavItem[];
    cv: { url: string };
    texts: {
        aboutText: string;
        frontendText: string;
        backendText: string;
    };
}

export interface ApolloPostQueryResult {
    post: {
        title: string;
        createdAt: Date;
        excerpt: string;
        slug: string;
        thumb: string;
        content: string;
    };
}

export interface ApolloPostsQueryResult {
    posts: {
        title: string;
        slug: string;
        createdAt: Date;
        excerpt: string;
        content?: string;
        thumb: string;
    }[];
}

export class ApiService {
    constructor(private readonly client: ApolloClient<NormalizedCacheObject>) {}

    public async sendMessage(name: string, email: string, message: string): Promise<boolean> {
        const { data } = await this.client.mutate<{ sendMessage: boolean }, ApolloSendMessageMutationVars>({
            mutation: messageMutation,
            variables: {
                name,
                email,
                message,
            },
        });

        if (!data) {
            return false;
        }

        return data.sendMessage;
    }

    public async getContent(locale: Locale): Promise<ApolloContentQueryResult> {
        const { data } = await this.client.query<ApolloContentQueryResult, ApolloContentQueryVars>({
            query: contentQuery,
            variables: { locale },
        });

        return data;
    }

    public async getPosts(locale: Locale): Promise<Article[]> {
        try {
            const { data } = await this.client.query<ApolloPostsQueryResult, ApolloPostsQueryVars>({
                query: postsQuery,
                variables: { locale },
            });

            return data.posts.map((post) => ({
                ...post,
                date: new Date(post.createdAt),
            }));
        } catch (e) {
            return [];
        }
    }

    public async getPostBySlug(slug: string, locale: Locale): Promise<Article | null> {
        try {
            const { data } = await this.client.query<ApolloPostQueryResult, ApolloPostQueryVars>({
                query: postQuery,
                variables: { locale, slug },
            });

            return {
                thumb: data.post.thumb,
                date: new Date(data.post.createdAt),
                slug: data.post.slug,
                title: data.post.title,
                excerpt: data.post.excerpt,
                content: data.post.content,
            } as Article;
        } catch (e) {
            return null;
        }
    }
}

export default new ApiService(getApolloClient());
