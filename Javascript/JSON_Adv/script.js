const ob = {
    fullName: "Pushkar",
    gender: "male",
    college: "JNCT",
    year: 3,
    cgpa: 7.9,

};

console.log(ob);
console.log(Object.keys(ob));
console.log(Object.values(ob));
console.log(Object.entries(ob));

const {fullName, year, cgpa } = ob; 

function displayStudent(name, ...subjects) {
    console.log("Student:", name);
    console.log("Subjects:", subjects);  
}

displayStudent("Aarav", "HTML", "CSS", "JavaScript", "Bootstrap", "React");

function Sum(...n) {
    return n.reduce((result = 0, num) => (result += num))
}


