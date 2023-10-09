import { Button, Flex, ScrollView } from "native-base";
import Category from "./category";
import CategoryCard from "./categorycard";
import GET_CATEGORIES from "../../queries/categories";
import { useQuery } from "@apollo/client";

export default function Content( {navigation} : any ) {
  
  const {loading, error, data} = useQuery(GET_CATEGORIES);
  

  const testCategories = () => {
    console.log(data.categories[0]);
  }

  return (
    
    <ScrollView>
      <Flex w="100%" h="72%" flexDirection="row" alignItems="center" justifyContent="space-evenly" flexWrap="wrap">
        {data.categories.map((category: any) => {
          <CategoryCard navigation={navigation} category={category.name} imageUrl={category.snackImage.url}/>
        })}
        
      </Flex>
      <Button onPress={() => {
        testCategories();
      }}></Button>
    </ScrollView>
  )
}