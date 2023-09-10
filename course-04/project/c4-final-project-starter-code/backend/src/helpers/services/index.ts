import todoStorage from "../attachmentUtils";
import todoRepository from "../../repositories";
import TodoService from "./todo.service";

const todoService = new TodoService(todoStorage, todoRepository);

export default todoService;
