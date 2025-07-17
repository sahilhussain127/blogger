import { combineReducers } from "redux";
import loadingReducer from "./loadingSlice";
import userReducer from "./userSlice";

export const rootReducer = combineReducers({
  loading: loadingReducer,
  user: userReducer,
});
