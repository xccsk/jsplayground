const btn = document.getElementById("search-input");

btn.addEventListener("click", getDatafromUrl());

const api_data = {};

function getDatafromUrl() {
  fetch("https://randomuser.me/api/")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data)
    })
    .catch(function (err) {
      console.log("Fetch Error :-S", err);
    });
}

let outputdata = () => {
  console.log(api_data);
};
