var a = 2;
var b = 6;
var c = b*a;
// ye ,main page ka liya ha 
document.write("The value of variable 'c' is: " + c);
// chrome browser mei kuch krna chahiye to woh code use kar skte ho
console.log("value of  variable 'c':" + c);


let noor= 99;
let haroon = 98;
let noorharoon=noor+haroon;
document.write("<br> The sum of variables 'noor' and 'haroon' is : "+ noorharoon);

console.log("value of  variable 'noorharoon':" + noorharoon);

const DAYS_OF_WEEK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Days of the week: " + DAYS_OF_WEEK);
console.log ("day of the week han" +DAYS_OF_WEEK );
document.write("Days of the week: " + DAYS_OF_WEEK);

const CONFIG = {
    maxUsers: 100,
    serverAddress: "https://badmintonsportslover.blogspot.com/"
  };

// console.log(parent.child);
console.log(CONFIG.maxUsers);
console.log(CONFIG.serverAddress);
// document.write(CONFIG.maxUsers+"<br>"+CONFIG.serverAddress);
document.write("<br>");
document.write(CONFIG.maxUsers);
document.write("<br>");
document.write(CONFIG.serverAddress);

//BigInt
let p = 120;
let y = 12;
console.warn(p*y);



const isLogged = true;
if (isLogged) {
  console.log('User is logged in.');
} else {
  console.log('User is not logged in.');
}

let a = 3;
console.log((a **= 2));
// Expected output: 3^2=9

console.log((a **= 0));
// Expected output: 3^0=1

console.log((a **= 'hello'));
// Expected output: 3^hallo


const hasPermission = true;
const isAdmin = false;
const canEdit = hasPermission && isAdmin;  // Both conditions must be true
const isLoggedIn = true;
const hasSubscription = true;
const canAccessContent = isLoggedIn || hasSubscription;  // Either condition must be true
console.log(canEdit);        // Output: false (because isAdmin is false)
console.log(canAccessContent);  // Output: true (because isLoggedIn is true)


let age = 25;
if (age >= 18) {
    console.log("you are eligible for voting");
} else {
    console.log("you are not eligible for voting");
}

//  Logical AND operator (&&): Returns true only
var percentage = 99/* assign the student's percentage here */;
if (percentage >= 80 && percentage <= 100) {
    console.log("Grade: Merit");
} else if (percentage >= 60 && percentage <= 79) {
    console.log("Grade: 1st Division");
} else if (percentage >= 45 && percentage <= 59) {
    console.log("Grade: 2nd Division");
} else if (percentage >= 33 && percentage <= 44) {
    console.log("Grade: 3rd Division");
} else if (percentage < 33) {
    console.log("Grade: Fail");
} else {
    console.log("Invalid percentage");
}

function getFee(isMember) {
    return isMember ?        '$2.00' : '$10.00';
 //  return isMember Qustion 'RIght' : 'left';
//   return isMember Q        'true' : 'false/null';
  }
  
  console.log(getFee(true));
  // Expected output: "$2.00"
  
  console.log(getFee(false));
  // Expected output: "$10.00"
  
  console.log(getFee(null));
  // Expected output: "$10.00"
