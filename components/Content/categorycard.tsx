import { Flex, Text, Image } from "native-base";
import { TouchableWithoutFeedback, Dimensions } from "react-native";

export default function CategoryCard({name, imageUrl, navigation}: any) {


  const dimensions = {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  }


  return (
    <>
      <TouchableWithoutFeedback onPress={() => {
        navigation.navigate(name);
      }}>
  

          <Flex w={dimensions.width * 0.48} h={dimensions.height * 0.21} 
            bg={{
              linearGradient: {
                colors: ["caveirito.100", "#FFFFFF"],
                locations: [0.5, 0.5]
              }
            }}

            borderRadius="2xl"
            alignItems="center"
            my={2}
          > 
            <Image
              source={{uri: imageUrl}}
              alt={name}
              w="75%"
              h="70%"
              marginTop="auto"
            />

            <Text fontWeight={600} marginTop="auto" fontSize="lg" color="#502314">{name}</Text>  

          </Flex>
      </TouchableWithoutFeedback>    
    </>
  )
}