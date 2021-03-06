const { GraphQLServer } = require("graphql-yoga");
const mongoose = require("mongoose");

mongoose.Promise = Promise;

const resolvers = require('./users/resolvers');
const schema = require('./users/schema.graphql');

const DATABASE_URL = "mongodb://mongodb";

mongoose.connect(`${DATABASE_URL}/graphqlnode`, {
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