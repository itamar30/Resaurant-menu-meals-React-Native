import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
// import { FavotiesContext } from "../../store/context/favorites-context";
import { MEALS } from "../../data/dummy-data";
import MealsList from "../MealsList";
import { useSelector, useDispatch } from "react-redux";

export default function FavoriteScreen() {
  // const favoritesContext = useContext(FavotiesContext);
  const favoritesMealIds = useSelector((state) => state.favorites.ids);
  let favoriteObjectMEals = MEALS.filter((meal) => {
    return favoritesMealIds.includes(meal.id);
  });

  return favoriteObjectMEals.length === 0 ? (
    <View style={styles.container}>
      <Text style={styles.text}>no favorites yet</Text>
    </View>
  ) : (
    <MealsList mealsArr={favoriteObjectMEals} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5C4033",
  },
  text: {
    fontSize: 30,
    color: "white",
    marginVertical: 10,
    textTransform: "uppercase",
  },
});
