import { gql } from '@apollo/client';

export const GET_MENU = gql`
    query GetMenu($locale: String!) {
        navs(locale: $locale) {
            title
            link
        }
    }
`;
