import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import React from "react";
import { CATEGORIES } from "../../data/dummy-data";
import CategoryItem from "../CategoryItem";
import { StatusBar } from "expo-status-bar";

export default function CategoriesScreen({ navigation }) {
  const renderCategoryItem = ({ item }) => {
    return (
      <SafeAreaView>
        <CategoryItem
          title={item.title}
          color={item.color}
          onPress={() =>
            navigation.navigate("MealsOverviewScreen", {
              categoryId: item.id,
            })
          }
        />
      </SafeAreaView>
    );
  };
  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={CATEGORIES}
          keyExtractor={(item) => item.id}
          renderItem={renderCategoryItem}
          numColumns={2}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5C4033",
    paddingTop: 30,
  },
});
