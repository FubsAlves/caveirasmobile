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
                <>
                    <Flex my={3} w={dimensions.width} h={dimensions.height * 0.35}>
                        <Image w="100%" h="100%" zIndex={3} source={{uri: "https://media.graphassets.com/922iJxu5TayXnJbIGma7"}} resizeMode="stretch" alt="News"/>
                        {/* <Flex w="100%" justifyContent="center" h="25%" bottom="0%" zIndex={4} position="absolute" opacity={0.7}
                            bg={{
                                linearGradient: {
                                    colors: ["gray.400", "black"],
                                    locations: [0.5, 0.5]
                                }
                            }}
                        >
                            <Text>O mais novo da família</Text>
                        </Flex> */}
                    </Flex>
                    <Flex my={3} bgColor="cyan.800" w={dimensions.width} h={dimensions.height * 0.35}></Flex>
                    {console.log(data.newss)}
                </>
                
            )}
      
        </Flex>
    );
}