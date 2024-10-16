// Import necessary libraries and components from React, React Native, and Expo Vector Icons
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import CategoriesList from "./CategoriesList"; // Component for displaying categories
import AntDesign from "@expo/vector-icons/AntDesign"; // Icon library from Expo
import ProductList from "./ProductList"; // Component for displaying a list of products

const Home = () => {
  return (
    // Main container for the Home component
    <View>
      {/* Search bar and filter icon container */}
      <View style={styles.searchContainer}>
        {/* Search input field */}
        <TextInput
          placeholder="Search by name" // Placeholder text for the search bar
          style={styles.searchBar} // Apply styles to the search bar
        />
        {/* Filter button */}
        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: "#e9e9e9", // Light background for the filter button
            borderRadius: "100%", // Circular shape for the button
          }}>
          {/* Filter icon from AntDesign */}
          <AntDesign name="filter" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {/* Display categories and products */}
      <CategoriesList />
      <ProductList />
    </View>
  );
};

export default Home; // Export the Home component

// Define styles for the component
const styles = StyleSheet.create({
  searchBar: {
    width: "80%", // The search bar takes up 80% of the width
    backgroundColor: "#e9e9e9", // Light gray background color
    margin: 10, // Margin around the search bar
    padding: 15, // Padding inside the search bar
    borderRadius: 20, // Rounded corners for the search bar
  },
  searchContainer: {
    flexDirection: "row", // Horizontal layout for the search bar and filter button
    justifyContent: "space-around", // Space the search bar and button evenly
    alignItems: "center", // Align items vertically in the center
  },
});
