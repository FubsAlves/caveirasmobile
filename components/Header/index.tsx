import { useNavigation, useRoute } from "@react-navigation/native";
import { Flex, IconButton, Image } from "native-base";
import { AntDesign } from '@expo/vector-icons'; 
import { useEffect, useState } from "react";

export default function Header() {
  
  const navigation = useNavigation();
  const route = useRoute()


  const handleNavigate = () => {
    navigation.navigate('Home');
  };
  
  return (
    <Flex
    backgroundColor="#B71105"
    width="100%"
    height= "20%"
    justifyContent="center"
    alignItems="center"
    safeArea
  >  

      {route.name !== "Home" ? (
        <IconButton
        position="absolute"
        top="10%"
        left="0%"
        icon={<AntDesign name="arrowleft" size={32} color="white"/>}
        onPress={()=>{
          handleNavigate();
        }}
        
      />
      ) : ""}
      
      <Image
        source={require('../../assets/images/caveiras-logo.png')}
        alt="Caveiras Logo"
        h="130px"
        w="130px"
      />   

  </Flex>
  )
}