import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { createTodo } from "@/store/todoSlice";
import styles from "@/styles/addTaskStyles";
import { AppDispatch } from "@/store";

export default function AddTaskScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch<AppDispatch>();
  const [title, setTitle] = useState("");

  const handleAddTask = () => {
    if (title.trim() === "") {
      Alert.alert("Error", "Task name cannot be empty");
      return;
    }

    dispatch(createTodo(title));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add a new task</Text>
      <TextInput
        style={styles.input}
        placeholder="Task name"
        value={title}
        onChangeText={setTitle}
      />
      <Button title="Save Task" onPress={handleAddTask} />
    </View>
  );
}
