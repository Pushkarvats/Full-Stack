const students = [
    {
    name: "Rahul",
    age: 21,
    gender: "male",
    college: "LNCT",
    course: "Btech",
    details: [{subject: "DBMS", credits:4 , marks:67}],
    },

    {
    name: "Manisha",
    age: 20,
    gender: "female",
    college: "JNCT",
    course: "Btech",
    details: [
        {subject: "Operating System", credits:3 , marks:64},
        {subject: "DBMS", credits:4 , marks:72},
        ],
    },

    {
    name: "Rohit",
    age: 22,
    gender: "male",
    college: "Oriental",
    course: "BCA",
    details: [{subject: "Computer_Architecture", credits:3 , marks:67}],
    personalDetails: {
        F_Name: "Amit Singh",
        Contact_No: 9876543210,
        Address: "Bhopal",
        Email: "rohit@gmail.com",
    },
    },

];

console.log(students);

students[1].college = "LNCT";
students[0].details[2] = 87;
students[2].personalDetails.Contact_No = 9321456783;

