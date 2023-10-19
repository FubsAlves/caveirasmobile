import { NavigationProp, useNavigation, useRoute } from "@react-navigation/native";
import { Flex, IconButton, Image } from "native-base";
import { AntDesign } from '@expo/vector-icons';
import Animated, { FadeIn, FlipInEasyY } from "react-native-reanimated";
import { Dimensions } from "react-native";

export default function Header() {
  
  const navigation: NavigationProp = useNavigation();
  const route = useRoute();

  const handleNavigate = () => {
    navigation.navigate('Home');
  };

  const dimensions = {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  }
  
  return (
    
    <Flex
    backgroundColor= {route.name === "Chickens" ? 'chickens.100' : 'caveirito.100'}
    width="100%"
    height= "18%"
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
      
      {route.name === "Chickens" ? (
        
        <Animated.Image
        entering={FlipInEasyY.duration(1000)}
        style={{height:dimensions.height * 0.12, width: dimensions.width * 0.25 }}
        source={require('../../assets/images/chickens-logo.webp')}
        alt="Chickens Logo"
      />   
      ) : (
        
        <Animated.Image
          entering={FlipInEasyY.duration(1000)}
          style={{height:dimensions.height * 0.15, width: dimensions.width * 0.25 }}
          source={require('../../assets/images/caveiras-logo.png')}
          alt="Caveiras Logo"
        /> 
      )}
      

  </Flex>
  )
}