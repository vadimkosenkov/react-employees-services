const employeeId = getQueryParam();
const GET_EMPLOYEES_URL = `https://nodejs-ps143.herokuapp.com/api/employees/${employeeId}`;

document.querySelector(".arrow-left").addEventListener("click", () => {
  window.open("index.html", "_self");
});

function getQueryParam() {
  const url = new URL(window.location.href);
  return url.searchParams.get("employeeId");
}

sendRequest(GET_EMPLOYEES_URL, renderProfile);

function renderProfile(data, error) {
  if (!error) {
    document.querySelector(".avatar").setAttribute("src", data.avatarSrc);
    createProfileContent(".gender", data.gender ? "Mr" : "Ms");
    createProfileContent(".name-en", data.nameEn);
    createProfileContent(".name-ru", data.nameRu);

    createProfileContent(".department", data.department);
    createProfileContent(".room", data.roomNumber);
    createProfileContent(".internal-phone", data.internalPhone);
    createProfileContent(".mobile-phone", data.mobilePhone);
    createProfileContent(".email", data.email);
    createProfileContent(".skype", data.skype);
    createProfileContent(".c-number", data.cNumber);
    createProfileContent(".hire-date", data.dateHired);
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
