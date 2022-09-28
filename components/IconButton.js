import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import React from "react";

export default function IconButton({ onPress, name, color = "white" }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name={name} size={25} color={color} />
    </TouchableOpacity>
  );
}
