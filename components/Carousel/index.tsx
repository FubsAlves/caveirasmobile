import { Flex, Image, Text } from 'native-base';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { useQuery } from "@apollo/client";
import GET_CAROUSELNEWS from '../../queries/carouselnews';


interface CarouselItemsProps {
    image: {
        url: string;
    }
    id: string;
}

export default function CarouselNews() {

    const dimensions = {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
      }

      const {loading, error, data} = useQuery(GET_CAROUSELNEWS);


    return (
        <Flex>
            {loading === true ? (
                console.log("Loading")
            ) : 
            (
                
                <Carousel
                loop
                width={dimensions.width}
                height={dimensions.height * 0.25}
                autoPlay={true}
                autoPlayInterval={4000}
                data={data.newss}
                scrollAnimationDuration={1500}
                /* onSnapToItem={(index) => console.log('current index:', index)} */
                renderItem={({item} : any) => (
                    <Flex
                        w="100%"
                        h="100%"
                        key={item.id}   
                    >
                        <Image w="100%" h="100%" source={{uri: item.image.url}} resizeMode="stretch" alt="news"/>
                    </Flex>
                )}
            />
            )}
      
    </Flex>
    );
}