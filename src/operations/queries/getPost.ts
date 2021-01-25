import { gql } from '@apollo/client';

export const GET_POST = gql`
    query GetPost($locale: String!, $slug: String!) {
        post(locale: $locale, slug: $slug) {
            title
            excerpt
            thumb
            slug
            createdAt
            content
        }
    }
`;
