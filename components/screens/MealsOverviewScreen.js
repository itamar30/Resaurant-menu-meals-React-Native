import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { MEALS, CATEGORIES } from "../../data/dummy-data";
import MealItem from "../MealItem";
import MealDetailsScreen from "./MealDetailsScreen";

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

  const handleRender = ({ item }) => {
    let mealItemsProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      affordability: item.affordability,
      complexity: item.complexity,
      steps: item.steps,
      id: item.id,
    };

    const goToDetailsScreen = () => {
      navigation.navigate("MealDetailsScreen", {
        mealId: mealItemsProps.id,
      });
    };

    return (
      <View>
        <MealItem {...mealItemsProps} onPress={goToDetailsScreen} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayChosenMeal}
        keyExtractor={(item) => item.id}
        renderItem={handleRender}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#5C4033",
  },
});
