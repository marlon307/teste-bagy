// https://github.com/vercel/next.js/blob/canary/examples/api-routes-graphql/pages/api/graphql.js
import { ApolloServer, gql } from 'apollo-server-micro';
import data from './db';

const typeDefs = gql`
  type Query {
    data: [User!]!
  }
  type User {
    name: String
  }
`;

const resolvers = {
  Query: {
    data() {
      return data;
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const startServer = apolloServer.start();

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://studio.apollographql.com',
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }

  await startServer;
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
  return null;
}

export const config = {
  api: {
    bodyParser: false,
  },
};
