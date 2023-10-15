import { StatusBar } from "native-base";
import Header from "../components/Header";
import Menu from "../components/Menu";
import CarouselNews from "../components/Carousel";

export default function CarouselScreen() {
  
  return (
    <>
      
        <StatusBar hidden />
        <Header/>
        <CarouselNews/>
        <Menu/>
        
    </>
  
  )
}