import { gql } from "@apollo/client";

const GET_CAROUSELNEWS = gql`
    query CarouselNews {
        newss(where: {isCarouselItem: true}) {
        id
        image {
            url
        }

        }
    } 
`;

export default GET_CAROUSELNEWS;



