import { Flex, Image, Spinner, Heading } from "native-base";

export default function Loading() {
  return (
    <Flex h="100%" justifyContent="center">
      <Image alignSelf="center"
        source={require("../../assets/images/caveirito.png")}
        alt="Caveirito"
        w={75}
        h={175}
      />
      <Flex flexDir="row">
        <Spinner color="red.700" size="lg" mr={2}/>
        <Heading color="caveiras.100">Carregando...</Heading>
      </Flex>    
    </Flex>
  )
}