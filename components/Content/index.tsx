import { Flex, ScrollView } from "native-base";
import CategoryCard from "./categorycard";
import GET_CATEGORIES from "../../queries/categories";
import { useQuery, useSuspenseQuery } from "@apollo/client";
import Loading from "../Loading";
import Animated, { FadeInLeft, FadeInRight } from "react-native-reanimated";
import { Suspense } from "react";

export default function Content( {navigation} : any ) {
  
  const {error, data} = useSuspenseQuery(GET_CATEGORIES);
  

  return (
    
    <Flex h="72%" w="100%">
        <Suspense fallback={<Loading/>}>
          <ScrollView>
            <Flex w="100%" h="100%" flexDirection="row" alignItems="flex-end" justifyContent="space-evenly" flexWrap="wrap">
              
              {data.categories.map((category, index) => {
                return (
                  <Animated.View key={category.id} entering={index % 2 == 0 ? FadeInLeft.duration(600) : FadeInRight.duration(600)}>
                    <CategoryCard navigation={navigation} name={category.name} imageUrl={category.snackImage.url}/>
                  </Animated.View>
                )
              })}
              
            </Flex>
          </ScrollView>
        </Suspense>
    </Flex>
  )
}