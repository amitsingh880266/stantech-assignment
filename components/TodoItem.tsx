import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Todo } from "@/types/todo";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@/app/(tabs)/_layout";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { deleteTodo } from "@/store/todoSlice";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<NavigationProp>();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <View style={styles.container}>
      <View style={{ width: 20, height: 20 }}>
        {todo.completed && (
          <Image
            source={require("../assets/images/checked.png")}
            style={styles.icon}
          />
        )}
      </View>
      <Text style={styles.id}>#{todo.id}</Text>
      <View style={styles.divider} />
      <View style={styles.details}>
        <Text style={styles.title}>{todo.title}</Text>
        <Text style={styles.time}>
          Created at: {new Date(todo.createdAt).toLocaleString()}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={() => navigation.navigate("edit-task", { id: todo.id })}
      >
        <Text>
          <Image
            source={require("../assets/images/edit.png")}
            style={styles.icon}
          />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton} onPress={handleDelete}>
        <Text>
          <Image
            source={require("../assets/images/delete.png")}
            style={styles.icon}
          />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "#f9f9f9",
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#333",
  },
  time: {
    fontSize: 8,
    color: "#666",
  },
  divider: {
    width: 1,
    height: "100%",
    backgroundColor: "#ccc",
    marginHorizontal: 10,
  },
  id: {
    fontSize: 10,
    color: "#888",
  },
  iconButton: {
    marginLeft: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default TodoItem;
