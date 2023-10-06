import { NavigationProp, useNavigation, useRoute } from "@react-navigation/native";
import { Flex, IconButton, Image } from "native-base";
import { AntDesign } from '@expo/vector-icons';

export default function Header() {
  
  const navigation: NavigationProp = useNavigation();
  const route = useRoute();

  const handleNavigate = () => {
    navigation.navigate('Home');
  };
  
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
        <Image 
        source={require('../../assets/images/chickens-logo.webp')}
        alt="Caveiras Logo"
        h="100px"
        w="100px"
        />   
      ) : (
        <Image 
        source={require('../../assets/images/caveiras-logo.png')}
        alt="Caveiras Logo"
        h="100px"
        w="100px"
        /> 
      )}
      

  </Flex>
  )
}