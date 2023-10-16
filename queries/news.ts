import { gql } from "@apollo/client";

const GET_NEWS = gql`
    query CarouselNews {
        newss(where: {isCarouselItem: false}) {
        id
        image {
            url
        }

        }
    } 
`;

export default GET_NEWS;



