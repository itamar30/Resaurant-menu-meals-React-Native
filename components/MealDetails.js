import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function MealDetails({
  duration,
  complexity,
  affordability,
  tetStyle,
}) {
  return (
    <View style={styles.detailsContainer}>
      <Text style={[styles.someSpace, tetStyle]}>{duration} min</Text>
      <Text style={[styles.someSpace, tetStyle]}>{complexity}</Text>
      <Text style={[styles.someSpace, tetStyle]}>{affordability}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 4,
  },
  someSpace: {
    marginHorizontal: 8,
    fontSize: 17,
    marginBottom: 10,
  },
});
