import gql from 'graphql-tag';

export const getUser = gql`{ user { id email } }`;
