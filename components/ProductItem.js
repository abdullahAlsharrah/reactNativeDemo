// Import necessary libraries and components from React, React Native, and React Navigation
import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { baseURL } from "../api"; // Base URL for fetching images from the server
import { useNavigation } from "@react-navigation/core"; // Navigation hook for navigating between screens

const ProductItem = ({ product }) => {
  const navigation = useNavigation(); // Hook to access navigation

  return (
    // TouchableOpacity makes the product item clickable
    <TouchableOpacity
      style={styles.product}
      onPress={
        () => navigation.navigate("Product details", { id: product._id }) // Navigates to Product details screen with product ID
      }>
      {/* Display product image */}
      <Image
        source={{ uri: `${baseURL}/${product.image}` }} // Fetches the product image using the base URL and product image path
        style={styles.image}
      />
      {/* Display product name */}
      <Text>{product.name}</Text>
      {/* Display product price with KWD currency symbol */}
      <Text>{parseInt(product.price).toFixed(2)} KWD</Text>
    </TouchableOpacity>
  );
};

export default ProductItem; // Export the ProductItem component

// Styles for the component
const styles = StyleSheet.create({
  product: {
    width: "45%", // Width of the product item (45% of parent container)
    height: 300, // Fixed height for the product item
    borderRadius: 20, // Rounded corners for the product item
  },
  image: {
    width: "100%", // Image takes full width of the product item
    height: "80%", // Image takes 80% of the height of the product item
    borderRadius: 20, // Rounded corners for the image
  },
});
