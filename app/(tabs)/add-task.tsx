import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function AddTaskScreen() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Add a new task</Text>
      <TextInput placeholder="Task name" />
      <Button
        title="Save Task"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
}
