import createTodo from "./createTodo/createTodo";
import deleteTodo from "./deleteTodo/deleteTodo";
import getTodos from "./getTodos/getTodos";
import { todo } from "./todo/todo";

type AppSyncEvent = {
  info: {
    fieldName:string;
  };
  arguments:{
    todo: todo
    Id:string
  };
};
exports.handler = async function(event: AppSyncEvent){
  switch (event.info.fieldName) {
    case "getTodos":
      return await getTodos();
    case "createTodo":
      return await createTodo(event.arguments.todo);
    case "deleteTodo":
      return await deleteTodo(event.arguments.Id);
    default:
      break;
  }
};
