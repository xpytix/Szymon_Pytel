import {combineReducers} from "redux";
import colorsReducer from "./colors/duck/reducers"


const rootReducer = combineReducers({
    activities: colorsReducer,
})

export default rootReducer
