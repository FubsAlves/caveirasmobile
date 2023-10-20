import Menu from "../components/Menu";
import Header from "../components/Header";
import { useState, useEffect, useRef } from "react";
import { Flex, Text, Image, HStack } from "native-base";
import { View, Dimensions, TouchableWithoutFeedback } from "react-native";
import Loading from "../components/Loading";
import GET_SNACKS from "../queries/snacks"
import { useQuery } from "@apollo/client";
import { ImageZoom } from "@likashefqet/react-native-image-zoom";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { FadeInDown } from "react-native-reanimated";
import { useRoute } from "@react-navigation/native";
import LottieView from 'lottie-react-native';

interface ItemProps {
  id: number;
  name: string;
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

export default function MenuScreen () {
  
  const route = useRoute();
  const params = route.params.name;
  const animation = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const {loading, error, data} = useQuery(GET_SNACKS, {
    variables: {params},
  });


  const dimensions = {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  }
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);


  const renderItem = ({ item }: { item: ItemProps }) => (
    <>
      <GestureHandlerRootView style={{width: dimensions.width, height: "100%", alignItems:"center", justifyContent: "center"}}>
      
      <LottieView style={{position: "absolute", zIndex: 1001, width: 60, height: 60, top: "15%", left: "10%"}} autoPlay loop={true} ref={animation} source={require('../assets/animation/newSnack.json')}/>
      {<HStack space={6}  mt={2} alignItems="center">
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
        <TouchableWithoutFeedback onPress={() => {}}>
        
        <Flex zIndex={1000} mt={4} width={dimensions.width * 0.8} height={dimensions.height * 0.4}>
          
          <ImageZoom
            
            style={{
              width: dimensions.width * 0.8,
              height: dimensions.height * 0.4,
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



  const renderLoading = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Loading />
    </View>
  );

  return (
    <>
      <Header />

      <Flex w="100%" alignItems="center" h="72%" bgColor="#FFFFFF">
        <View style={{ flex: 1, flexGrow: 1, flexDirection: "column" }}>
          {isLoading ? (
            renderLoading()
          ) : (
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
          )}
        </View>
      </Flex>
      <Menu/>
    </>
  );
}