import { gql } from '@apollo/client';

export const GET_POSTS = gql`
    query GetPosts($locale: String!) {
        posts(locale: $locale) {
            title
            excerpt
            thumb
            slug
            createdAt
        }
    }
`;
