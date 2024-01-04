import { legacy_createStore as createStore } from "redux";

import rootReducer from "./reducers/index";

const store = createStore(rootReducer, window.__REDEX_DEVTOOLS_EXTENTION__ && window.__REDEX_DEVTOOLS_EXTENTION__());

export default store;