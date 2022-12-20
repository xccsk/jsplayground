const btn = document.getElementById("search-input");

btn.addEventListener("click", getDatafromUrl());

const api_data = {};

function getDatafromUrl() {
  fetch("https://randomuser.me/api/?results=2")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
    })
    /*.then(function (data) {
      data.forEach((user) => {
        const userinfo = document.createElement("li");
        userinfo.innerHTML(`${user.email}`);

        document.getElementById("userinfo").appendChild(userinfo);
      });
    })*/
    .catch(function (err) {
      console.log("Fetch Error :-S", err);
    });
}

let outputdata = () => {
  console.log(api_data);
};
