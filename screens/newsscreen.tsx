import { useRoute } from "@react-navigation/native";
import { Divider, Flex, HStack, Image, ScrollView, StatusBar, Text } from "native-base";
import Menu from "../components/Menu";
import CarouselNews from "../components/Carousel";

export default function NewsScreen () {
    return(
        <>
        <StatusBar hidden />
            <Flex w="100%" h="90%" backgroundColor="caveirito.100" justifyContent="center" alignItems="center">
                <Flex shadow="3" borderRadius="3xl" borderBottomRadius="none" w="100%" h="100%" backgroundColor="#FFFFFF">
                    <Image
                        source={require('../assets/images/caveiras-logo.png')}
                        alt="Caveiras Logo"
                        h="70px"
                        w="70px"
                        alignSelf="center" />
                    <ScrollView>
                        <CarouselNews/>
                        <Flex w="100%" mb={5}>
                            <Image source={require('../assets/images/news/newschicken.jpg')} w="100%" h="210px" alt="news" />
                        </Flex>

                        <Flex w="100%" mb={2}>
                            <Image source={require('../assets/images/news/news9.png')} w="100%" h="64" alt="news" />
                        </Flex>

                    </ScrollView>
                </Flex>

            </Flex>
            <Menu/>
        </>
    );
}