const graphql = require('graphql');
const {GraphQLObjectType, GraphQLID} = graphql;
const UserType = require('./user_type');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // return currently logged user from Passport:
    user: {
      type: UserType,
      resolve(parentValue, args, req) {
        // ('req' comes from Passport. If logged, will have prop user. Else, req.user === undefined)
        return req.user;
      },
    },
  },
});

module.exports = RootQueryType;
