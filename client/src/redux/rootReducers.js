import { combineReducers } from "redux";

import userRegisterReducer from "./user/register/userRegisterReducers";

const rootReducer = combineReducers({
  userRegister: userRegisterReducer,
});

export default rootReducer;
