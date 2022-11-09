// for (let i = 1; i <= 10; i++) {
//     console.log(2**i);
// }

// let i = 1;
// while (i <= 10) {
//     i = i + 1
//     console.log(2**i);
// }

// let input;
// do {
//     input = prompt("What is your name");
// } while(!isNaN(Number(input))); 

// // alert("Hello " + input);

// alert(`Hello ${input}`) 

// let fruits = ['Banana','Apple']
// fruits.push('Orange')
// fruits.unshift('Mango')
// console.log(fruits)

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i])
// }
// for ( let item of fruits) {
//     console.log(item)
// }

// const person = {
//     name:['Timur', 'Reziapov'],
//     age:32,
//     gender:'male',
//     hobbies :['music', 'skiing']
// }

// console.log(`my name is ${person.name[0]} ${person.name[1]}. I am interested in ${person.hobbies[0]} and ${person.hobbies[1]}`)

let student1 = {
    ID: "A00022",
    GPA: 3.0,
    program: "CIT"
};

let student2 = {
    ID: "A01000",
    GPA: 3.1,
    program: "CST"
};

let student3 = {
    ID: "A00114",
    GPA: 3.2,
    program: "CIT"
};
let students = [student1, student2, student3];

let score = 0;
for (let stu of students) {
    if (stu.GPA > 3 && stu.program === 'CIT') {
        score = score + 1;
    };
};
console.log(score);