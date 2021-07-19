import "./auth.scss";
import * as utils from "./../utilities/utilities";
checkRole();

const authForm = document.querySelector(".auth-form");
const email = document.querySelector(".email");
const password = document.querySelector(".password");

const GET_EMPLOYEES_URL = "https://nodejs-ps143.herokuapp.com/auth/login";

authForm.addEventListener("submit", login);

function login(e) {
  e.preventDefault();
  const data = { email: email.value, password: password.value };
  utils.sendRequest(GET_EMPLOYEES_URL, authenticate, "POST", data);
}

function authenticate(data, error) {
  if (!error) {
    const tokenData = utils.parseJwt(data.token.split(" ")[1]);
    utils.setToLocalStorage("userInfo", tokenData);
    window.open("./index.html", "_self");
  } else {
    alert("Email or password is incorrect. Please check and try again.");
  }
}

function checkRole() {
  const userInfo = utils.getFromLocalStorage("userInfo");
  if (userInfo) {
    window.open("./index.html", "_self");
  }
}
