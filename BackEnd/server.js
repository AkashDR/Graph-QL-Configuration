const { ApolloServer, gql } = require('apollo-server');

const students = [
  {
    id: "S1001",
    email: "mohtasim@sample.org",
    firstName: "Mohtashim",
    lastName: "Mohammad",
  },
  {
    id: "S1002",
    email: "kannan@sample.org",
    firstName: "Kannan",
    lastName: "Sudhakaran",
  },
  {
    id: "S1003",
    email: "kiran@sample.org",
    firstName: "Kiran",
    lastName: "john",
  },
  {
    id: "S1004",
    email: "kiran@sample.org",
    firstName: "Tim",
    lastName: "George",
  },
];

const typeDefs = gql`
  type Student {
    id: String
    email: String
    firstName: String
    lastName: String
  }

  type Query {
    students: [Student]
  }
`;

const resolvers = {
  Query: {
    students: () => students,
  },
};

// Apollo Server setup
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
server.listen().then(({ url }) => {
  console.log(`Server running on ${url}`);
});
