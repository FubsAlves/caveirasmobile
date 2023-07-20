import { Flex, Text, Image, HStack, Button } from "native-base";
import { TouchableHighlight, TouchableWithoutFeedback } from "react-native";


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
              source={require("../../assets/images/caveiras-rodeio.webp")}
              alt="Lançamentos"
              w="60px"
              h="50px" />


            <Image
              source={require("../../assets/images/arrow.png")}
              alt="arrow"
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
          <Text w="50%" fontWeight={600} fontSize="xl" color="#502314" textAlign="center">Combos</Text>
          <Image
            source={require("../../assets/images/caveiras-combo.webp")}
            alt="Combos"
            w="60px"
            h="50px" />

            <Image
              source={require("../../assets/images/arrow.png")}
              alt="arrow"

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
          <Text w="50%" fontWeight={600} fontSize="xl" color="#502314" textAlign="center">Assinaturas</Text>
          <Image
            source={require("../../assets/images/caveiras-rings.webp")}
            alt="Assinaturas"
            w="60px"
            h="50px"

          />

            <Image
              source={require("../../assets/images/arrow.png")}
              alt="arrow"

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
          <Text w="50%" fontWeight={600} fontSize="xl" color="#502314" textAlign="center">Tradicionais</Text>
          <Image
            source={require("../../assets/images/caveiras-quarteirao.webp")}
            alt="Tradicionais"
            w="60px"
            h="50px"

          />
         

            <Image
              source={require("../../assets/images/arrow.png")}
              alt="arrow"

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
            h="50px"

          />

            <Image
              source={require("../../assets/images/arrow.png")}
              alt="arrow"

            />

        </HStack>

      </Flex>
      </TouchableWithoutFeedback>
    </>
  )
}