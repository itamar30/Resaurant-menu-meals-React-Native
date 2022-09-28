import React, { useContext } from "react";
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
import FavoriteScreen from "./components/screens/FavoriteScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from "@expo/vector-icons/Ionicons";
import { store } from "./store/redux/store";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#5C4033" },
        headerTintColor: "white",
        drawerContentStyle: { backgroundColor: "#5C4033" },

        drawerStyle: { backgroundColor: "#5C4033" },
        drawerActiveTintColor: "#5C4033",
        drawerInactiveTintColor: "white",
        drawerActiveBackgroundColor: "#EFDECD",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="My Favorites"
        component={FavoriteScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
export default function App() {
  return (
    // <FavoritesContextProvider>
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#5C4033" },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="CategoriesScreen"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="MealsOverviewScreen"
            component={MealsOverviewScreen}
          />
          <Stack.Screen
            name="MealDetailsScreen"
            component={MealDetailsScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider> // </FavoritesContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
});
