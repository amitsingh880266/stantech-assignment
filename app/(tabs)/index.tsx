import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "./_layout";

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>List of Tasks</Text>
      <Button
        title="Add Task"
        onPress={() => navigation.navigate("add-task")}
      />
    </View>
  );
}
