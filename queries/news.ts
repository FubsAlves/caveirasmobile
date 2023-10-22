import { gql } from "@apollo/client";

const GET_NEWS = gql`
    query CarouselNews {
        newss(where: { isCarouselItem: false }, orderBy: updatedAt_DESC) {
        id
        image {
            url
        }

        }
    } 
`;

export default GET_NEWS;



