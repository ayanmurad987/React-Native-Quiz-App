import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";

const StackNavigator = createStackNavigator({
    Home: {
        screen:HomeScreen
    }
})
  

const Navigator = createAppContainer(StackNavigator)
export default Navigator;