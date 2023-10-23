import { Center, Flex, Image } from 'native-base';
import { Dimensions, TouchableWithoutFeedback } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { useQuery } from "@apollo/client";
import GET_CAROUSELNEWS from '../../queries/carouselnews';
import Loading from '../Loading';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';


interface CarouselItemsProps {
    image: {
        url: string;
    }
    id: string;
}

export default function CarouselNews() {

    const navigation: NavigationProp = useNavigation();
    
    const dimensions = {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
      }

      const {loading, error, data} = useQuery<any>(GET_CAROUSELNEWS);

    return (
        <>
            {loading === true ? (
                console.log("")
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
                renderItem={({item} : any) => (
                    <TouchableWithoutFeedback onPress={() => {item.snackRef ? navigation.navigate("Menu", {name: item.snackRef.category.name, selectedSnack: item.snackRef.name}) : ""}}>
                        <Flex
                            w="100%"
                            h="100%"
                            key={item.id}   
                        >
                            <Image w="100%" h="100%" source={{uri: item.image.url}} resizeMode="stretch" alt="news"/>
                        </Flex>
                    </TouchableWithoutFeedback>
                )}
            />
            
            )}
    </>
    );
}