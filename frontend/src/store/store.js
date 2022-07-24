import { combineReducers, createStore } from "redux";
import usersReducer from "./reducers/usersReducer";

const reducers = combineReducers({
    users: usersReducer,
})
const store = createStore(reducers)
export default store
window.store = store