import {createStore, combineReducers} from "redux";
import SettingsReducer from "./reducers/SettingsReducer"

export default createStore(
    combineReducers({SettingsReducer})
    ,{}
);