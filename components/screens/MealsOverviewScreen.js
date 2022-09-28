import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../../data/dummy-data";
import MealsList from "../MealsList";

export default function MealsOverviewScreen({ route, navigation }) {
  let categoryId = route.params.categoryId;
  let categoryTitle;
  const displayChosenMeal = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    categoryTitle = CATEGORIES.find((item) => item.id == categoryId).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  return <MealsList mealsArr={displayChosenMeal} />;
}
