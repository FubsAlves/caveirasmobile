import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState, useEffect } from "react";
import { FlatList, Flex, Text, Image, HStack } from "native-base";
import { View, Dimensions } from "react-native";
import Loading from "../components/Loading";
import { itemImages } from "../logosandimages";

interface ItemProps {
  id: number;
  name: string;
  logoSrc: string;
  imageSrc: string;
  description: string;
  price: string;
}

export default function MenuScreen () {
  const screen = useNavigation();
  const [items] = useState<ItemProps[]>(itemImages);
  const [isLoading, setIsLoading] = useState(true);

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    // Simulating an asynchronous data fetching process
    setTimeout(() => {
      setIsLoading(false);
    }, 1200);
  }, []);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const renderItem = ({ item }: { item: ItemProps }) => (
    <>
      <Flex w={Dimensions.get('window').width} alignItems="center" h="100%">
        <HStack space={4} alignItems="center" mt={2}>
          <Image
            source={{
              uri: item.logoSrc,
            }}
            alt={item.name}
            h={12}
            w={12}
          />

          <Text color="#502314" fontWeight={600} fontSize={20}>
            {item.name}
          </Text>
        </HStack>
        <Flex mt={4}>
            <Image
              onLoadEnd={handleImageLoad}
              style={{
                width: 250,
                height: 250,
              }}
              source={{
                uri: item.imageSrc,
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

      <Flex w="100%" alignItems="center" h="60%" bgColor="#FFFFFF">
        <View style={{ flex: 1, flexGrow: 1, flexDirection: "column" }}>
          {isLoading ? (
            renderLoading()
          ) : (
            <FlatList
              data={items}
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
      <Footer />
    </>
  );
}