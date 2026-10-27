const showAssbtn = document.getElementById("ShowAssignmentNotification");
const showAttbtn = document.getElementById("ShowAttendenceNotification");
const stopAssbtn = document.getElementById("StopAssignmentNotification");

const assPara = document.getElementById("AssignmentNotification");
const attPara = document.getElementById("AttendanceNotification");

function ShowAssignment() {
    assPara.textcontent = "Your Assignment deadline is approaching";
}

showAssBtn.addEventListener("click", ShowAssingment);

showAttBtn.addEventListener("click", () => {
  attPara.textContent = "Please check your attendance status!";
});

stopAssBtn.addEventListener("click", () => {
  showAssBtn.removeEventListener("click", ShowAssingment);

  assPara.textContent = "Your assignment Notification is Stopped!";
});

const parent = document.getElementById("outer");
const child = document.getElementById("inner");

parent.addEventListener("click", () => {
  console.log("Parent Clicked");
});

child.addEventListener("click", () => {
  console.log("Child Clicked");
});

const stip = document.getElementById("EventCapturing");

function view() {
  console.log("View Button Clicked");
}

stip.addEventListener("click", view);

document.getElementById("view").addEventListener("click", view);

const parentCard = document.getElementById("EventDelegation");

parentCard.addEventListener("click", (e) => {
  //   console.log(e.target.tagName);

  if (e.target.tagName === "DIV") {
    console.log(e.target.textContent);
  }
});