// Import necessary libraries and components from React, React Native, and React Query
import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query"; // React Query hook for data fetching
import { getAllproducts } from "../api/products"; // API function to fetch all products
import ProductItem from "./ProductItem"; // Custom component to display a single product

const ProductList = () => {
  // Fetch product data using useQuery from React Query
  const { data: products } = useQuery({
    queryKey: ["products"], // Cache key for the query
    queryFn: getAllproducts, // Function to fetch products
  });

  // Map through the products data and render each product as a ProductItem component
  const list = products?.map((product) => (
    <ProductItem product={product} key={product._id} /> // Each product is passed as a prop to ProductItem
  ));

  return (
    // ScrollView allows for scrolling when the list of products overflows the screen
    <ScrollView>
      {/* View acts as a container for the product list */}
      <View style={styles.list}>{list}</View>
    </ScrollView>
  );
};

export default ProductList; // Export the ProductList component for use in other parts of the app

// Styles for the component
const styles = StyleSheet.create({
  list: {
    marginTop: 20, // Adds space at the top of the list
    flexDirection: "row", // Align items horizontally
    flexWrap: "wrap", // Allows products to wrap into new rows if necessary
    gap: 20, // Adds space between each product
    justifyContent: "center", // Centers the product items within the container
  },
});
