import "./roles.scss";
import * as utils from "./../utilities/utilities";

const userInfo = utils.getFromLocalStorage("userInfo");
checkAuth();

const GET_EMPLOYEES_URL = "https://nodejs-ps143.herokuapp.com/api/employees";
const SET_ROLE_URL = "https://nodejs-ps143.herokuapp.com/api/role";

const cardContainer = document.querySelector(".card-container");
const userLogo = document.querySelector(".header-user-info img");
const userName = document.querySelector(".header-user-info div");
const settings = document.querySelector(".settings-hidden");
const logoutBtn = document.querySelector(".header-turn-off");
const searchBtn = document.querySelector(".search-button");
const searchInput = document.querySelector(".search-input");

let employees;

userLogo.src = userInfo.src;
userName.innerText = userInfo.name;

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("userInfo");
  window.open("./auth.html", "_self");
});

checkRoles();
utils.sendRequest(GET_EMPLOYEES_URL, renderCards, "GET");

function renderCards(data, error) {
  if (!error) {
    employees = [...data];
    cardContainer.innerHTML = "";
    setRowView();
  }
}

searchBtn.addEventListener("click", () => {
  const searchInputValue = searchInput.value.toLowerCase().trim();
  const getEmployeesUrlOfValue = `${GET_EMPLOYEES_URL}?search=${searchInputValue}`;
  utils.sendRequest(getEmployeesUrlOfValue, renderCards, "GET");
});

function createRowCard(employee) {
  const row = document.createElement("div");

  row.classList.add("row");
  const employeeImg = document.createElement("img");
  employeeImg.classList.add("employee-img-row");
  employeeImg.src = employee.avatarSrc;

  const rowContainer = document.createElement("div");
  rowContainer.classList.add("row-container");

  const cardNameEn = document.createElement("div");
  cardNameEn.classList.add("card-name-en");
  cardNameEn.innerHTML = `${employee.firstName} ${employee.lastName}`;

  const cardNameRu = document.createElement("div");
  cardNameRu.classList.add("card-name-ru");
  cardNameRu.innerHTML = `${employee.firstNameNative} ${employee.lastNameNative}`;

  const emp = createBtn("employee");
  emp.addEventListener("click", () => {
    utils.sendRequest(`${SET_ROLE_URL}/${employee.id}`, () => {}, "PATCH", {
      role: "user",
    });
    activeRoleBtn("user", emp, editor, admin);
  });

  const editor = createBtn("editor");
  editor.addEventListener("click", () => {
    utils.sendRequest(`${SET_ROLE_URL}/${employee.id}`, () => {}, "PATCH", {
      role: "editor",
    });
    activeRoleBtn("editor", emp, editor, admin);
  });

  const admin = createBtn("admin");
  admin.addEventListener("click", () => {
    utils.sendRequest(`${SET_ROLE_URL}/${employee.id}`, () => {}, "PATCH", {
      role: "admin",
    });
    activeRoleBtn("admin", emp, editor, admin);
  });

  activeRoleBtn(employee.role, emp, editor, admin);
  const rowInfo = document.createElement("div");
  rowInfo.classList.add("row-container-info");

  rowInfo.append(emp, editor, admin);
  rowContainer.append(cardNameEn, cardNameRu);
  row.append(employeeImg, rowContainer, rowInfo);
  cardContainer.append(row);
}

function createBtn(text) {
  const roleBtn = document.createElement("button");
  roleBtn.classList.add("role-btn");
  roleBtn.innerText = text;
  return roleBtn;
}

function setRowView() {
  cardContainer.innerHTML = "";
  employees.forEach((e) => createRowCard(e));
}

function activeRoleBtn(role, user, editor, admin) {
  user.classList.remove("btn-active");
  editor.classList.remove("btn-active");
  admin.classList.remove("btn-active");

  if (role === "admin") {
    admin.classList.add("btn-active");
  } else if (role === "editor") {
    editor.classList.add("btn-active");
  } else {
    user.classList.add("btn-active");
  }
}

function checkRoles() {
  if (userInfo.role === "admin") {
    settings.classList.remove("hidden");
  }
}

function checkAuth() {
  if (!userInfo) {
    window.open("./auth.html", "_self");
  }
}
