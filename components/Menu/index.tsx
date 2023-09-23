import { NavigationProp, useNavigation, useRoute } from "@react-navigation/native";
import { Flex, Text, HStack, VStack, IconButton, Image } from "native-base";
import { Linking, TouchableWithoutFeedback } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 



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
      justifyContent="center"
      alignItems="center"
      backgroundColor={route.name === "Chickens" ? 'chickens.100' : 'caveirito.100'}
      borderTopColor="#cdcdcd"
      borderTopWidth={1}
    >
      <HStack alignItems="center" h="100%" w="100%">
      <TouchableWithoutFeedback onPress={() => {
        navigation.navigate('Home');
      }}>
        <VStack w="20%" h="100%" alignItems="center" justifyContent="center">
            <Flex>
              <Image source={require("../../assets/images/home.png")} w={8} h={8} alt="home-logo" />
            </Flex>
            <Text color="white">Home</Text>
        </VStack>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => {
        navigation.navigate('Home');
      }}> 
        <VStack w="20%" h="100%" alignItems="center" justifyContent="center">
            <Flex>
            <Image source={require("../../assets/images/menu.png")} w={8} h={8} alt="menu-logo" />
            </Flex>
            <Text color="white">Menu</Text>
        </VStack>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => {
          redirectTo(url.whatsapp);
        }}> 
        <VStack w="20%" h="100%" alignItems="center" justifyContent="center">
            <Flex>
              <Image source={require("../../assets/images/whatsapp.png")} w={8} h={8} alt="whatsapp-logo" />
            </Flex>
            <Text color="white">Wapp</Text>
        </VStack>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => {
          redirectTo(url.instagram);
        }}>
        <VStack w="20%" h="100%" alignItems="center" justifyContent="center">
            <Flex>
              <Image source={require("../../assets/images/instagram.png")} w={8} h={8} alt="instagram-logo" />
            </Flex>
            <Text color="white">Insta</Text>
        </VStack>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => {
        navigation.navigate('Menu');
        }}> 
        <VStack w="20%" h="100%" alignItems="center" justifyContent="center">
            <Flex>
              <Image source={require("../../assets/images/caveiras-logo.png")} w={8} h={8} alt="caveiras-logo" />
            </Flex>
            <Text color="white">Story</Text>
        </VStack>
        </TouchableWithoutFeedback>
      </HStack>
    </Flex>
  );
}



