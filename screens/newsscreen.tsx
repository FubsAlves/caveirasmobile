import { useRoute } from "@react-navigation/native";
import { Divider, Flex, HStack, Image, ScrollView, StatusBar, Text } from "native-base";
import Menu from "../components/Menu";

export default function NewsScreen () {
    return(
        <>
        <StatusBar hidden />
            <Flex w="100%" h="90%" backgroundColor="caveirito.100" justifyContent="center" alignItems="center">
                <Flex shadow="3" borderRadius="3xl" borderBottomRadius="none" w="90%" h="95%" backgroundColor="#FFFFFF">
                    <Image
                        source={require('../assets/images/caveiras-logo.png')}
                        alt="Caveiras Logo"
                        h="70px"
                        w="70px"
                        alignSelf="center" />
                    <Divider bgColor="caveirito.100" />
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
                            <Image source={require('../assets/images/news/newschicken.jpg')} w="100%" h="210px" alt="news" />
                        </Flex>

                        <Flex w="100%">
                            <Image source={require('../assets/images/news/news9.png')} alt="news" />
                        </Flex>

                    </ScrollView>
                </Flex>

            </Flex>
            <Menu/>
        </>
    );
}