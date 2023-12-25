// Задание 8.7.1

// function printInfo() {
//     return this.name + " " + this.age;
// }

// const person = {
//     name: "Johny",
//     age: 42
// };

// printInfo.call(person);
// console.log(printInfo.call(person))

// *******************************************************************************************************************************************************

// Задание 8.7.2 

// function calculate(a, b, operator) {
//     if (operator === '+') {
//         return a + b;
//     } else if (operator === '-') {
//         return a - b;
//     } else if (operator === '*') {
//         return a * b;
//     } else if (operator === '/') {
//         return a / b;
//     }
// }

// const object = {
//     a: '',
//     b: '',
//     operator: '',
// };

// const array = [a = 2, b = 3, operator = '+'];

// calculate.apply(object, array);
// console.log(calculate.apply(object, array))

// *******************************************************************************************************************************************************

// Задание 8.7.3 

// let persons = [
//     { name: 'John', age: 17 },
//     { name: 'Max', age: 19 },
//     { name: 'Emma', age: 18 }
// ];

// function filtration() {
//     const filteredAge = persons.filter((person) => {
//         return person.age >= 18;
//     });
//     console.log(filteredAge);

//     result = persons.map((item) => ({ name: item.name }));
//     console.log(result);
// }

// filtration();


// *******************************************************************************************************************************************************

// Задание 8.7.4 
// const person = {
//     name: 'Dart',
//     surname: 'Wader',
//     setFullName() {
//         fullName = this.name + ' ' + this.surname;
//         return fullName;
//     }

// };
// console.log(person.setFullName());

// const secondPerson = {
//     name: 'John',
//     surname: 'Smith',
// };

// const setPersonFullName = person.setFullName.bind(secondPerson);

// setPersonFullName();

// console.log(setPersonFullName());
// *******************************************************************************************************************************************************

// Задание 8.7.5

// function arr() {
//     const arrNumbers = [1, 2, 6, 9, 2, 3, 5];
//     let arrSort = arrNumbers.sort(function(a, b) {
//         return a - b;
//     });
//     const arrUnique = Array.from(new Set(arrSort));
//     console.log(arrUnique);
//     return arrUnique;

// }

// arr();