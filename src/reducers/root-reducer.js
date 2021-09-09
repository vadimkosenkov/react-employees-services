import { combineReducers } from "redux";
import { authReducer } from "./auth-reducer";
import { employeesReducer } from "./employees-reducer";
import { headerReducer } from "./header-reducer";
import { profileReducer } from "./profile-reducer";
import { rolesReducer } from "./roles-reducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  header: headerReducer,
  employees: employeesReducer,
  profile: profileReducer,
  roles: rolesReducer,
});
