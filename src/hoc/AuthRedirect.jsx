import React from "react";
import { Redirect } from "react-router";
import { getFromLocalStorage } from "./../utilities/utilities";

export const withAuthRedirect = (Component) => {
  const redirectComponent = () => {
    const userInfo = getFromLocalStorage("userInfo");

    return userInfo ? <Component /> : <Redirect to="/auth" />;
  };

  return redirectComponent;
};
