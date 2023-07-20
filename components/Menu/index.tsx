import { Flex,Text, Image, HStack } from "native-base";

interface ItemProps {
  id: number;
  name: string;
  logoSrc: string;
  imageSrc: string;
  description: string;
  price: string;
}

export default function Menu( item : ItemProps ) {

  return (
    <>
      <Flex key={item.id} w="100%" h="15%" flexDir="row" justifyContent="center" alignItems="center">
        <HStack space="3" alignItems="center">
          <Image
            source={{ uri: item.logoSrc }}
            alt="Quarteirão Logo"
            h={12}
            w={12} />

          <Text color="#502314" fontWeight={600} fontSize={20}>{item.name}</Text>
        </HStack>
      </Flex>
      <Flex w="100%" mt={4} h="85%" alignItems="center">
        <Image
          source={{ uri: item.imageSrc }}
          alt="Quarteirao"
          w="55%"
          h="50%" />
        <Text color="#502314" mt={2} fontSize="12" textAlign="center">
          {item.description}
        </Text>
      </Flex>
    </>
  );
}



{/* <Flex w="100%" h="50%" backgroundColor="#FFFFFF">
        <Flex key={item.id} w="100%" h="15%" flexDir="row" justifyContent="center" alignItems="center">
          <HStack  space="3" alignItems="center">
            <Image
              source={{ uri: item.logoSrc }}
              alt="Quarteirão Logo"
              h={12}
              w={12}
            />
          
          <Text color="#502314" fontWeight={600} fontSize={20}>{ item.name }</Text>
          </HStack>
          
        </Flex>
        <Flex w="100%" mt={4} h="85%"alignItems="center"> 
              <Image
                source={{ uri: item.imageSrc }}
                alt="Quarteirao"
                w="55%"
                h="50%"
                
              />
              <Text color="#502314" mt={2} fontSize="12" textAlign="center">
                {item.description}
                
              </Text>
              
        
        </Flex>
    </Flex> */}