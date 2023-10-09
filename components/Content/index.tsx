import { Flex, ScrollView } from "native-base";
import Category from "./category";
import CategoryCard from "./categorycard";

export default function Content( {navigation} : any ) {
  return (
    
    <ScrollView>
      <Flex w="100%" h="72%" flexDirection="row" justifyContent="space-evenly" flexWrap="wrap">
        <CategoryCard navigation={navigation} category="Alou"/>
        <CategoryCard navigation={navigation}/>
        <CategoryCard navigation={navigation}/>
        <CategoryCard navigation={navigation}/>
        <CategoryCard navigation={navigation}/>
        <CategoryCard navigation={navigation}/>
        <CategoryCard navigation={navigation}/>
        <CategoryCard navigation={navigation}/>
      </Flex>
    </ScrollView>
  )
}