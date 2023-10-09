import { NavigationProp, useNavigation, useRoute } from "@react-navigation/native";
import { Flex, Text, HStack, VStack, IconButton, Image } from "native-base";
import { Linking, TouchableWithoutFeedback } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { useEffect, useState } from "react";



export default function Menu() {


  const navigation: NavigationProp = useNavigation();
  const {name: routeName} = useRoute();
  const [menuColor, setMenuColor] = useState({
    background: "#f7f7f7",
    text: "#3e3e3e",
  })
  

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
      height="10%"
      backgroundColor={menuColor.background}
      shadow={8}
      borderTopRadius="md"
    >
    
      <HStack h="80%" w="100%">
  
        <VStack w="20%" h="90%" alignItems="center">
            <Flex mt={1}>
              <IconButton onPress={() => {navigation.navigate("News")}} padding={0} icon={<Ionicons name="home" size={28} color={menuColor.text} /> }/>
            </Flex>
            <Text color={menuColor.text} fontWeight="400.normal" fontSize="2xs">Home</Text>
        </VStack>
      <TouchableWithoutFeedback delayLongPress={1000} onLongPress={() => {alert("ALOU")}} onPress={() => {
        navigation.navigate('Home');
      }}> 
        <VStack w="20%" h="90%" alignItems="center">
            <Flex mt={1}>
              <IconButton padding="0" icon={<MaterialCommunityIcons name="french-fries" size={28} color="#E91606" />}/>
            </Flex>
            <Text color="#E91606" fontWeight="300.bold" fontSize="2xs">Menu</Text>
        </VStack>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => {
          redirectTo(url.whatsapp);
        }}> 
        <VStack w="20%" h="90%" alignItems="center">
            <Flex mt={1}>
              <IconButton padding={0} icon={<Ionicons name="logo-whatsapp" size={28} color={menuColor.text} />}/>
            </Flex>
            <Text color={menuColor.text} fontWeight="400.normal" fontSize="2xs">Wapp</Text>
        </VStack>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => {
          redirectTo(url.instagram);
        }}>
        <VStack w="20%" h="90%" alignItems="center">
            <Flex mt={1}>
              <IconButton padding={0} icon={<Ionicons name="logo-instagram" size={28} color={menuColor.text} />}/>
            </Flex>
            <Text color={menuColor.text} fontWeight="400.normal" fontSize="2xs">Insta</Text>
        </VStack>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => {
        navigation.navigate('Menu');
        }}> 
        <VStack space={0} w="20%" h="90%"alignItems="center">
            <Flex>
              <Image source={require("../../assets/images/caveiras-logo.png")} w={9} h={9} alt="caveiras-logo" />
            </Flex>
            <Text color={menuColor.text} fontWeight="400.normal" fontSize="2xs">Story</Text>
        </VStack>
        </TouchableWithoutFeedback>
      </HStack>
      <Flex w="100%" h="20%" borderTopWidth="2" borderTopColor="#E91606" backgroundColor="#B71105"></Flex>
    </Flex>
  );
}



