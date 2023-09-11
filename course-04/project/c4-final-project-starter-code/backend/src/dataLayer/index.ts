import dynamoDBClient from "../config/dynamodb.client";
import TodoRepository from "./todo.repository";

console.log("Todo Table: ", process.env.TODO_TABLE);

const todoRepository = new TodoRepository(
  dynamoDBClient(),
  process.env.TODO_TABLE
);

export default todoRepository;
