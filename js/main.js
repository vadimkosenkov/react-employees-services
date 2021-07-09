const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('.search-btn');
const cardContainer = document.querySelector('.card-container');
const employeesDisplayed = document.querySelector('.employees-displayed');
const notFoundCard = document.querySelector('.not-found-card');
const gridViewIcon = document.querySelector('.grid-view-icon');
const rowViewIcon = document.querySelector('.row-view-icon');

let filteredEmployees = employeesData;

let isRowView = false;

employeesData.forEach(e => createGridCard(e));

searchBtn.addEventListener('click', () => filterItems());
gridViewIcon.addEventListener('click', setGridView);
rowViewIcon.addEventListener('click', setRowView);

function setGridView() {
  cardContainer.innerHTML = '';
  cardContainer.classList.remove('row-style');
  filteredEmployees.forEach(e => createGridCard(e));
  isRowView = false;
}
function setRowView() {
  cardContainer.innerHTML = '';
  cardContainer.classList.add('row-style');
  filteredEmployees.forEach(e => createRowCard(e));
  isRowView = true;
}

employeesDisplayed.innerText = `${employeesData.length} employees displayed`;

const filterItems = () => {
  const searchInputValue = searchInput.value.toLowerCase().trim();
  filteredEmployees = employeesData.filter(el => {
    const nameRu = el.name_ru.toLowerCase();
    const nameEn = el.name_en.toLowerCase();
    return nameRu.indexOf(searchInputValue) > -1 || nameEn.indexOf(searchInputValue) > -1;
  });

  employeesDisplayed.innerText = `${filteredEmployees.length} employees displayed`;
  cardContainer.innerHTML = '';

  if (filteredEmployees.length) {
    notFoundCard.classList.add('hidden');
    filteredEmployees.forEach(e => (isRowView ? createRowCard(e) : createGridCard(e)));
  } else {
    notFoundCard.classList.remove('hidden');
  }
};

function createGridCard(employee) {
  const employeeCard = document.createElement('div');
  employeeCard.classList.add('employee-card');
  cardContainer.append(employeeCard);

  const cardNameContainer = document.createElement('div');
  cardNameContainer.classList.add('card-name-container');
  employeeCard.append(cardNameContainer);

  const employeeImg = document.createElement('img');
  employeeImg.classList.add('employee-img');
  cardNameContainer.append(employeeImg);
  employeeImg.src = employee.avatarSrc;

  const cardNameEn = document.createElement('div');
  cardNameEn.classList.add('card-name-en');
  cardNameContainer.append(cardNameEn);
  cardNameEn.innerHTML = employee.name_en;

  const cardNameRu = document.createElement('div');
  cardNameRu.classList.add('card-name-ru');
  cardNameContainer.append(cardNameRu);
  cardNameRu.innerHTML = employee.name_ru;

  const officeLocation = document.createElement('div');
  officeLocation.classList.add('office-location');
  employeeCard.append(officeLocation);

  const officeDepartment = document.createElement('div');
  officeDepartment.classList.add('office-department');
  officeLocation.append(officeDepartment);

  const officeDepartmentIcon = document.createElement('img');
  officeDepartmentIcon.src = './assets/department.svg';
  officeDepartment.append(officeDepartmentIcon);
  officeDepartment.innerHTML += employee.department;

  const officeRoom = document.createElement('div');
  officeRoom.classList.add('office-room');
  officeLocation.append(officeRoom);

  const officeRoomIcon = document.createElement('img');
  officeRoomIcon.src = './assets/room.svg';
  officeRoom.append(officeRoomIcon);
  officeRoom.innerHTML += employee.roomNumber;
}

function createRowCard(employee) {
  const row = document.createElement('div');
  row.classList.add('row');
  const employeeImg = document.createElement('img');
  employeeImg.classList.add('employee-img-row');
  employeeImg.src = employee.avatarSrc;

  const rowContainer = document.createElement('div');
  rowContainer.classList.add('row-container');

  const cardNameEn = document.createElement('div');
  cardNameEn.classList.add('card-name-en');
  cardNameEn.innerHTML = employee.name_en;

  const cardNameRu = document.createElement('div');
  cardNameRu.classList.add('card-name-ru-row');
  cardNameRu.innerHTML = employee.name_ru;

  const department = createRowInfo('./assets/department.svg', employee.department);
  const roomNumber = createRowInfo('./assets/room.svg', employee.roomNumber);
  const phoneNumber = createRowInfo('./assets/phone-number.svg', employee.phoneNumber);
  const workPhone = createRowInfo('./assets/work-phone.svg', employee.workPhone);
  const cNumber = createRowInfo('./assets/c-number.svg', employee.cNumber);
  const rowInfo = document.createElement('div');
  rowInfo.classList.add('row-container-info');

  rowInfo.append(department, roomNumber, phoneNumber, workPhone, cNumber);
  rowContainer.append(cardNameEn, cardNameRu, rowInfo);
  row.append(employeeImg, rowContainer);
  cardContainer.append(row);
}

function createRowInfo(src, text) {
  const container = document.createElement('div');
  container.classList.add('row-info-container');
  const img = document.createElement('img');
  const content = document.createElement('div');
  container.append(img, content);
  img.src = src;
  content.innerText = text;
  return container;
}
