import changeTheNumber from "./upDown";
import changeColor from "./color"

import { combineReducers } from "redux";

const rootReducer = combineReducers ({
    changeTheNumber,
    changeColor
})

export default rootReducer