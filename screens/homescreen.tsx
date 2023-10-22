import { StatusBar } from "native-base";
import Content from "../components/Content";
import Header from "../components/Header";
import Menu from "../components/Menu";

import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  
  const screen = useNavigation();
  
  return (
    <>
      
        <StatusBar hidden />
        <Header/>
        <Content navigation={screen} />
        
    </>
  
  )
}