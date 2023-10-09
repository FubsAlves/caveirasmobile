import { Button, Flex, ScrollView } from "native-base";
import Category from "./category";
import CategoryCard from "./categorycard";
import GET_CATEGORIES from "../../queries/categories";
import { useQuery } from "@apollo/client";

export default function Content( {navigation} : any ) {
  
  const {loading, error, data} = useQuery(GET_CATEGORIES);
  

  return (
    
    <ScrollView>
      <Flex w="100%" h="100%" flexDirection="row" alignItems="flex-end" justifyContent="space-evenly" flexWrap="wrap">
        {console.log(data)}
        {/* <CategoryCard navigation={navigation} name={data.categories[0].name} imageUrl={data.categories[0].snackImage.url}/>
        <CategoryCard navigation={navigation} name={data.categories[0].name} imageUrl={data.categories[0].snackImage.url}/>
        <CategoryCard navigation={navigation} name={data.categories[0].name} imageUrl={data.categories[0].snackImage.url}/> */}
      </Flex>
    </ScrollView>
  )
}