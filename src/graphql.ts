import { gql } from '@apollo/client';

export const GET_CONTINENTS = gql`
  query Continents {
    continents {
      code
      name
    }
  }
`;

export const GET_COUNTRIES_BY_CONTINENT = gql`
  query Countries($continentCode: ID!) {
    continent(code: $continentCode) {
      countries {
        code
        name
      }
    }
  }
`;

export const GET_COUNTRY_DETAILS = gql`
  query Country($countryCode: ID!) {
    country(code: $countryCode) {
      name
      capital
      currency
      emojiU
    }
  }
`;
