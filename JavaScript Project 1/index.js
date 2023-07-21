let buttons = document.querySelectorAll(".button");
let body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    // console.log(e);
    console.log(e.target.id);
    if (e.target.id === "darkcyan") {
      body.style.backgroundColor = "rgb(194, 114, 219)";
      //   button.style.backgroundColor = "rgb(82, 87, 176)";
    }
    if (e.target.id === "orange") {
      body.style.backgroundColor = "rgb(141, 141, 239)";
      //   button.style.backgroundColor = "orange";
    }
    if (e.target.id === "green") {
      body.style.backgroundColor = "rgb(115, 201, 226)";
      //   button.style.backgroundColor = "green";
    }
  });
});
