import {
  ApolloClient,
  InMemoryCache,
} from '@apollo/client';

// const url = 'https://teste-bagy.vercel.app/api/graphql' || 'http://localhost:3000/api/graphql';

const client = new ApolloClient({
  uri: 'https://teste-bagy.vercel.app/api/graphql',
  cache: new InMemoryCache(),
});

export default client;
