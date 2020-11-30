import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import fetch from 'cross-fetch'

export const client = new ApolloClient({
  link : new HttpLink({
    uri: 'https://t5ekc4qhwbh2rpyotbzwxivunm.appsync-api.us-east-2.amazonaws.com/graphql',
    headers: {
        "x-api-key": "da2-wcjq5ne5tfbvdcm3psihryir2q",
  },
  fetch
  }),
  cache: new InMemoryCache()
});