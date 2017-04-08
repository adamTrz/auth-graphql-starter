import gql from 'graphql-tag';

export const signOut = gql`mutation { signout { email id } }`;

export const signIn = gql`
  mutation SignIn($email: String, $password: String) {
    signin(email: $email, password: $password) {
      email id
    }
  }
`;

export const signUp = gql`
mutation SignUp($email: String, $password: String) {
  signup(email: $email, password: $password) {
    email id
  }
}
`;
