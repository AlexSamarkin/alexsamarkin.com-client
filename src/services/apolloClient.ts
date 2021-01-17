import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import schema from '../graphql/schema.json.graphql';

const client = new ApolloClient<NormalizedCacheObject>({
    uri: 'https://api.alexsamarkin.com/graphql',
    cache: new InMemoryCache(),
    typeDefs: [schema],
});

export const getApolloClient = (): ApolloClient<NormalizedCacheObject> => client;
