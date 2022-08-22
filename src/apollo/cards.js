import {gql} from "@apollo/client";

export const ALL_CARDS = gql`
    query {
        categories{
            products{
                id,
                name,
                inStock,
                gallery,
                category,
                brand,
                description,
                prices{
                    amount
                    currency{
                        label
                    }
                }
                attributes{
                    name
                    items{
                        value
                    }
                }
            }
        }
    }
`;