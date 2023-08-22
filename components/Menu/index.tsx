import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Flex,Text, Image, HStack, VStack, IconButton } from "native-base";
import { TouchableWithoutFeedback } from "react-native";


export default function Menu() {


  const navigation: NavigationProp = useNavigation();

  return (
    <Flex
      
      width="100%"
      height="13%"
      justifyContent="center"
      alignItems="center"
      backgroundColor="#FFFFFF"
      borderTopColor="#dcdcdc"
      borderTopWidth={1}
    >
      <HStack alignItems="center" h="100%" w="100%">
      <TouchableWithoutFeedback onPress={() => {
        navigation.navigate('Home');
      }}>
        <VStack w="20%" h="80%" alignItems="center">
            <Flex>
                <Image
                  source={require('../../assets/images/home.png')}
                  alt="Home"
                  h="30px"
                  w="30px"
                />
            </Flex>
            <Text color="caveiras.100">Home</Text>
        </VStack>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => {
        navigation.navigate('Home');
      }}> 
        <VStack w="20%" h="80%" alignItems="center">
            <Flex>
              <Image
                source={require('../../assets/images/hamburguer.png')}
                alt="Menu"
                h="30px"
                w="30px"
              />
            </Flex>
            <Text color="caveiras.100">Menu</Text>
        </VStack>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => {
        navigation.navigate('Menu');
        }}> 
        <VStack w="20%" h="80%" alignItems="center">
            <Flex>
              <Image
                  source={require('../../assets/images/whatsapp.png')}
                  alt="Whatsapp"
                  h="30px"
                  w="30px"
              />
            </Flex>
            <Text color="caveiras.100">Wapp</Text>
        </VStack>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => {
          navigation.navigate('Menu');
        }}>
        <VStack w="20%" h="80%" alignItems="center">
            <Flex>
              <Image
                  source={require('../../assets/images/instagram.png')}
                  alt="Instagram"
                  h="30px"
                  w="30px"
              />
            </Flex>
            <Text color="caveiras.100">Insta</Text>
        </VStack>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => {
        navigation.navigate('Menu');
        }}> 
        <VStack w="20%" h="80%" alignItems="center">
            <Flex>
              <Image
                  source={require('../../assets/images/story.png')}
                  alt="Story"
                  h="30px"
                  w="30px"
              />
            </Flex>
            <Text color="caveiras.100">Story</Text>
        </VStack>
        </TouchableWithoutFeedback>
      </HStack>
    </Flex>
  );
}



