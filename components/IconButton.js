import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import React from "react";

export default function IconButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name="star" size={25} color="white" />
    </TouchableOpacity>
  );
}
