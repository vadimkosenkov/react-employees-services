import "./profile.scss";
import * as utils from "./../utilities/utilities";

const userInfo = utils.getFromLocalStorage("userInfo");
checkAuth();

const editLink = document.querySelector(".edit-link-container");
const changeHidden = document.querySelector(".change-container-hidden");
const editHidden = document.querySelector(".edit-link-hidden");
const fullName = document.querySelector(".full-name");
const sectionHidden = document.querySelector(".profile-section-hidden");
const userLogo = document.querySelector(".header-user-info img");
const userName = document.querySelector(".header-user-info div");
const settings = document.querySelector(".settings-hidden");
const logoutBtn = document.querySelector(".header-turn-off");
const saveBtn = document.querySelector(".save-changes-btn");
const cancelBtn = document.querySelector(".cancel-changes-btn");

const employeeSendData = {
  department: null,
  roomNumber: null,
  mobilePhone: null,
  internalPhone: null,
  cNumber: null,
  gender: null,
  email: null,
  skype: null,
  isActive: null,
  vacation: {
    status: null,
  },
  addressBookRedesign: null,
  dateHired: null,
  lastName: null,
  lastNameNative: null,
  middleNameNative: null,
  firstName: null,
  firstNameNative: null,
};

let employeeData;
userLogo.src = userInfo.src;
userName.innerText = userInfo.name;

saveBtn.addEventListener("click", (e) => {
  e.preventDefault();
  saveEmployeeData();
});
cancelBtn.addEventListener("click", (e) => {
  e.preventDefault();
  reRenderEmployeeData(employeeData);
});

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("userInfo");
  window.open("./auth.html", "_self");
});

document.querySelector(".arrow-left").addEventListener("click", () => {
  window.open("./index.html", "_self");
});

const employeeId = getQueryParam();
const EMPLOYEES_URL = `https://nodejs-ps143.herokuapp.com/api/employees/${employeeId}`;

editLink.addEventListener("click", editProfile);

checkRoles();
utils.sendRequest(EMPLOYEES_URL, renderProfile, "GET");

function getQueryParam() {
  const url = new URL(window.location.href);
  return url.searchParams.get("employeeId");
}

function renderProfile(data, error) {
  if (!error) {
    employeeData = { ...data };

    document.querySelector(".avatar").setAttribute("src", data.avatarSrc);
    createProfileContent(".gender", data.gender);
    createProfileContent(".name-en", `${data.firstName} ${data.lastName}`);
    createProfileContent(
      ".name-ru",
      `${data.firstNameNative} ${data.middleNameNative} ${data.lastNameNative}`
    );
    createProfileContent(".department", data.department);
    createProfileContent(".room", data.roomNumber);
    createProfileContent(".internal-phone", data.internalPhone);
    createProfileContent(".mobile-phone", data.mobilePhone);
    createProfileContent(".email", data.email);
    createProfileContent(".skype", data.skype);
    createProfileContent(".c-number", data.cNumber);
    createProfileContent(".hire-date", utils.getDateString(data.dateHired));
    createProfileContent(".status", data.isActive ? "Active" : "Fired");
    createProfileContent(
      ".vacation",
      data.vacation.status ? "Enabled" : "Disabled"
    );
    createProfileContent(
      ".redesign",
      data.addressBookRedesign ? "Enabled" : "Disabled"
    );
  }
}

function createProfileContent(selector, content) {
  document.querySelector(selector).innerText = content;
}

function createAndEditProfileContent(selector, content, type) {
  const element = document.querySelector(`.${selector}`);
  element.innerHTML = `<input required class=
  '${selector + " edit-input"}' type=${type} value='${content}'>`;
  return element;
}

function editProfile() {
  changeHidden.classList.toggle("hidden");
  editHidden.classList.toggle("hidden");
  fullName.classList.toggle("hidden");
  sectionHidden.classList.toggle("hidden");

  createAndEditProfileContent("first-name", employeeData.firstName, "text");
  createAndEditProfileContent("last-name", employeeData.lastName, "text");
  createAndEditProfileContent(
    "first-name-native",
    employeeData.firstNameNative,
    "text"
  );
  createAndEditProfileContent(
    "middle-name-native",
    employeeData.middleNameNative,
    "text"
  );
  createAndEditProfileContent(
    "last-name-native",
    employeeData.lastNameNative,
    "text"
  );
  createAndEditProfileContent("department", employeeData.department, "text");
  createAndEditProfileContent("room", employeeData.roomNumber, "text");
  createAndEditProfileContent(
    "internal-phone",
    employeeData.internalPhone,
    "text"
  );
  createAndEditProfileContent("mobile-phone", employeeData.mobilePhone, "text");
  createAndEditProfileContent("email", employeeData.email, "text");
  createAndEditProfileContent("skype", employeeData.skype, "text");
  createAndEditProfileContent("c-number", employeeData.cNumber, "text");
  createAndEditProfileContent(
    "hire-date",
    utils.getDateCalendar(employeeData.dateHired),
    "date"
  );
  createAndEditProfileContent(
    "status",
    employeeData.isActive ? "Active" : "Fired",
    "text"
  );
  createAndEditProfileContent(
    "vacation",
    employeeData.vacation.status ? "Enabled" : "Disabled",
    "text"
  );
  createAndEditProfileContent(
    "redesign",
    employeeData.addressBookRedesign ? "Enabled" : "Disabled",
    "text"
  );
}

function saveEmployeeData() {
  generateEmployeeObj();
  utils.sendRequest(
    EMPLOYEES_URL,
    reRenderEmployeeData,
    "PATCH",
    employeeSendData
  );
}

function reRenderEmployeeData(data, error) {
  if (!error) {
    changeHidden.classList.toggle("hidden");
    editHidden.classList.toggle("hidden");
    fullName.classList.toggle("hidden");
    sectionHidden.classList.toggle("hidden");
    renderProfile(data);
  }
}

function generateEmployeeObj() {
  employeeSendData.department =
    document.querySelector("input.department").value;
  employeeSendData.gender = document.querySelector(".gender-input-mr").checked
    ? document.querySelector(".gender-input-mr").value
    : document.querySelector(".gender-input-ms").value;

  employeeSendData.firstName = document.querySelector("input.first-name").value;
  employeeSendData.lastName = document.querySelector("input.last-name").value;
  employeeSendData.firstNameNative = document.querySelector(
    "input.first-name-native"
  ).value;
  employeeSendData.middleNameNative = document.querySelector(
    "input.middle-name-native"
  ).value;
  employeeSendData.lastNameNative = document.querySelector(
    "input.last-name-native"
  ).value;
  employeeSendData.roomNumber = document.querySelector("input.room").value;
  employeeSendData.internalPhone = document.querySelector(
    "input.internal-phone"
  ).value;
  employeeSendData.mobilePhone =
    document.querySelector("input.mobile-phone").value;
  employeeSendData.email = document.querySelector("input.email").value;
  employeeSendData.skype = document.querySelector("input.skype").value;
  employeeSendData.dateHired = new Date(
    document.querySelector("input.hire-date").value
  ).getTime();
  employeeSendData.cNumber = document.querySelector("input.c-number").value;
  employeeSendData.isActive =
    document.querySelector("input.status").value === "Active" ? true : false;
  employeeSendData.vacation.status =
    document.querySelector("input.vacation").value === "Disabled"
      ? false
      : true;
  employeeSendData.addressBookRedesign =
    document.querySelector("input.redesign").value === "Disabled"
      ? false
      : true;
}

function checkRoles() {
  if (userInfo.role !== "user") {
    editHidden.classList.remove("hidden");
    if (userInfo.role === "admin") {
      settings.classList.remove("hidden");
    }
  }
}

function checkAuth() {
  if (!userInfo) {
    window.open("./auth.html", "_self");
  }
}
