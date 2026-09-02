//Calculator

function discountCalculator(discount) {
    return function (price) {
        return price - price * (discount / 100);
    };
}

let ten = discountCalculator(10);
let twenty = discountCalculator(20);


console.log(ten(1200));
console.log(twenty(1200));


// Rock, Paper, Scissors Game

function rps(user, computer) {
    if (user === computer) return "draw";

    if  (user === "rock" && computer === "scissors") return "user";
    if  (user === "paper" && computer === "rock") return "user";
    if  (user === "scissors" && computer === "paper") return "user";

    return "computer";
}
console.log(rps("rock", "paper"));



//Loop

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


//Use .every() to check if all elements in an array are even numbers

let arr = [2, 4, 6, 8, 10];
let ans = arr.every(function (val) {
    return val % 2 === 0;
});
console.log(ans);

// Use Object enteries() to print all key-value pairs are:
// title: Java Script
// duration: 4 weeks

const course = {
    title: "Java Script",
    duration: "4 weeks"
};

Object.entries(course).forEach(function (val) {
    console.log(val[0] + ": " + val[1]);
});



// Rewrite this safely using the optional chaining

const person = {}
console.log(person?.address?.street);


// Weather

let city = "Islamabad";
let temperature = 30;
let weather = "Sunny";

console.log("City: " + city);
console.log("Temperature: " + temperature + "°C");
console.log("Weather: " + weather);

console.log("Hello World");
