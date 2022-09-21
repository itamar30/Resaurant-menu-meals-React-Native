import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function MyList({ data }) {
  return (
    <View style={styles.container}>
      {data.map((dataPoint) => (
        <Text style={styles.text} key={dataPoint}>
          {dataPoint}
        </Text>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "90%",
    justifyContent: "center",
  },
  text: {
    borderColor: "white",
    borderRadius: 1,
    marginVertical: 6,
    backgroundColor: "#C4A484",
    fontSize: 18,
    textAlign: "center",
    padding: 6,
    fontWeight: "bold",
    borderRadius: 12,
    color: "#5C4033",
  },
});
