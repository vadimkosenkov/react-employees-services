function sendRequest(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.status < 400 && this.readyState === 4) {
      callback(JSON.parse(this.responseText));
    } else {
      callback([], new Error("Request failed: " + this.statusText));
    }
  };
  xhr.open("GET", url, true);
  xhr.send(null);
}
