import { gql } from "@apollo/client";

const GET_SNACKS = gql`
    query getSnacks {
        snacks {
            id
            name
            description
            price
            logoSrc {
                url
            }
            secondaryLogoSrc {
                url
            }
            imageSrc {
                url
            }
        }
    }
`;

export default GET_SNACKS;