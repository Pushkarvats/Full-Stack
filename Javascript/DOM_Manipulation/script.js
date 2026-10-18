const headingText = document.getElementById("heading");
const paraText = document.getElementById("studentMessage");
const btnLabel = document.getElementById("courseButton");

console.log(headingText.innerText);
console.log(paraText.textContent);
console.log(btnLabel.innerHTML);

headingText.innerText = "RAj Vardhan";
headingText.innerHTML = "Pushkar Jha";
headingText.textContent = "Aryan";

function UpdateMyName(){
    const myName = document.getElementById("myName").value.trim();
  //  paraText.innerText =  paraText.innerText + "!!" + myName;
    paraText.innerText = "Welcome to your learning portal" + "!!" + myName;

}


const pic = document.getElementById("somePicture");

pic.src = "./nature.jpg";
pic.alt = "lotus";


function change(){
     const myNameInput = document.getElementById("myName");

     myNameInput.id = "myFullName";
     myNameInput.type = "password";


     pic.setAttribute("src", "./nature2.jpg");
     pic.setAttribute("alt", "lotus");

}

headingText.style.color = "purple";
headingText.style.backgroundColor = "yellow";









// const body = document.querySelector("body");
// console.log(body);



