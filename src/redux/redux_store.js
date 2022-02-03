import { combineReducers, createStore } from "redux";
import financeReducer from "./finance_reducer";
import mathReducer from "./math_reducer";

let reducers=combineReducers({
    financePage:financeReducer,
    mathPage:mathReducer
});

let store=createStore(reducers);

export default store;