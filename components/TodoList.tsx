import React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import { Todo } from "@/types/todo";
import TodoItem from "@/components/TodoItem";

interface TodoListProps {
  todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <View style={styles.container}>
      {todos.length === 0 ? (
        <Text style={styles.noTasksText}>No tasks available</Text>
      ) : (
        <FlatList
          data={todos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <TodoItem todo={item} />}
          contentContainerStyle={styles.list}
          style={{ flex: 1, width: "100%", backgroundColor: "#f9f9f9" }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    width: "100%",
  },
  noTasksText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 18,
    color: "#666",
  },
});

export default TodoList;
