const btn = document.getElementById("search-input");

btn.addEventListener("click", getDatafromUrl());

function getDatafromUrl() {
  fetch("https://randomuser.me/api/?results=10")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);

      // loop through the array of users
      data.results.forEach((user) => {
        // create an li element for each user
        const userinfo = document.createElement("li");
        // set the innerHTML of the li to the user's email address
        userinfo.innerHTML = user.email +' '+ user.location.country;

        // append the li to the ul element with the id "userinfo"
        document.getElementById("userinfo").appendChild(userinfo);
      });
    })
    .catch(function (err) {
      console.log("Fetch Error :-S", err);
    });
}
