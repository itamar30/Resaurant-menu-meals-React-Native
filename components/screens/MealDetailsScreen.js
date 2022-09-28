import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
} from "react-native";
import React, { useLayoutEffect, useContext } from "react";
import { MEALS } from "../../data/dummy-data";
import MealDetails from "../MealDetails";
import MyList from "../MyList";
import IconButton from "../IconButton";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../../store/redux/favoritesSlice";

export default function MealDetailsScreen({ route, navigation }) {
  const favoritesMealIds = useSelector((state) => state.favorites.ids);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;
  const cohsenMeal = MEALS.find((mealItem) => {
    return mealItem.id === mealId;
  });
  const mealTitle = cohsenMeal.title;

  // const favoritesContext = useContext(FavotiesContext);

  const isMealFavorite = favoritesMealIds.includes(mealId);

  const changeFavoriteStatusHandler = () => {
    if (isMealFavorite) {
      console.log(mealTitle);
      console.log("became un-fav");
      dispatch(removeFavorite(mealId));
    } else {
      dispatch(addFavorite(mealId));

      console.log(mealTitle);
      console.log("became fav");
    }
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      title: mealTitle,
      headerRight: () => {
        return (
          <IconButton
            name={isMealFavorite ? "star" : "star-outline"}
            onPress={changeFavoriteStatusHandler}
          />
        );
      },
    });
  }, [mealId, mealTitle, navigation, changeFavoriteStatusHandler]);
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
