import { useRoute } from "@react-navigation/native";
import { Flex, Image, Spinner, Heading } from "native-base";

export default function Loading() {
  
  const route = useRoute();
  
  return (
    <Flex h="100%" justifyContent="center">
      {route.params && route.params.name === "Chickens" ? (
         <Image alignSelf="center"
         source={require("../../assets/images/chicken-caveirito.png")}
         alt="Chicken-Caveirito"
         w={200}
         h={200}
        />
      ) : 
      (
        <Image alignSelf="center"
        source={require("../../assets/images/caveirito.png")}
        alt="Caveirito"
        w={75}
        h={175}
      />
      )}
      
     
      <Flex flexDir="row" justifyContent="center">
        <Spinner color={route.params && route.params.name === "Chickens" ? 'chickens.100' : 'caveirito.100'} size="lg" mr={2}/>
        <Heading color={route.params && route.params.name === "Chickens" ? 'chickens.100' : 'caveirito.100'}>Carregando...</Heading>
      </Flex>    
    </Flex>
  )
}