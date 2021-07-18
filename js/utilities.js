function sendRequest(url, callback, type, data) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.status < 400 && this.readyState === 4) {
      callback(JSON.parse(this.responseText));
    } else {
      callback([], new Error("Request failed: " + this.statusText));
    }
  };
  xhr.open(type, url, true);
  if (data) {
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  }
  xhr.send(data ? JSON.stringify(data) : null);
}

function getDateString(data) {
  const date = new Date(data);
  const day = date.toLocaleString("default", { day: "2-digit" });
  const month = date.toLocaleString("en-EN", { month: "short" });
  const year = date.toLocaleString("default", { year: "numeric" });
  return `${day} ${month} ${year}`;
}

function getDateCalendar(data) {
  const date = new Date(data);
  const day = date.toLocaleString("default", { day: "2-digit" });
  const year = date.toLocaleString("default", { year: "numeric" });
  const month = date.toLocaleString("en-EN", { month: "2-digit" });
  return `${year}-${month}-${day}`;
}

function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

function getFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function setToLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
