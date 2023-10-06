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
    background: "#FFFFFF",
    text: "#B71105",
  })
  

  const url = {
    whatsapp: 'https://api.whatsapp.com/send?phone=5512981473281&text=Boa%20noite!%20Quero%20fazer%20meu%20pedido!',
    instagram: 'https://www.instagram.com/caveiras.burguer/',
  }
  const redirectTo = (link: string) => {
    Linking.openURL(link);
  }

  useEffect(() => {
    switch (routeName) {
      case 'Chickens':
        setMenuColor({background: "chickens.100", text: "#FFFFFF"})
        break;
      case 'News':
        setMenuColor({background: "#FFFFFF", text: "#B71105"})
        break;
      default:
        setMenuColor({background: "#B71105", text: "#FFFFFF"}) 
        break;
    }
  }, [routeName])

  return (
    
    <Flex
      
      width="100%"
      height="10%"
      backgroundColor={menuColor.background}
      borderTopColor="#cdcdcd"
      borderTopWidth={1}
      
    
      
    >
    
      <HStack h="100%" w="100%">
  
        <VStack w="20%" h="100%" alignItems="center">
            <Text color={menuColor.text}>Home</Text>
            <Flex>
              <IconButton onPress={() => {navigation.navigate("News")}} padding="0" icon={<Ionicons name="home" size={32} color={menuColor.text} /> }/>
            </Flex>
            
        </VStack>

      <TouchableWithoutFeedback delayLongPress={1000} onLongPress={() => {alert("ALOU")}} onPress={() => {
        navigation.navigate('Home');
      }}> 
        <VStack w="20%" h="100%" alignItems="center">
            <Text color={menuColor.text}>Menu</Text>
            <Flex mt={1}>
              <IconButton padding="0" icon={<MaterialCommunityIcons name="french-fries" size={32} color={menuColor.text} />}/>
            </Flex>
            
        </VStack>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => {
          redirectTo(url.whatsapp);
        }}> 
        <VStack w="20%" h="100%" alignItems="center">
            <Text color={menuColor.text}>Wapp</Text>
            <Flex mt={1}>
              <IconButton padding={0} icon={<Ionicons name="logo-whatsapp" size={32} color={menuColor.text} />}/>
            </Flex>
            
        </VStack>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => {
          redirectTo(url.instagram);
        }}>
        <VStack w="20%" h="100%" alignItems="center">
            <Text color={menuColor.text}>Insta</Text>
            <Flex mt={1}>
              <IconButton padding={0} icon={<Ionicons name="logo-instagram" size={32} color={menuColor.text} />}/>
            </Flex>
            
        </VStack>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => {
        navigation.navigate('Menu');
        }}> 
        <VStack space={0} w="20%" h="100%" alignItems="center">
            <Text color={menuColor.text}>Story</Text>
            <Flex>
              <Image source={require("../../assets/images/red-logo.png")} w={12} h={12} alt="caveiras-logo" />
            </Flex>
        </VStack>
        </TouchableWithoutFeedback>
      </HStack>
    </Flex>
  );
}



