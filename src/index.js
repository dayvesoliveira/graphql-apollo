const { GraphQLServer } = require("graphql-yoga");
const mongoose = require("mongoose");
// mongoose.Promise = global.Promise;

const path = require('path');
const resolvers = require('./users/resolvers');
const schema = require('./users/schema.graphql');

mongoose.connect("mongodb://mongodb:27017/graphqlnode", {
  useNewUrlParser: true
})
.catch(error => console.log(error));

const server = new GraphQLServer({
    typeDefs: [schema],
    resolvers
});

server.start((_)=>{
    console.log(_.port)
});