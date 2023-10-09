import { Flex, Text, Image } from "native-base";
import { TouchableWithoutFeedback } from "react-native";


export default function CategoryCard({category, imageUrl, navigation}: any) {

    


  return (
    <>
        <TouchableWithoutFeedback onPress={() => {
            navigation.navigate(category);
        }}>
            <Flex w="48%" h="30%" bg={{
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
                    alt="Chickens"
                    w="120px"
                    h="100px"
                    marginTop="auto"
                    
                />
            
            <Text fontWeight={600} marginTop="auto" marginBottom="1/6" fontSize="lg" color="#502314">{category}</Text>  
            </Flex>
        </TouchableWithoutFeedback>
        
    </>
  )
}