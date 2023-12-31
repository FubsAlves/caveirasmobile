import Header from "../components/Header";
import { useRef, Suspense, useState, useEffect } from "react";
import { Flex, Text, Image, HStack } from "native-base";
import { View, Dimensions, TouchableWithoutFeedback } from "react-native";
import Loading from "../components/Loading";
import GET_SNACKS from "../queries/snacks"
import { useQuery, useSuspenseQuery } from "@apollo/client";
import { ImageZoom } from "@likashefqet/react-native-image-zoom";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { FadeInDown } from "react-native-reanimated";
import { useRoute } from "@react-navigation/native";
import LottieView from 'lottie-react-native';
import GET_NEWESTSNACKS from "../queries/newestsnacks";

interface ItemProps {
  id: number;
  name: string;
  isNew: boolean;
  logoSrc?: ImageSource;
  secondaryLogoSrc?: ImageSource;
  imageSrc?: ImageSource;
  description: string;
  price: string;
  category?: string;
}

interface ImageSource {
  url: string;
}

export default function MenuScreen() {

  const route = useRoute();
  const params = route.params.name;
  const snackRef = route.params.selectedSnack;
  const QUERY = params === "Lançamentos" ? GET_NEWESTSNACKS : GET_SNACKS;
  const animation = useRef(null);
  const { loading, error, data } = useQuery(QUERY, 
    {
      
    variables: { params },
    }
  );




  const dimensions = {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  }


  const renderItem = ({ item }: { item: ItemProps }) => (
    <>
      <GestureHandlerRootView style={{ width: dimensions.width, height: "100%", alignItems: "center", justifyContent: "center" }}>

        {<HStack space={6} mt={4} alignItems="center">
        
          {item.logoSrc &&
            <Image
              source={{
                uri: item.logoSrc.url,
              }}
              alt={item.name}
              h={12}
              w={12}
            />
          }
  
          {item.secondaryLogoSrc &&

            <Image
              source={{
                uri: item.secondaryLogoSrc.url,
              }}
              alt={item.name}
              h={12}
              w={12}
            />

          }
        </HStack>}
        
        <Text color="#502314" fontWeight={600} fontSize={20}>
          {item.name}
        </Text>
        <TouchableWithoutFeedback onPress={() => { }}>

          <Flex zIndex={1000} mt={4} width={dimensions.width * 0.8} height={dimensions.height * 0.4}>
            {item.isNew || params === "Lançamentos" ? <LottieView style={{position: "absolute", top: '5%', width: 55, height: 55 }} autoPlay loop={true} ref={animation} source={require('../assets/animation/newSnack.json')} /> : ""}
            <ImageZoom

              style={{
                width: dimensions.width * 0.8,
                height: dimensions.height * 0.3,
              }}
              source={{
                uri: item.imageSrc.url,
              }}
              alt={item.name}
            />
          </Flex>

        </TouchableWithoutFeedback>
        <Text color="#502314" w="90%" mt={2} fontSize="12" textAlign="center">
          {item.description}
        </Text>
        <Text color="#502314" mt={2} fontSize="2xl" fontWeight={600} textAlign="center">
          R${item.price}
        </Text>
      </GestureHandlerRootView>
    </>

  );


  return (
    <>
      <Header />

      <Flex w="100%" alignItems="center" h="82%" bgColor="#FFFFFF">
        <View style={{ flex: 1, flexGrow: 1, flexDirection: "column" }}>

          {loading ? (<Loading/>) : (
            <Animated.FlatList
              entering={FadeInDown.duration(500)}
              data={data.snacks}
              style={{ flex: 1, flexDirection: "row" }}
              renderItem={renderItem}
              pagingEnabled={true}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              removeClippedSubviews={true} // Optimize performance by unmounting off-screen items
              initialNumToRender={3} // Number of items to render initially
              maxToRenderPerBatch={1} // Number of items to render in each batch
              windowSize={3} // Number of items in the visible window
            />
            ) }
        </View>
      </Flex>
    </>
  );
}