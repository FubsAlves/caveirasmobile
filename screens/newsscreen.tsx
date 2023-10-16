import { Flex, Image, ScrollView, StatusBar, Text } from "native-base";
import Menu from "../components/Menu";
import CarouselNews from "../components/Carousel";
import News from "../components/News";

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
                        <News/>

                    </ScrollView>
                </Flex>

            </Flex>
            <Menu/>
        </>
    );
}