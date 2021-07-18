checkRole();

const authForm = document.querySelector(".auth-form");
const email = document.querySelector(".email");
const password = document.querySelector(".password");

const GET_EMPLOYEES_URL = "https://nodejs-ps143.herokuapp.com/auth/login";

authForm.addEventListener("submit", login);

function login(e) {
  e.preventDefault();
  const data = { email: email.value, password: password.value };
  sendRequest(GET_EMPLOYEES_URL, authenticate, "POST", data);
}

function authenticate(data, error) {
  if (!error) {
    const tokenData = parseJwt(data.token.split(" ")[1]);
    setToLocalStorage("userInfo", tokenData);
    window.open("./../index.html", "_self");
  }
}

function checkRole() {
  const userInfo = getFromLocalStorage("userInfo");
  if (userInfo) {
    window.open("./../index.html", "_self");
  }
}
