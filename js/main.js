const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");
const cardContainer = document.querySelector(".card-container");
const employeesDisplayed = document.querySelector(".employees-displayed");
const notFoundCard = document.querySelector(".not-found-card");
const gridViewIcon = document.querySelector(".grid-view-icon");
const rowViewIcon = document.querySelector(".row-view-icon");

let employees;
let isRowView = false;

const GET_EMPLOYEES_URL = "https://nodejs-ps143.herokuapp.com/api/employees";

sendRequest(GET_EMPLOYEES_URL, renderCards);

searchBtn.addEventListener("click", () => {
  const searchInputValue = searchInput.value.toLowerCase().trim();
  const getEmployeesUrlOfValue = `${GET_EMPLOYEES_URL}?search=${searchInputValue}`;
  sendRequest(getEmployeesUrlOfValue, renderCards);
});

gridViewIcon.addEventListener("click", setGridView);
rowViewIcon.addEventListener("click", setRowView);

function setGridView() {
  cardContainer.innerHTML = "";
  cardContainer.classList.remove("row-style");
  employees.forEach((e) => createGridCard(e));
  isRowView = false;
  this.classList.add("svg-active");
  rowViewIcon.classList.remove("svg-active");
}

function setRowView() {
  cardContainer.innerHTML = "";
  cardContainer.classList.add("row-style");
  employees.forEach((e) => createRowCard(e));
  isRowView = true;
  this.classList.add("svg-active");
  gridViewIcon.classList.remove("svg-active");
}

function createGridCard(employee) {
  const employeeCard = document.createElement("a");

  employeeCard.onclick = () => {
    window.open(`profile.html?employeeId=${employee.id}`, "_self");
  };

  employeeCard.classList.add("employee-card");
  cardContainer.append(employeeCard);

  const cardNameContainer = document.createElement("div");
  cardNameContainer.classList.add("card-name-container");
  employeeCard.append(cardNameContainer);

  const employeeImg = document.createElement("img");
  employeeImg.classList.add("employee-img");
  cardNameContainer.append(employeeImg);
  employeeImg.src = employee.avatarSrc;

  const cardNameEn = document.createElement("div");
  cardNameEn.classList.add("card-name-en");
  cardNameContainer.append(cardNameEn);
  cardNameEn.innerHTML = employee.nameEn;

  const cardNameRu = document.createElement("div");
  cardNameRu.classList.add("card-name-ru");
  cardNameContainer.append(cardNameRu);
  cardNameRu.innerHTML = employee.nameRu;

  const officeLocation = document.createElement("div");
  officeLocation.classList.add("office-location");
  employeeCard.append(officeLocation);

  const officeDepartment = document.createElement("div");
  officeDepartment.classList.add("office-department");
  officeLocation.append(officeDepartment);

  const officeDepartmentIcon = document.createElement("img");
  officeDepartmentIcon.src = "./assets/icons/department.svg";
  officeDepartment.append(officeDepartmentIcon);
  officeDepartment.innerHTML += employee.department;

  const officeRoom = document.createElement("div");
  officeRoom.classList.add("office-room");
  officeLocation.append(officeRoom);

  const officeRoomIcon = document.createElement("img");
  officeRoomIcon.src = "./assets/icons/room.svg";
  officeRoom.append(officeRoomIcon);
  officeRoom.innerHTML += employee.roomNumber;
}

function createRowCard(employee) {
  const row = document.createElement("a");
  row.onclick = () => {
    window.open(`profile.html?employeeId=${employee.id}`, "_self");
  };

  row.classList.add("row");
  const employeeImg = document.createElement("img");
  employeeImg.classList.add("employee-img-row");
  employeeImg.src = employee.avatarSrc;

  const rowContainer = document.createElement("div");
  rowContainer.classList.add("row-container");

  const cardNameEn = document.createElement("div");
  cardNameEn.classList.add("card-name-en");
  cardNameEn.innerHTML = employee.nameEn;

  const cardNameRu = document.createElement("div");
  cardNameRu.classList.add("card-name-ru-row");
  cardNameRu.innerHTML = employee.nameRu;

  const department = createRowInfo(
    "./assets/icons/department.svg",
    employee.department
  );
  const roomNumber = createRowInfo(
    "./assets/icons/room.svg",
    employee.roomNumber
  );
  const mobilePhone = createRowInfo(
    "./assets/icons/mobile-phone.svg",
    employee.mobilePhone
  );
  const internalPhone = createRowInfo(
    "./assets/icons/internal-phone.svg",
    employee.internalPhone
  );
  const cNumber = createRowInfo(
    "./assets/icons/c-number.svg",
    employee.cNumber
  );
  const rowInfo = document.createElement("div");
  rowInfo.classList.add("row-container-info");

  rowInfo.append(department, roomNumber, mobilePhone, internalPhone, cNumber);
  rowContainer.append(cardNameEn, cardNameRu, rowInfo);
  row.append(employeeImg, rowContainer);
  cardContainer.append(row);
}

function createRowInfo(src, text) {
  const container = document.createElement("div");
  container.classList.add("row-info-container");
  const img = document.createElement("img");
  const content = document.createElement("div");
  container.append(img, content);
  img.src = src;
  content.innerText = text;
  return container;
}

function renderCards(data, error) {
  if (!error) {
    employees = [...data];
    employeesDisplayed.innerText = `${employees.length} employees displayed`;
    cardContainer.innerHTML = "";
    if (employees.length) {
      notFoundCard.classList.add("hidden");
      employees.forEach((e) =>
        isRowView ? createRowCard(e) : createGridCard(e)
      );
    } else {
      notFoundCard.classList.remove("hidden");
    }
  }
}
