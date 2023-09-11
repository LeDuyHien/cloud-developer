import todoStorage from "../helpers/attachmentUtils";
import todoRepository from "../dataLayer";
import TodoService from "./todo.service";

const todoService = new TodoService(todoStorage, todoRepository);

export default todoService;
