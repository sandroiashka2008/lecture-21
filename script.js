// 1. შექმენით რიცხვების მასივი და თითოეული რიცხვისთვის foreach ციკლით დაბეჭდეთ მათი კვადრატი.


let numbers = [20, 10, 13, 14 ,88]

numbers.forEach(function(number, index) {
    console.log(number * number); 
});


//  2. შექმენით ხილის სახელების მასივი და foreach ციკლით დაბეჭდეთ თითოეული ხილის სახელი.

let fruits = ["apple" , "strawberry" , "banana" , "watermelon"]

fruits.forEach(function(furit)  {
    console.log(furit);
})

//  3. მასივში არსებული რიცხვების ჯამი გამოიანგარიშეთ foreach ციკლით.

let num = [12, 2, 5, 16];
let sum = 0; 
num.forEach(function(num) {
    sum += num; 
});

console.log(sum); 


//  4. შექმენით მასივი სტუდენტების სახელებით და foreach ციკლით დაბეჭდეთ, რომელი სტუდენტი რომელ ადგილზეა.

let students = ["bero", "suxo", "keti", "sandro"];

students.forEach(function(student, index) {
    console.log(`სტუდენტი ${student} არის ადგილზე ${index + 1}`);
});



//  5. შექმენით მასივი და მასში ჩაწერეთ მთელი რიცხვები. foreach ციკლით მხოლოდ ლუწი რიცხვები დაბეჭდეთ.

let num1 = [ 3, 6, , 4, 9, 7, 5] 

num1.forEach(function(num1, index) {
    if(num1 % 2 === 0) {
        console.log(num1);
    }
});


//  6. შექმენით რიცხვების მასივი და map მეთოდის საშუალებით მიიღეთ მათი კვადრატების ახალი მასივი.

let num2 = [3, 4, 5, 6] 

let squaredNum2 = num2.map(function(num2) {
    return num2 * num2; 
});

console.log(squaredNum2);

//  7. მასივში ჩაწერეთ სახელები და map მეთოდის გამოყენებით ყოველი სახელი ყველა ასოს პატარა ასოზე გადააკეთეთ.
let names = ["Mari", "Gabrieli", "Nini", "Saba"]

let lowerCaseNames = names.map(function(name) {
    return name.toLowerCase(); 
});

console.log(lowerCaseNames);

//  8. შექმენით რიცხვების მასივი და map მეთოდით მიიღეთ მასივი, სადაც ყველა რიცხვი 10-ზე გაიზარდა.

let num3 = [20, 14, 19, 17]

let newNumbers = num3.map(function(num3) {
    return num3 + 10;
  });
  
  console.log(newNumbers);

//  9. შექმენით ობიექტების მასივი, სადაც თითოეულ ობიექტში არის სტუდენტის სახელი და ქულა. map მეთოდით მიიღეთ ახალი მასივი მხოლოდ სტუდენტების სახელებით.
let studentss = [
    {name: "mari", score: 12},
    {name: "nika", score: 4},
    {name: "elne", score: 2},
    {name: "malxazi", score: 14}
];

let studentNames = studentss.map(function(studentss) {
    return studentss.name; 
});

console.log(studentNames);

//  10. შექმენით რიცხვების მასივი და map მეთოდით მიიღეთ მასივი, რომელშიც ყველა ლუწი რიცხვი გაორმაგებულია, ხოლო კენტი არ შეცვლილა.
let num4 = [23, 2, 42, 11, 3];


let evenNumbers = num4.map(function(num) {
    if (num % 2 === 0) {
        return num * 2; 
    } else {
        return num; 
    }
});

console.log(evenNumbers); 

//  11. შექმენით რიცხვების მასივი და filter მეთოდით მიიღეთ მხოლოდ ლუწი რიცხვების მასივი.
let num5 = [ 3, 4, 2, 12, 24]

let evenNumber = num5.filter(function(num5) {
return num5 % 2 === 0
})

console.log(evenNumber);

//  12. შექმენით სახელების მასივი და filter მეთოდით მხოლოდ ის სახელები ამოიღეთ, რომლებიც 5-ზე მეტ სიმბოლოს შეიცავს.

let  name1 = ["tako" , "gio", "lazare", "anastasia"]

let longNames = name1.filter(function(name1) {
   if(name1.length >= 5) {
    return true
   }
})

console.log(longNames);

//  13. შექმენით რიცხვების მასივი და filter მეთოდით მხოლოდ დადებითი რიცხვები მიიღეთ.
let num6 = [23, -12, -23, 24] 

let positiveNumbers = num6.filter(function(num6){
     if(num6 > 0) {
        return true
     }
})

console.log(positiveNumbers);
//  14. შექმენით ობიექტების მასივი, სადაც თითოეულ ობიექტში არის პროდუქტების სახელები და ფასები. filter მეთოდით მიიღეთ მხოლოდ ის პროდუქტები, რომელთა ფასი 100-ზე მეტია.

let vegetables = [
    {name: "potatoe", price: 112},
    {name: "Tomato", price: 11},
    {name: "Cucumber", price: 134},
    {name: "Herbs", price: 25},
    {name: "Eggplant", price: 213}
];


let expensiveVegetables = vegetables.filter(function(vegetables) {
    return vegetables.price > 100; 
  });
console.log(expensiveVegetables);

//  15. შექმენით რიცხვების მასივი და filter მეთოდით მიიღეთ ყველა რიცხვი, რომელიც 50-ს აღემატება.

let number1 = [12, 23, 44, 34] 

let longNumber1 = number1.filter(function(number1){
       
})


//  16. დაწერეთ კოდი, რომელიც while ციკლით 1-დან 10-მდე რიცხვებს დაბეჭდავს.

let i = 1; 

while (i <= 10) { 
  console.log(i); 
  i++; 
}

//  17. დაწერეთ პროგრამა, რომელიც while ციკლით მასივში არსებული რიცხვების ჯამს გამოიანგარიშებს.

let numbers2 = [10, 20, 30, 40, 50]; 
let sum2 = 0; 
let i2 = 0; 

while (i2 < numbers2.length) { 
  sum2 += numbers2[i2]; 
  i2++; 
}

console.log(sum2);

//  18. შექმენით ცვლადი რიცხვით 1 და while ციკლით იმატეთ 2-ით, სანამ რიცხვი არ მიაღწევს 20-ს.

let number = 1; 

while (number <= 20) { 
  console.log(number); 
  number += 2; 
}

//  19. დაწერეთ პროგრამა, რომელიც while ციკლით რიცხვებს დაბეჭდავს 20-დან 10-მდე დაღმავალი თანმიმდევრობით.

let number2 = 20;

while (number >= 10) { 
  console.log(number); 
  number--; 
}

//  20. დაწერეთ პროგრამა, რომელიც while ციკლით მასივში ყველა ობიექტს გამოიკვლევს და თითოეული მათგანის სახელს დაბეჭდავს.


let objects = [
    { name: "Apple", type: "Fruit" },
    { name: "Carrot", type: "Vegetable" },
    { name: "Banana", type: "Fruit" },
    { name: "Cucumber", type: "Vegetable" }
  ];
  
  let i3 = 0; 
  while (i < objects.length) { 
    console.log(objects[i3].name); 
    i3++; 
  }