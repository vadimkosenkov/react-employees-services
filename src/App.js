import React from "react";
import "./App.scss";
import Auth from "./components/Auth/Auth.jsx";
import Employees from "./components/Employees/Employees.jsx";
import Roles from "./components/Roles/Roles.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Header from "./components/Header/Header.jsx";
import { BrowserRouter, Route } from "react-router-dom";
import { withAuthRedirect } from "./hoc/AuthRedirect.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Route component={Header} />
      <Route exact path="/" component={withAuthRedirect(Employees)} />
      <Route path="/roles" component={withAuthRedirect(Roles)} />
      <Route path="/profile" component={withAuthRedirect(Profile)} />
      <Route path="/auth" component={Auth} />
    </BrowserRouter>
  );
};

export default App;
