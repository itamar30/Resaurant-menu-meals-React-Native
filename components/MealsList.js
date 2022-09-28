import { View, Text, StyleSheet, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import MealItem from "../components/MealItem";
import React from "react";

export default function MealsList({ mealsArr }) {
  const navigation = useNavigation();

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
        data={mealsArr}
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
