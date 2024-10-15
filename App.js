// Import necessary libraries and components from React Navigation, React Query, and React Native
import { NavigationContainer } from "@react-navigation/native"; // Provides the container for navigation
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"; // Setup for React Query (data fetching & caching)
import { SafeAreaView, StyleSheet, View } from "react-native"; // SafeAreaView ensures the layout avoids notches, status bars, etc.
import MainTab from "./navigations/MainTab"; // Import MainTab for bottom tab navigation

// Main application component
export default function App() {
  const queryClient = new QueryClient(); // Initialize React Query's client for managing server state

  return (
    // NavigationContainer wraps the entire app, enabling navigation between screens
    <NavigationContainer>
      {/* QueryClientProvider wraps the app, making React Query available throughout the app */}
      <QueryClientProvider client={queryClient}>
        {/* SafeAreaView ensures the app avoids areas like the status bar or notches */}
        <SafeAreaView style={{ flex: 1 }}>
          {/* MainTab is used here to display bottom tab navigation */}
          <MainTab />
        </SafeAreaView>
      </QueryClientProvider>
    </NavigationContainer>
  );
}

// StyleSheet for defining styles used in the app
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container takes up the full screen
    backgroundColor: "#fff", // Set the background color to white
    alignItems: "center", // Center content horizontally
    justifyContent: "center", // Center content vertically
  },
});
