import { useRoute } from "@react-navigation/native";
import { Divider, FlatList, Flex, HStack, Image, ScrollView, Text } from "native-base";

export default function NewsScreen () {
    return(
        <Flex w="100%" h="100%" backgroundColor="caveirito.100" justifyContent="center" alignItems="center">
            <Flex shadow="3" borderRadius="3xl" borderBottomRadius="none" w="90%" h="90%" backgroundColor="#FFFFFF">
                <Image 
                    source={require('../assets/images/caveiras-logo.png')}
                    alt="Caveiras Logo"
                    h="70px"
                    w="70px"
                    alignSelf="center"
                />
                <Divider bgColor="caveirito.100"/>
                <ScrollView>
                    <Flex w="100%">
                        <Image source={require('../assets/images/news/news3.png')} alt="news" />
                    </Flex>
                    <HStack alignSelf="center">
                        <Text color="secrets.100" fontSize="2xl">●</Text>
                        <Text color="secrets.100" fontSize="2xl">●</Text>
                        <Text color="secrets.100" fontSize="2xl">●</Text>
                        <Text color="secrets.100" fontSize="2xl">●</Text>
                    </HStack>
                    <Flex w="100%" mb="5">
                        <Image source={require('../assets/images/news/news11.png')} alt="news" />
                    </Flex>
                    
                    <Flex w="100%">
                        <Image source={require('../assets/images/news/news9.png')} alt="news" />
                    </Flex>
                    
                </ScrollView>
            </Flex>
            
        </Flex>
    );
}