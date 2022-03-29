// https://github.com/vercel/next.js/blob/canary/examples/api-routes-graphql/pages/api/graphql.js
// https://www.youtube.com/watch?v=7k_2V10H5j0&ab_channel=DevSoutinho
import { ApolloServer, gql } from 'apollo-server-micro';
import { client, totalBuys, sales } from './db';

const typeDefs = gql`
  type Vendas {
    this_month: Float
    last_month: Float
  }

  type User {
    name: String
    year: Int
    meta: Int
    this_month: String
    loja: String
    vendas: [Vendas]
  }

  type Buys {
    loja: String
    sales: String
    total_sales: Float
  }

  type Sales {
    loja: String
    product: String
    value: Float
    date: String
  }

  type Query {
    data: [User!]!
    buys: [Buys]
    sales: [Sales]
  }
`;

// Ordena meu array de cliente com base o total de vendas do mês atual
const getSorted = () => {
  const result = client.sort((sotreOne, storeTwo) => {
    const calcStoreOne = sotreOne.vendas
      .reduce((acc, reducObjOne) => (
        reducObjOne.this_month ? acc + reducObjOne.this_month : acc), 0);
    const calcStoreTwo = storeTwo.vendas
      .reduce((acc, reducObjTwo) => (
        reducObjTwo.this_month ? acc + reducObjTwo.this_month : acc), 0);
    if (calcStoreOne > calcStoreTwo) return -1;
    if (calcStoreTwo < calcStoreOne) return 1;
    return 0;
  });

  return result;
};

const resolvers = {
  Query: {
    data() {
      return getSorted();
    },
    buys() {
      return totalBuys;
    },
    sales() {
      return sales;
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
