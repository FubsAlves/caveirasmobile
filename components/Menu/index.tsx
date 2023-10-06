import { NavigationProp, useNavigation, useRoute } from "@react-navigation/native";
import { Flex, Text, HStack, VStack, IconButton, Image } from "native-base";
import { Linking, TouchableWithoutFeedback } from "react-native";

export default function Menu() {


  const navigation: NavigationProp = useNavigation();
  const route = useRoute();

  const url = {
    whatsapp: 'https://api.whatsapp.com/send?phone=5512981473281&text=Boa%20noite!%20Quero%20fazer%20meu%20pedido!',
    instagram: 'https://www.instagram.com/caveiras.burguer/',
  }
  const redirectTo = (link: string) => {
    Linking.openURL(link);
  }

  return (
    <Flex
      
      width="100%"
      height="13%"

      
      backgroundColor={route.name === "Chickens" ? 'chickens.100' : 'caveirito.100'}
      borderTopColor="#cdcdcd"
      borderTopWidth={1}
    >
      <HStack h="100%" w="100%">
      <TouchableWithoutFeedback onPress={() => {
        navigation.navigate('Home');
      }}>
        <VStack w="20%" h="100%" alignItems="center">
            <Text color="white">Home</Text>
            <Flex mt={1}>
              <Image source={require("../../assets/images/home.png")} w={8} h={8} alt="home-logo" />
            </Flex>
            
        </VStack>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback delayLongPress={1000} onLongPress={() => {alert("ALOU")}} onPress={() => {
        navigation.navigate('Home');
      }}> 
        <VStack w="20%" h="100%" alignItems="center">
            <Text color="white">Menu</Text>
            <Flex mt={1}>
              <Image source={require("../../assets/images/menu.png")} w={8} h={8} alt="menu-logo" />
            </Flex>
            
        </VStack>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => {
          redirectTo(url.whatsapp);
        }}> 
        <VStack w="20%" h="100%" alignItems="center">
            <Text color="white">Wapp</Text>
            <Flex mt={1}>
              <Image source={require("../../assets/images/whatsapp.png")} w={8} h={8} alt="whatsapp-logo" />
            </Flex>
            
        </VStack>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => {
          redirectTo(url.instagram);
        }}>
        <VStack w="20%" h="100%" alignItems="center">
            <Text color="white">Insta</Text>
            <Flex mt={1}>
              <Image source={require("../../assets/images/instagram.png")} w={8} h={8} alt="instagram-logo" />
            </Flex>
            
        </VStack>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => {
        navigation.navigate('Menu');
        }}> 
        <VStack space={0} w="20%" h="100%" alignItems="center">
            <Text color="white">Story</Text>
            <Flex>
              <Image source={require("../../assets/images/red-logo.png")} w={12} h={12} alt="caveiras-logo" />
            </Flex>
        </VStack>
        </TouchableWithoutFeedback>
      </HStack>
    </Flex>
  );
}



