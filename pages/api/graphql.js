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
    last_month: String
    total_billing: Float
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
    emphasis: User
    buys: [Buys]
    sales: [Sales]
  }
`;

const getMaxValue = () => {
  const result = client.reduce((acc, objectStore) => {
    const maxValue = acc.total_billing > objectStore.total_billing;
    return maxValue ? acc : objectStore;
  }, { total_billing: 0 });
  return result;
};

// console.log(getMaxValue());

const resolvers = {
  Query: {
    data() {
      return client;
    },
    emphasis() {
      return getMaxValue();
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
