import gql from 'graphql-tag';

export const signOut = gql`mutation { signout { email id } }`;
