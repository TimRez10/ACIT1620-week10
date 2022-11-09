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

let fruits = ['Banana','Apple']
fruits.push('Orange')
fruits.unshift('Mango')
console.log(fruits)

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}
for ( let item of fruits) {
    console.log(item)
}
