import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";

export default function MealItem({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  onPress,
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.insidecontainer} onPress={onPress}>
        <Image source={{ uri: imageUrl }} style={styles.mealImage} />
        <View>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.detailsContainer}>
            <Text style={styles.someSpace}>{duration} min</Text>
            <Text style={styles.someSpace}>{complexity}</Text>
            <Text style={styles.someSpace}>{affordability}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 20,
    marginHorizontal: 20,
    overflow: "hidden",
  },
  insidecontainer: {
    backgroundColor: "#C4A484",
  },
  mealImage: {
    height: 200,
    width: "100%",
    alignSelf: "center",
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
    fontSize: 18,
    marginVertical: 6,
    color: "#371D10",
  },
  detailsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  someSpace: {
    marginHorizontal: 8,
    fontSize: 17,
    marginBottom: 10,
    color: "black",
  },
});
