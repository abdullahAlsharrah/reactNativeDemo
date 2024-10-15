// Import necessary libraries and components from React and React Navigation
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // For creating a stack navigator

import Home from "../components/Home"; // Home component, possibly listing products or acting as the main screen
import ProductDetails from "../components/ProductDetails"; // ProductDetails component, displaying specific product info

// Create a native stack navigator
const Stack = createNativeStackNavigator();

const ProductsNavigator = () => {
  return (
    // Stack.Navigator sets up the stack navigation between screens
    <Stack.Navigator initialRouteName="Home">
      {/* Home is set as the initial screen when the stack is loaded */}
      {/* Define the first screen - Home */}
      <Stack.Screen
        name="Home" // The name of this screen
        component={Home} // Component rendered when this screen is active
      />
      {/* Define the second screen - ProductDetails */}
      <Stack.Screen
        name="Product details" // The name of this screen
        component={ProductDetails} // Component rendered when this screen is active
      />
    </Stack.Navigator>
  );
};

export default ProductsNavigator; // Export the ProductsNavigator component
