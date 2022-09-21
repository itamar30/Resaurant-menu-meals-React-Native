import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";

export default function CategoryItem({ title, color, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.categoryContainer, { backgroundColor: color }]}>
        <Text style={styles.categoryText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},

  categoryContainer: {
    height: 160,
    width: 160,
    marginHorizontal: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 2,
  },
  categoryText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
