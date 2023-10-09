import { Flex, Text, Image } from "native-base";
import { TouchableWithoutFeedback } from "react-native";


export default function CategoryCard({category, price}: any) {

  return (
    <>
        <TouchableWithoutFeedback onPress={() => {
        
        }}>
            <Flex w="48%" h="30%" bg={{
                linearGradient: {
                    colors: ["caveirito.100", "#FFFFFF"],
                    locations: [0.5, 0.5]
                    
                }
            }}
            borderRadius="2xl"
            shadow={6}
            alignItems="center"
            my={2}
            >
                <Image
                    source={require("../../assets/images/chicken-de-luxo.png")}
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