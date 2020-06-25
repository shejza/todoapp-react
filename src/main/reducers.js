import { combineReducers } from "redux";
import { todos } from "../main/scenes/application/scenes/tasks/services/reducers";
import { todosdesc } from "../main/scenes/application/scenes/tasks_desc/services/reducers";

const rootReducer = combineReducers({
  todos,
  todosdesc,
});

export default rootReducer;
