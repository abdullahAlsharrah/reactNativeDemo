// Import necessary libraries and components from React and React Native
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query"; // React Query hook for data fetching
import { getProductById } from "../api/products"; // API function to fetch product by ID

const ProductDetails = ({ route }) => {
  const { id } = route.params; // Extract the product ID from route parameters

  // Fetch the product data using useQuery
  const { data: product } = useQuery({
    queryKey: ["product", id], // Cache key includes 'product' and the specific ID
    queryFn: () => getProductById(id), // Function to fetch product data by ID
  });

  return (
    <View style={styles.container}>
      <Text style={styles.productName}>{product?.name}</Text>
      {/* Additional product details can be displayed here */}
    </View>
  );
};

export default ProductDetails;

// Define styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1, // Allow the container to expand to fill available space
    padding: 16, // Add padding around the content
    backgroundColor: "#fff", // Set the background color to white
  },
  productName: {
    fontSize: 24, // Set the font size for the product name
    fontWeight: "bold", // Make the product name bold
    marginBottom: 8, // Add space below the product name
  },
});
