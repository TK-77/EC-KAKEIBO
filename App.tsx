import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
// react navigation ライブラリ
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import "react-native-gesture-handler"; 
// Screens
import { Input } from "./src/InputScreen";
import { Main } from "./src/MainScreen";

import Ionicons from "react-native-vector-icons/Ionicons";

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = "ios-information-circle";

            if (route.name === "Input") {
              iconName = focused 
                ? "ios-create" 
                : "ios-create";
            } else if (route.name === "Main") {
              iconName = focused ? "ios-podium" : "ios-podium";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Input" component={Input} />
        <Tab.Screen name="Main" component={Main} />
      </Tab.Navigator>

      {/* <Stack.Navigator>
        <Stack.Screen
          name='Input'
          component={Input}
        />
        <Stack.Screen
          name='Main'
          component={Main}
        />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
