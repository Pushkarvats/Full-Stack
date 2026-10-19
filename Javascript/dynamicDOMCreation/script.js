const H = document.createElement("h2");
const P = document.createElement("p");
const B = document.createElement("button");

H.classList.add("text-info");
H.textContent = "Sub Heading";

P.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, delectus. Animi, repudiandae, doloribus nisi veritatis inventore cumque saepe nam qui,tempora vluptas aliquid voluptatum ipsa vel deserunt velit? Sit, quaerat aperiam. Exercitationem, itaque. Accusantium facere sequi dolorem sint,optio aspernatur aut repudiandae deserunt, enim voluptates nostrum voluptatem? Libero minima soluta corporis eos ad laborum veniam sed dicta. Dolor omnis quisquam optio sit explicabo ratione blanditiis saepe, tempora obcaecati ea porro pariatur repellat veniam et assumenda voluptate earumaccusantium reiciendis quos dolore suscipit eaque illum! Dolores, minima et?Quaerat, ullam est. Sunt corporis vitae libero eveniet ab exercitationemprovident optio nesciunt.";

B.classList.add("btn", "btn-primary");
B.innerText = "Submit";

const div = document.getElementById("task1");

div.appendChild(H);
div.appendChild(P);
div.appendChild(B);

H.append("Welcome");

console.log(H.innerText);

H.remove();



