import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { NavigationProp } from "./_layout";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, createTodo } from "@/store/todoSlice";
import { RootState, AppDispatch } from "@/store";
import TodoList from "@/components/TodoList";
import { styles } from "../../styles/homeScreenStyles";

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: RootState) => state.todos.todos);
  const loading = useSelector((state: RootState) => state.todos.loading);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      dispatch(fetchTodos());
    }
  }, [dispatch, isFocused]);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>List of Tasks</Text>
      {loading ? <Text>Loading...</Text> : <TodoList todos={todos} />}
      <Button
        title="Add Task"
        onPress={() => navigation.navigate("add-task")}
      />
    </View>
  );
}
