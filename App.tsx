import React, { useCallback, useEffect, useState } from "react";
import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, View } from "native-base";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

import HomeScreen from "./screens/homescreen";
import MenuScreen from "./screens/menuscreen";
import { THEME } from './THEME';

import client from './services/client';
import NewsScreen from "./screens/newsscreen";
import { CONFIG } from "./CONFIG";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs () {
  return(
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: {backgroundColor: '#B71105'} }}>
        <Tab.Screen
          name="News"
          component={NewsScreen}
          options={{ title: "Home", tabBarIcon: ({focused}) => {
            return (
              <MaterialIcons name="home-filled" size={28} color={focused ? '#B71105' : '#3e3e3e' } />
            )
          }, tabBarActiveTintColor: '#B71105', tabBarInactiveTintColor: "#3e3e3e", tabBarStyle: {} }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Menu", tabBarIcon: ({focused}) => {
            return <MaterialIcons name="restaurant-menu" size={28} color={focused ? '#B71105' : '#3e3e3e' }/>
          }, tabBarActiveTintColor: '#B71105', tabBarInactiveTintColor: "#3e3e3e"}}
        />
    </Tab.Navigator>
  );
}

export default function App() {

  const [appIsReady, setAppIsReady] = useState(false);

  const [fontsLoaded] = useFonts({
    'Flame-Regular': require('./assets/fonts/flame/Flame-Regular.otf'),
    'Flame-Sans': require('./assets/fonts/flame/Flame-Sans.otf'),
    'Flame-Bold': require('./assets/fonts/flame/Flame-Bold.otf'),
    'Flame-Condensed': require('./assets/fonts/flame/Flame-Condensed.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {

      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();

    const delay = 3000; // 3 seconds
    const timeoutId = setTimeout(() => {
      SplashScreen.hideAsync();
    }, delay);

    setAppIsReady(true);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ApolloProvider client={client}>
      <NativeBaseProvider theme={THEME} config={CONFIG}>
        <NavigationContainer>
          <View onLayout={onLayoutRootView} />
          <Stack.Navigator initialRouteName="News" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Tabs" component={Tabs} />
            <Stack.Screen name="Menu" component={MenuScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </ApolloProvider>
  );
}
