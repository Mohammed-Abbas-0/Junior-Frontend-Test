import { gql } from "@apollo/client";

export const useCurrencies = gql`
      query{
        currencies{
            label
            symbol
        }
        }`;
