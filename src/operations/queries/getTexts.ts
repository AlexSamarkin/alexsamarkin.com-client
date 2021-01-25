import { gql } from '@apollo/client';

export const GET_TEXTS = gql`
    query GetTexts($locale: String!) {
        texts(locale: $locale) {
            backendText
            frontendText
            aboutText
        }
    }
`;
