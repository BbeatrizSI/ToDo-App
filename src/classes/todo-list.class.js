import { Todo } from './todo.class';

export class TodoList {
  constructor() {
    this.getFromLocalStorage();
  }
  newTodo(todo) {
    this.todos.push(todo);
    this.saveInLocalStorage();
  }
  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id != id);
    this.saveInLocalStorage();
  }

  toggleTodo(id) {
    for (const todo of this.todos) {
      if (todo.id == id) {
        todo.completed = !todo.completed;
        this.saveInLocalStorage();

        break;
      }
    }
  }
  deleteAllCompletedTodos() {
    this.todos = this.todos.filter((todo) => !todo.completed);
    this.saveInLocalStorage();
  }
  saveInLocalStorage() {
    localStorage.setItem('todo', JSON.stringify(this.todos));
  }
  getFromLocalStorage() {
    this.todos = localStorage.getItem('todo')
      ? JSON.parse(localStorage.getItem('todo'))
      : [];

    this.todos = this.todos.map(Todo.fromJson);
  }
}
