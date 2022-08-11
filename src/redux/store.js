import { createStore } from "redux";
import rootReducers from "./reduceres/index";

const store= createStore(rootReducers); 

export default store;