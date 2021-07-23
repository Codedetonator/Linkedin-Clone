/*eslint-disable*/
import { combineReducers } from "redux";

import userReducer from "./userreducer";
import articleReducer from "./articleReducer";

const rootReducer = combineReducers({
  userState: userReducer,
  articleState: articleReducer,
});

export default rootReducer;
