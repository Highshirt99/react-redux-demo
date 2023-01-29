import { combineReducers } from "redux";
import cakeReducer from "./components/cake/cakeReducer";
import iceCreamReducer from "./components/iceCream/iceCreamReducer";
import BreadReducer from "./components/bread/breadReducer";

export const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    bread: BreadReducer
})

