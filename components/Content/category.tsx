import { Flex, Text, Image, HStack } from "native-base";
import { TouchableWithoutFeedback } from "react-native";


export default function Category({ navigation }: any) {

  return (
    <>
      <TouchableWithoutFeedback onPress={() => {
        navigation.navigate('Menu');
      }}>
        <Flex
          backgroundColor="#FFFFFF"
          width="100%"
          height="10%"
          borderBottomColor="#B71105"
          borderBottomWidth={6}
          justifyContent="center"
        >
          <HStack justifyContent="space-evenly" alignItems="center">
            <Text w="50%" fontWeight={600} fontSize="xl" color="#502314" textAlign="center">Lançamentos</Text>
            <Image
              source={require("../../assets/images/melt-bacon.jpg")}
              alt="Lançamentos"
              w="60px"
              h="60px" />
          </HStack>
        </Flex>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => {
        navigation.navigate('Assinaturas');
      }}>
      <Flex
        backgroundColor="#FFFFFF"
        width="100%"
        height="10%"
        borderBottomColor="#B71105"
        borderBottomWidth={6}
        justifyContent="center"
      >
        <HStack justifyContent="space-evenly" alignItems="center">
          <Text w="50%" fontWeight={600} fontSize="xl" color="#502314" textAlign="center">Assinaturas</Text>
          <Image
            source={require("../../assets/images/esqueleto-rings.jpg")}
            alt="Assinaturas"
            w="60px"
            h="60px" />
        </HStack>

      </Flex>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => {
        navigation.navigate('Tradicionais');
      }}>
      <Flex
        backgroundColor="#FFFFFF"
        width="100%"
        height="10%"
        borderBottomColor="#B71105"
        borderBottomWidth={6}
        justifyContent="center"
      >
        <HStack justifyContent="space-evenly" alignItems="center">
          <Text w="50%" fontWeight={600} fontSize="xl" color="#502314" textAlign="center">Tradicionais</Text>
          <Image
            source={require("../../assets/images/quarteirao-caveira.jpg")}
            alt="Tradicionais"
            w="60px"
            h="60px"

          />

        </HStack>

      </Flex>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => {
        navigation.navigate('Chickens');
      }}>
      <Flex
        backgroundColor="#FFFFFF"
        width="100%"
        height="10%"
        borderBottomColor="#B71105"
        borderBottomWidth={6}
        justifyContent="center"
      >
        <HStack justifyContent="space-evenly" alignItems="center">
          <Text w="50%" fontWeight={600} fontSize="xl" color="#502314" textAlign="center">Chickens</Text>
          <Image
            source={require("../../assets/images/chicken-de-luxo.jpg")}
            alt="Chickens"
            w="60px"
            h="60px"

          />
    
        </HStack>

      </Flex>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => {
        navigation.navigate('Menu');
      }}>
      <Flex
        backgroundColor="#FFFFFF"
        width="100%"
        height="10%"
        borderBottomColor="#B71105"
        borderBottomWidth={6}
        justifyContent="center"
      >
        <HStack justifyContent="space-evenly" alignItems="center">
          <Text w="50%" fontWeight={600} fontSize="xl" color="#502314" textAlign="center">Kids</Text>
          <Image
            source={require("../../assets/images/caveiras-kids.webp")}
            alt="Kids"
            w="60px"
            h="60px"

          />

        </HStack>

      </Flex>
      </TouchableWithoutFeedback>
    </>
  )
}