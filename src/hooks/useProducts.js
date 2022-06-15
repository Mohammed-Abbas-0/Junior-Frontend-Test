import { gql } from "@apollo/client";

export const useProducts = gql`
query{
    category{
    products{
      id
      name
      gallery
      prices{
        amount
        currency{
          symbol
        }
      }
    }
  }
}`;



