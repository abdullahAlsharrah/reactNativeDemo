// Import necessary libraries and components from React Native and React Navigation
import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; // For bottom tab navigation

import CategoriesList from "../components/CategoriesList"; // Custom component for displaying categories
import ProductsNavigator from "./ProductsNavigator"; // Navigator component for handling product-related screens

// Create a bottom tab navigator
const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    // Tab.Navigator sets up the navigation between different tabs
    <Tab.Navigator>
      {/* Define the first tab - ProductsNavigator */}
      <Tab.Screen
        name="Main" // The label for the tab
        component={ProductsNavigator} // Component rendered for this tab
        options={{ header: () => false }} // Disable the header for this screen
      />
      {/* Define the second tab - CategoriesList */}
      <Tab.Screen
        name="Home" // Label for the Home tab
        component={CategoriesList} // Component rendered for this tab
      />
    </Tab.Navigator>
  );
};

export default MainTab; // Export the MainTab component for use in other parts of the app
