import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function EditTaskScreen() {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Edit an existing task</Text>
      <TextInput placeholder="Task name" />
      <Button
        title="Save Changes"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
}
