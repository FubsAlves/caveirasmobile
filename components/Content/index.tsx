import { Button, Flex, ScrollView } from "native-base";
import Category from "./category";
import CategoryCard from "./categorycard";
import GET_CATEGORIES from "../../queries/categories";
import { useQuery } from "@apollo/client";
import Loading from "../Loading";

export default function Content( {navigation} : any ) {
  
  const {loading, error, data} = useQuery(GET_CATEGORIES);
  

  return (
    
    <Flex h="72%" w="100%">
      {loading ? 
      (
        <Loading/>
      ) : (
        <ScrollView>
          <Flex w="100%" h="100%" flexDirection="row" alignItems="flex-end" justifyContent="space-evenly" flexWrap="wrap">
            
            {data.categories.map((category) => {
              return (
                <CategoryCard navigation={navigation} name={category.name} imageUrl={category.snackImage.url}/>
              )
            })}
            
          </Flex>
        </ScrollView>
      )}
    </Flex>
  )
}