const showAssbtn = document.getElementById("ShowAssignmentNotification");
const showAttbtn = document.getElementById("ShowAttendenceNotification");
const stopAssbtn = document.getElementById("StopAssignmentNotification");

const assPara = document.getElementById("AssignmentNotification");
const attPara = document.getElementById("AttendanceNotification");

function ShowAssignment() {
    assPara.textcontent = "Your Assignment deadline is approaching";
}

showAttbtn.addEventListener("click", () => {
    attPara.textContent = "Please check your attendance status"

});

stopAssbtn.addEventListener("click", () => {
    
})
