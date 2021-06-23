import {combineReducers,createStore} from "redux";
import messagePageReducer from "./messagePageReducer";
import profilePageReducer from "./profilePageReducer";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    messagePage: messagePageReducer
});

const store = createStore(reducers);

export default store;