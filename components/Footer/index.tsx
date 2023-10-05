import { Flex, Heading, HStack, IconButton, VStack } from "native-base";
import { useRoute } from "@react-navigation/native";

import { FontAwesome } from '@expo/vector-icons'; 
import { Linking } from "react-native";

export default function Footer() {
  

  const route = useRoute();

  const url = {
    whatsapp: 'https://api.whatsapp.com/send?phone=5512981473281&text=Boa%20noite!%20Quero%20fazer%20meu%20pedido!',
    instagram: 'https://www.instagram.com/caveiras.burguer/',
  }
  const redirectTo = (link: string) => {
    Linking.openURL(link);
  }
  
  return (
    <>
      <Flex
        backgroundColor={route.name === "Chickens" ? 'chickens.100' : 'caveirito.100'}
        width="100%"
        height="15%"
        alignItems="center"
        justifyContent="center"
      >
        <VStack  space={"2"}>
          
          <Heading fontWeight="600" mt="4" color="#FFFFFF" fontSize="md">Hamburguer and Tradition</Heading>
          
          <HStack space={"24"} justifyContent="center">
              <IconButton
                icon={<FontAwesome name="whatsapp" size={34} color="white" />}
                onPress={() => {
                  redirectTo(url.whatsapp);
                }}
              />
        

              <IconButton
                icon={<FontAwesome name="instagram" on size={34} color="white" />}
                onPress={() => {
                  redirectTo(url.instagram);
                }}
              />
                
          </HStack>
        </VStack>
        
      </Flex>
      
      <Flex
        backgroundColor="#000000"
        width="100%"
        height="15%"
        alignItems="center"
        safeAreaBottom
        justifyContent="start"
      >
          <Heading mt={2} color="#FFFFFF" fontWeight="700" fontSize="xs">©Caveiras Burguer Corporation</Heading>

      </Flex>
    </>
  )
}