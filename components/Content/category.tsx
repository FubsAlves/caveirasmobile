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
          height="12%"
          borderBottomColor="#B71105"
          borderBottomWidth={3}
          justifyContent="center"
        >
          <HStack justifyContent="space-evenly" alignItems="center">
            <Text w="50%" fontWeight={600} fontSize="xl" color="#502314" textAlign="center">Lançamentos</Text>
            <Image
              source={require("../../assets/images/melt-bacon.jpg")}
              alt="Lançamentos"
              w="70px"
              h="70px" />
          </HStack>
        </Flex>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => {
        navigation.navigate('Assinaturas');
      }}>
      <Flex
        backgroundColor="#FFFFFF"
        width="100%"
        height="12%"
        borderBottomColor="#B71105"
        borderBottomWidth={3}
        justifyContent="center"
      >
        <HStack justifyContent="space-evenly" alignItems="center">
          <Text w="50%" fontWeight={600} fontSize="xl" color="#502314" textAlign="center">Assinaturas</Text>
          <Image
            source={require("../../assets/images/esqueleto-rings.jpg")}
            alt="Assinaturas"
            w="70px"
            h="70px" />
        </HStack>

      </Flex>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => {
        navigation.navigate('Tradicionais');
      }}>
      <Flex
        backgroundColor="#FFFFFF"
        width="100%"
        height="12%"
        borderBottomColor="#B71105"
        borderBottomWidth={3}
        justifyContent="center"
      >
        <HStack justifyContent="space-evenly" alignItems="center">
          <Text w="50%" fontWeight={600} fontSize="xl" color="#502314" textAlign="center">Tradicionais</Text>
          <Image
            source={require("../../assets/images/quarteirao-caveira.jpg")}
            alt="Tradicionais"
            w="70px"
            h="70px"

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
        height="12%"
        borderBottomColor="#B71105"
        borderBottomWidth={3}
        justifyContent="center"
      >
        <HStack justifyContent="space-evenly" alignItems="center">
          <Text w="50%" fontWeight={600} fontSize="xl" color="#502314" textAlign="center">Chickens</Text>
          <Image
            source={require("../../assets/images/chicken-de-luxo.jpg")}
            alt="Chickens"
            w="70px"
            h="70px"

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
        height="12%"
        borderBottomColor="#B71105"
        borderBottomWidth={3}
        justifyContent="center"
      >
        <HStack justifyContent="space-evenly" alignItems="center">
          <Text w="50%" fontWeight={600} fontSize="xl" color="#502314" textAlign="center">Bebidas</Text>
          <Image
            source={require("../../assets/images/bebidas.png")}
            alt="bebidas"
            w="70px"
            h="70px"

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
        height="12%"
        justifyContent="center"
      >
        <HStack justifyContent="space-evenly" alignItems="center">
          <Text w="50%" fontWeight={600} fontSize="xl" color="#502314" textAlign="center">Porções</Text>
          <Image
            source={require("../../assets/images/caveiras-kids.webp")}
            alt="Chickens1s"
            w="70px"
            h="70px"

          />
    
        </HStack>

      </Flex>
      </TouchableWithoutFeedback>
    </>
  )
}