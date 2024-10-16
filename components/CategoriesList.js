// Import necessary libraries and components from React, React Native, and React Query
import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query"; // React Query hook for data fetching
import { getAllCategories } from "../api/products"; // API function to fetch all categories
import CategoryItem from "./CategoryItem"; // Component to display individual category items

const CategoriesList = () => {
  // Fetch categories using useQuery, calling getAllCategories API
  const { data: categories } = useQuery({
    queryKey: ["categories"], // Query key to identify and cache this data
    queryFn: getAllCategories, // Function to fetch categories from the server
  });

  // Map over the categories and render each category using CategoryItem
  const list = categories?.map((category) => (
    <CategoryItem item={category} key={category._id} /> // Each category is passed as a prop to CategoryItem
  ));

  return (
    // Horizontal ScrollView to display categories in a row
    <ScrollView horizontal={true}>
      <View style={styles.list}>{list}</View>
      {/* Render the list of categories */}
    </ScrollView>
  );
};

export default CategoriesList; // Export the CategoriesList component

// Define styles for the component
const styles = StyleSheet.create({
  list: {
    flexDirection: "row", // Display the categories in a horizontal row
    height: 45, // Set a fixed height for the category list container
  },
});
