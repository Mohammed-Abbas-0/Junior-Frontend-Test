import { gql } from "@apollo/client";

export const useCategories = gql`
        query{
        categories{
            name
        }
        }`;
