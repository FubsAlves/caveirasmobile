import { Flex, Image, ScrollView, StatusBar, Text } from "native-base";
import Menu from "../components/Menu";
import CarouselNews from "../components/Carousel";
import News from "../components/News";
import Header from "../components/Header";

export default function NewsScreen () {
    return(
        <>
        <StatusBar hidden />
            <Flex w="100%" h="90%" backgroundColor="caveirito.100" justifyContent="center" alignItems="center">
                <Flex shadow="3" borderRadius="3xl" borderBottomRadius="none" w="100%" h="100%" backgroundColor="#FFFFFF">
                    <Header/>
                    <ScrollView indicatorStyle="black">
                        <CarouselNews/>
                        <News/>
                    </ScrollView>
                </Flex>

            </Flex>
            <Menu/>
        </>
    );
}