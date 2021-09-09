import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./toolkitSlice/authSlice";
import employeesSlice from "./toolkitSlice/employeesSlice";
import headerSlice from "./toolkitSlice/headerSlice";
import profileSlice from "./toolkitSlice/profileSlice";
import rolesSlice from "./toolkitSlice/rolesSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    header: headerSlice,
    employees: employeesSlice,
    profile: profileSlice,
    roles: rolesSlice,
  },
});

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
