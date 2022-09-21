import * as React from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";
import CategoryItem from "./components/CategoryItem";
import CategoriesScreen from "./components/screens/CategoriesScreen";
import MealDetailsScreen from "./components/screens/MealDetailsScreen";
import MealsOverviewScreen from "./components/screens/MealsOverviewScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          title: "All Catergories",
          headerStyle: { backgroundColor: "#5C4033" },
          contentStyle: { backgroundColor: "#5C4033" },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
        <Stack.Screen
          name="MealsOverviewScreen"
          component={MealsOverviewScreen}
        />
        <Stack.Screen name="MealDetailsScreen" component={MealDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
});
