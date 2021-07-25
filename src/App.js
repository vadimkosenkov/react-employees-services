import React from "react";
import "./App.scss";
import Auth from "./components/Auth/Auth.jsx";
import Employees from "./components/Employees/Employees.jsx";
import Roles from "./components/Roles/Roles.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Header from "./components/Header/Header.jsx";
import { getFromLocalStorage } from "./utilities/utilities";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

class App extends React.Component {
  userInfo = getFromLocalStorage("userInfo");

  render() {
    return (
      <BrowserRouter>
        {this.userInfo ? null : <Redirect to="/auth" />}
        <Route component={Header} />
        <Route exact path="/" render={() => <Employees />} />
        <Route path="/auth" render={() => <Auth />} />
        <Route path="/roles" render={() => <Roles />} />
        <Route path="/profile" render={() => <Profile />} />
      </BrowserRouter>
    );
  }
}

export default App;
