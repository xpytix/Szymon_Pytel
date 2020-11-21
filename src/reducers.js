import {combineReducers} from "redux";
import colorsReducer from "./colors/duck/reducers"


const rootReducer = combineReducers({
    colors: colorsReducer,
})

export default rootReducer
