import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { MEALS } from "../../data/dummy-data";
import MealDetails from "../MealDetails";
import MyList from "../MyList";
import IconButton from "../IconButton";

export default function MealDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const cohsenMeal = MEALS.find((mealItem) => {
    return mealItem.id === mealId;
  });
  const mealTitle = cohsenMeal.title;

  const handlePress = () => {
    console.log("pressed");
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      title: mealTitle,
      headerRight: () => {
        return <IconButton onPress={handlePress} />;
      },
    });
  }, [mealId, mealTitle, navigation, handlePress]);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{ uri: cohsenMeal.imageUrl }} style={styles.img} />
        <MealDetails
          tetStyle={styles.textStyle}
          duration={cohsenMeal.duration}
          affordability={cohsenMeal.affordability}
          complexity={cohsenMeal.complexity}
        />
        <View style={styles.subttileContainer}>
          <Text style={styles.subttile}>ingredients</Text>
        </View>

        <MyList data={cohsenMeal.ingredients} />

        <View style={styles.subttileContainer}>
          <Text style={styles.subttile}>steps</Text>
        </View>
        <MyList data={cohsenMeal.steps} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#5C4033",
    paddingBottom: 40,
    paddingTop: 20,
  },
  mealId: {
    fontSize: 10,
  },
  img: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 8,
    color: "#C4A484",
  },
  textStyle: {
    fontWeight: "bold",
    color: "#C4A484",
  },
  subttile: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#C4A484",
  },
  subttileContainer: {
    marginVertical: 4,
    padding: 6,
    borderBottomColor: "#C4A484",
    borderBottomWidth: 2,
    width: "80%",
    alignItems: "center",
  },
});
