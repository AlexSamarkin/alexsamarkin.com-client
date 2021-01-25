import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import schema from '../operations/schema.json.graphql';
import { cache } from '../cache';

const client = new ApolloClient<NormalizedCacheObject>({
    uri: 'https://api.alexsamarkin.com/graphql',
    cache,
    typeDefs: [schema],
});

export const getApolloClient = (): ApolloClient<NormalizedCacheObject> => client;
