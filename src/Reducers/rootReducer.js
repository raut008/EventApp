import { combineReducers } from "redux";
import eventReducers from "./EventReducer";

export const rootReducer = {
    eventState: eventReducers,
}

export default combineReducers(rootReducer);