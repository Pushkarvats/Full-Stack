function ShowAlert() {
    alert("Click me button clicked using HTML Events");
}

document.getElementById("clickButton").addEventListener("click", ShowAlert2);

function ShowAlert2() {
    alert("Click me button clicked using JavaScript Events")
}

document.getElementById("box").addEventListener("click", () => {
    document.getElementById("box").innerText = "The Box Was Clicked";
});

// document.getElementById("box2").addEventListener("mouseenter", () => {
//     document.getElementById("box2").innerText = "The mouse entered to box";
// });

// document.getElementById("box2").addEventListener("mouseout", () => {
//     document.getElementById("box2").innerText = "The mouse exit from box";
// });


document.getElementById("mouse").addEventListener("mousedown", () => {
    document.getElementById("mouse").innerText = "The Mouse button pressed";
});
document.getElementById("mouse").addEventListener("mouseup", () => {
    document.getElementById("mouse").innerText = "The Mouse button released";
});

document.getElementById("doubleclick").addEventListener("dblclick", () => {
    document.getElementById("doubleclick").innerText = "You double-clicked this paragraph";
});

document.getElementById("over").addEventListener("mouseover", () => {
    document.getElementById("over").innerText = "Mouse pointer is moving over this text";
});

document.getElementById("nameSubmit").addEventListener("click", () => {
    console.log(document.getElementById("fullName").value.trim());
});

document.getElementById("fullName").addEventListener("keydown", (e) => {
  e.key === "Enter" &&
    console.log(document.getElementById("fullName").value.trim());
});

document.getElementById("LoginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Login Done");
});
