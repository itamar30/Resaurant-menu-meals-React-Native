import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ImageInput({ imageUri, changeImageUri }) {
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      changeImageUri(result.uri);
    }
  };

  const handleDelete = () => {
    Alert.alert("watchout", "Are You Sure u wanna delete", [
      { text: "yes", onPress: () => changeImageUri(null) },
      { text: "no" },
    ]);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        title="Select an Image"
        onPress={pickImage}
        style={{ width: "80%" }}
      />
      <View style={{ padding: 30 }}>
        {imageUri && (
          <TouchableOpacity onPress={handleDelete}>
            <Image
              source={{ uri: imageUri }}
              style={{ width: 200, height: 200 }}
            />
          </TouchableOpacity>
        )}
        {!imageUri && <MaterialCommunityIcons name="camera" size={40} />}
      </View>
    </View>
  );
}
