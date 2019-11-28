const UserSchemaGraphQL = `
    type User {
        id: ID!
        name: String!
        email: String!
    }

    type Query {
        users: [User!]!
        user(id: ID!): User
    }

    type Mutation {
        createUser(name: String!, email: String!): User
        deleteUser(id: ID!): User
    }
`;

module.exports = UserSchemaGraphQL;