console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";
if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

// Part 2: Even / Odd
const number = 6;
if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// Part 3: Hotdogs
const numberOfHotdogs = 42;
if (numberOfHotdogs < 5) {
  console.log("2 euro / Hotdog");
} else if (numberOfHotdogs < 100) {
  console.log("1.50 euro / Hotdog");
} else if (numberOfHotdogs < 1000000){
  console.log("1 euro / Hotdog");
}else{
    console.log("0.10 euro/ Hotdogs");
}

// Part 4: Daytime
const currentHour = 12;
const statement = "";
if(currentHour < 17 ){
    console.log("Still need to learn...")
}else{
console.log("Partytime!!!")
}
console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const greeting = "Hello " + userName + "!";

console.log(greeting);
