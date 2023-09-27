import { combineReducers } from "redux";
import invoiceReducer from "./reducer";

const rootReducer = combineReducers({
  invoiceReducer,
});

export default rootReducer;
