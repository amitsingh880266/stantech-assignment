import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { updateTodo, fetchTodos } from "@/store/todoSlice";
import { NavigationProp } from "./_layout";

type EditTaskRouteProp = RouteProp<{ params: { id: number } }, "params">;

export default function EditTaskScreen() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<EditTaskRouteProp>();
  const dispatch = useDispatch<AppDispatch>();
  const { id }: { id: number } = route.params;
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const fetchTodo = async () => {
      const resultAction = await dispatch(fetchTodos());
      if (fetchTodos.fulfilled.match(resultAction)) {
        const todos = resultAction.payload;
        const todo = todos.find((t) => t.id === id);
        if (todo) {
          setTitle(todo.title);
          setCompleted(todo.completed);
        }
      }
    };
    fetchTodo();
  }, [id]);

  const handleUpdateTask = () => {
    dispatch(updateTodo({ id, title, completed }));
    Alert.alert("Success", "Task updated successfully");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Task</Text>
      <TextInput
        style={styles.input}
        placeholder="Task name"
        value={title}
        onChangeText={setTitle}
      />
      <View style={styles.buttonContainer}>
        <Button
          title={completed ? "Mark as Incomplete" : "Mark as Complete"}
          onPress={() => setCompleted(!completed)}
          color="#007bff"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Save Changes"
          onPress={handleUpdateTask}
          color="#28a745"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  buttonContainer: {
    width: "100%",
    marginBottom: 10,
  },
});
