import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {todoReducer} from "./todoReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer
});


// дозволяє побачити
export type RootState = ReturnType<typeof rootReducer>