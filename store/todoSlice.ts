import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import todoService from "@/services/todoService";
import { Todo } from "@/types/todo";

interface TodoState {
  todos: Todo[];
  loading: boolean;
  error: string | null;
}

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
};

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const todos = await todoService.getTodos();
  return todos;
});

export const createTodo = createAsyncThunk(
  "todos/createTodo",
  async (title: string) => {
    await todoService.addTodo(title);
    const todos = await todoService.getTodos();
    return todos;
  }
);

export const toggleTodoStatus = createAsyncThunk(
  "todos/toggleTodoStatus",
  async ({ id, completed }: { id: number; completed: boolean }) => {
    await todoService.updateTodoStatus(id, completed);
    const todos = await todoService.getTodos();
    return todos;
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async (id: number) => {
    await todoService.deleteTodo(id);
    return id;
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch todos";
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(toggleTodoStatus.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      });
  },
});

export default todoSlice.reducer;
