const { GraphQLServer } = require("graphql-yoga");
const mongoose = require("mongoose");
const path = require('path');
const resolvers = require('./users/resolvers');
const schema = require('./users/schema.graphql');

mongoose.connect("mongodb://localhost:27017/graphqlnode", {
  useNewUrlParser: true
});

const server = new GraphQLServer({
    typeDefs: [schema],
    resolvers
});

server.start((_)=>{
    console.log(_.port)
});