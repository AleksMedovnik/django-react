import { combineReducers, createStore } from "redux";
import profileReducer from "./reducers/profileReducer";
import usersReducer from "./reducers/usersReducer";

const reducers = combineReducers({
    users: usersReducer,
    profile: profileReducer,
})
const store = createStore(reducers)
export default store
window.store = store