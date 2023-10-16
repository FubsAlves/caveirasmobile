import { Flex, Image, Text } from 'native-base';
import { Dimensions } from 'react-native';
import { useQuery } from "@apollo/client";
import GET_NEWS from '../../queries/news';

export default function News() {

    const dimensions = {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
      }

      const {loading, error, data: news} = useQuery(GET_NEWS);


    return (
        <Flex>
            {loading === true ? (
                console.log("Loading")
            ) : 
            (
                <>
                    {news.newss.map((item) => {
                        return(
                            <Flex key={item.id} my={3} w={dimensions.width} h={dimensions.height * 0.3}>
                            <Image w="100%" h="100%" source={{uri: item.image.url}} resizeMode="stretch" alt="News"/>
                        </Flex>
                        )
                        
                    })}
                    
                </>
                
            )}
      
        </Flex>
    );
}