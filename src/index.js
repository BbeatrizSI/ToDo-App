import './styles.css';
import { Todo, TodoList } from './classes';
import { newTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach(newTodoHtml);
