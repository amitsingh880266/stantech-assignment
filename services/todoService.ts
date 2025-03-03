import setupDatabase from "../database/db";
import { Todo } from "../types/todo";

class TodoService {
  private db: any;

  constructor() {
    this.initializeDatabase();
  }

  private async initializeDatabase() {
    this.db = await setupDatabase();
  }

  public async getTodos(): Promise<Todo[]> {
    const result = await this.db.getAllAsync("SELECT * FROM todos;");
    return result as Todo[];
  }

  public async addTodo(title: string): Promise<number> {
    const result = await this.db.runAsync(
      "INSERT INTO todos (title, completed) VALUES (?, 0);",
      [title]
    );
    return result.lastInsertRowId;
  }

  public async updateTodoStatus(id: number, completed: boolean): Promise<void> {
    await this.db.runAsync("UPDATE todos SET completed = ? WHERE id = ?;", [
      completed ? 1 : 0,
      id,
    ]);
  }

  public async deleteTodo(id: number): Promise<void> {
    await this.db.runAsync("DELETE FROM todos WHERE id = ?;", [id]);
  }

  public async updateTodo(id: number, data: Partial<Todo>): Promise<void> {
    await this.db.runAsync(
      "UPDATE todos SET title = ?, completed = ? WHERE id = ?;",
      [data.title, data.completed ? 1 : 0, id]
    );
  }

  public async getTodoById(id: number): Promise<Todo> {
    const result = await this.db.getAsync("SELECT * FROM todos WHERE id = ?;", [
      id,
    ]);
    return result as Todo;
  }
}

const todoService = new TodoService();
export default todoService;
