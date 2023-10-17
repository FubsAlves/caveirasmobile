import Menu from "../components/Menu";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import { FlatList, Flex, Text, Image, HStack } from "native-base";
import { View, Dimensions } from "react-native";
import Loading from "../components/Loading";
import { useRoute } from "@react-navigation/native";
import GET_SNACKS from "../queries/snacks"
import { useQuery } from "@apollo/client";
import { ReactNativeZoomableView } from "@openspacelabs/react-native-zoomable-view";
import { Modal } from "native-base";

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
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const {loading, error, data} = useQuery(GET_SNACKS);

  const dimensions = {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  }
  

  useEffect(() => {

    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const renderItem = ({ item }: { item: ItemProps }) => (
    <>
      <Flex w={Dimensions.get('window').width} alignItems="center" justifyContent="center" h="100%">
      <HStack space={4}  mt={2} alignItems="center">
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
        </HStack>
        <Text color="#502314" fontWeight={600} fontSize={20}>
            {item.name}
        </Text>
        <Flex mt={4}>
          <Image
            onLoadEnd={handleImageLoad}
            style={{
              width: dimensions.width * 0.75,
              height: dimensions.height * 0.35,
            }}
            source={{
              uri: item.imageSrc.url,
            }}
            alt={item.name}
          />
        </Flex>
        <Text color="#502314" w="90%" mt={2} fontSize="12" textAlign="center">
          {item.description}
        </Text>
        <Text color="#502314" mt={2} fontSize="2xl" fontWeight={600} textAlign="center">
          R${item.price}
        </Text>
      </Flex>
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
            <FlatList
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
              getItemLayout={(items, index) => ({ length: 300, offset: 300 * index, index })} // Specify item height and position for faster scrolling
            />
          )}
        </View>
      </Flex>
      <Menu/>
    </>
  );
}