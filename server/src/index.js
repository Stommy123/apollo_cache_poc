import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { typeDefs } from './graphql/types';
import { rootResolver as resolvers } from './graphql/resolvers/';

dotenv.config();

const app = express();

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const server = new ApolloServer({ typeDefs, resolvers, playground: true });

server.applyMiddleware({ app });

const PORT = process.env.PORT || 4000;

app.listen(PORT, _ => console.log(`Listening on port ${PORT}/graphql`));
