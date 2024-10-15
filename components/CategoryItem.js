// Import necessary libraries and components from React and React Native
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const CategoryItem = ({ item }) => {
  return (
    // TouchableOpacity makes the category item clickable
    <TouchableOpacity style={styles.category}>
      {/* Display the category name */}
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default CategoryItem; // Export the CategoryItem component

// Define styles for the component
const styles = StyleSheet.create({
  category: {
    margin: 5, // Margin around the category item for spacing
    backgroundColor: "#e9e9e9", // Light gray background color for the category item
    paddingVertical: 10, // Vertical padding inside the category item
    paddingHorizontal: 20, // Horizontal padding inside the category item
    borderRadius: 12, // Rounded corners for the category item
  },
});
