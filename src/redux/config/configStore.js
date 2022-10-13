// src/redux/modules/config/configStore.js

// 원래 있던 코드
import { createStore } from "redux";
import { combineReducers } from "redux"; //저장 store 안에 여러개의 리듀서를 모아주는 친구
import todoList from "../modules/todoList";

 //리듀서는 함수고 나의 데이터를 찾고 수정한다.
const rootReducer = combineReducers({
  todoList,
});
const store = createStore(rootReducer);  //데이터를 저장하는 store를 만들면 rootReducer를 기본값으로 가져온다.

console.log(store)

export default store;
