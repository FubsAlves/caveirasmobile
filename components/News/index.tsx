import { Flex, Image, Text } from 'native-base';
import { Dimensions } from 'react-native';
import { useQuery } from "@apollo/client";
import GET_NEWS from '../../queries/news';

export default function News() {

    const dimensions = {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
      }

      const {loading, error, data} = useQuery(GET_NEWS);


    return (
        <Flex>
            {loading === true ? (
                console.log("Loading")
            ) : 
            (
                
                console.log(data)
            )}
      
        </Flex>
    );
}