import { legacy_createStore as createStore } from "redux";
import root from "./main"

const store = createStore(root, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store