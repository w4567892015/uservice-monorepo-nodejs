require('./module-alias');
const { ApolloServer } = require('apollo-server-express');
const {
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginInlineTrace,
  ApolloServerPluginDrainHttpServer,
} = require('apollo-server-core');
const express = require('express');
const http = require('http');
const cors = require('cors');
const helmet = require('helmet');
const { urlencoded, json } = require('body-parser');

const { typeDefs, resolvers } = require('./schema');

const {
  NODE_ENV = 'development',
} = process.env;

const app = express();

app.set('trust proxy', true);
app.use(cors({ origin: '*' }));
app.use(urlencoded({ extended: true }));
app.use(json());

app.get('/health', (req, res) => { res.status(204).end(); });

app.use(
  helmet({
    crossOriginEmbedderPolicy: NODE_ENV !== 'development',
    contentSecurityPolicy: NODE_ENV !== 'development',
  }),
);

const httpServer = http.createServer(app);
const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  plugins: [
    ApolloServerPluginInlineTrace(),
    (NODE_ENV === 'production') ? ApolloServerPluginLandingPageDisabled() : ApolloServerPluginLandingPageLocalDefault({ embed: true, footer: false }),
    ApolloServerPluginDrainHttpServer({ httpServer }),
  ],
});

server.start().then(() => {
  server.applyMiddleware({ app });
  httpServer.listen({ port: 4000 }, () => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  });
});
