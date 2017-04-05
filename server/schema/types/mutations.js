const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
} = graphql;

const UserType = require('./user_type');

const AuthService = require('../../services/auth');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        email: {type: GraphQLString},
        password: {type: GraphQLString},
      },
      resolve(parentValue, {email, password}, req) {
        // call is async, so we have to return (not just call) AuthService.signup, since it returns Promise
        return AuthService.signup({email, password, req});
      },
    },
    signout: {
      type: UserType,
      resolve(parentValue, args, req) {
        // cache user object from Passports session
        const {user} = req;
        // call Passports logout method
        req.logout();
        return user;
      },
    },
    signin: {
      type: UserType,
      args: {
        email: {type: GraphQLString},
        password: {type: GraphQLString},
      },
      resolve(parentValue, {email, password}, req) {
        return AuthService.login({email, password, req});
      },
    },
  },
});

module.exports = mutation;
