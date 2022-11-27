import { gql } from '../__generated__/gql';

export const GET_CHARACTER = gql(/* GraphQL */`
  query GetCharacter($name: String) {
    characters(filter: { name: $name }) {
      results {
        id
        name
        image
      }
    }
  }
`);
