import gql from "graphql-tag";

export const ALL_CHARACTERS = gql`
  query AllCharacters {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;
