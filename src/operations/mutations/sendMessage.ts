import { gql } from '@apollo/client';

export const SEND_MESSAGE = gql`
    mutation SendMessage($name: String!, $email: String!, $message: String!) {
        sendMessage(name: $name, email: $email, message: $message)
    }
`;
