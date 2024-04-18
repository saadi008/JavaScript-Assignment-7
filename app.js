// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.


let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let fullName = firstName + " " + lastName;
alert("Hello, " + fullName + "! Welcome!");


// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser.

let favoriteModel = prompt("Enter your favorite mobile phone model:");
let lengthOfString = favoriteModel.length;
document.write("<p>My Favourite phone is: " + favoriteModel + "<br>");
document.write("Length of string: " + lengthOfString + "</p>");


// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser.

let word = "Pakistani";
let indexOfN = word.indexOf("n");
document.write("<p>Index of letter 'n' in the word 'Pakistani' is: " + indexOfN + "</p>");


// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

let letter = "Hello World";
let lastIndex = letter.lastIndexOf("l");
document.write("<p>Last index of letter 'l' in the word 'Hello World' is: " + lastIndex + "</p>");


// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.


let country = "Pakistani";
let characterAt3rdIndex = country.charAt(3);
document.write("<p>Character at 3rd index in the word 'Pakistani' is: " + characterAt3rdIndex + "</p>");


//   7. Write a program to replace the “Hyder” to “Islam” in the
//   word “Hyderabad” and display the result in your browser.


let word1 = "Hyderabad";
let newWord = word1.replace("Hyder", "Islam");
document.write("<p>After replacing 'Hyder' with 'Islam', the new word is: " + newWord + "</p>");


// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;


var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");
document.write("<p>Original message: " + message + "</p>");
document.write("<p>After replacing all occurrences of 'and' with '&', the new message is: " + newMessage + "</p>");


// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.


let str = "472";

let num = parseInt(str);
document.write("<p>Original string: " + str + "<br>");
document.write("Type of original string: " + typeof str + "</p>");
document.write("<p>Converted number: " + num + "<br>");
document.write("Type of converted number: " + typeof num + "</p>");


// 10. Write a program that takes user input. Convert and
// show the input in capital letters.


let userInput = prompt("Enter your input:");
let capitalLetters = userInput.toUpperCase();
document.write("<p>Original input: " + userInput + "<br>");
document.write("Input in capital letters: " + capitalLetters + "</p>");



// 11. Write a program that takes user input. Convert and
// show the input in title case.

let user_Input = prompt("Enter your input:");
let titleCase = user_Input.charAt(0).toUpperCase() + user_Input.slice(1).toLowerCase();
document.write("<p>Original input: " + user_Input + "<br>");
document.write("Input in title case: " + titleCase + "</p>");


// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.


var myNum = 35.36;
var strNum = myNum.toString().replace(".", "");
document.write("<p>Original number: " + myNum + "<br>");
document.write("Number after removing the dot: " + strNum + "</p>");


// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64


let username = prompt("Enter your username:");
let specialSymbols = [33, 44, 46, 64];
let isValid = true;
for (let i = 0; i < specialSymbols.length; i++) {
    if (username.includes(String.fromCharCode(specialSymbols[i]))) {
        isValid = false;
        break;
    }
}
if (!isValid) {
    alert("Please enter a valid username without special symbols [@ . , !]");
} else {
    alert("Username is valid: " + username);
}

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:



let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let customerInput = prompt("Enter the item you want to search:");
let lowercaseInput = customerInput.toLowerCase();
let isFound = false;
for (let i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() === lowercaseInput) {
        isFound = true;
        alert(userInput + " is available at index " + i + " in our bakery.");
        break;
    }
}
if (!isFound) {
    alert("We are sorry. " + userInput + " is not available in our bakery.");
}


//   15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.



let password = prompt("Enter your password:");
let containsAlphabetsAndNumbers = /[a-zA-Z]/.test(password) && /\d/.test(password);
let startsWithAlphabet = /^[a-zA-Z]/.test(password);
if (
    containsAlphabetsAndNumbers &&
    !startsWithAlphabet &&
    password.length >= 6
) {
    alert("Password is valid!");
} else {
    alert("Please enter a valid password that contains alphabets and numbers, does not start with a number, and is at least 6 characters long.");
}


// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

var university = "Hamdard University Karachi";
var arrayUniversity = university.split(" ");
document.write("<p>Elements of array:</p>");
document.write("<ul>");
for (var i = 0; i < arrayUniversity.length; i++) {
    document.write("<li>" + arrayUniversity[i] + "</li>");
}
document.write("</ul>");


//  17. Write a program to display the last character of a user
// input.

let input = prompt("Enter a string:");
let lastCharacter = input.charAt(input.length - 1);
document.write("<p>Last character of the input: " + lastCharacter + "</p>");



// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

var sentence = "The quick brown fox jumps over the lazy dog";
var lowercaseSentence = sentence.toLowerCase();
var wordToSearch = "the";
var words = lowercaseSentence.split(" ");
var count = 0;
for (var i = 0; i < words.length; i++) {
    if (words[i] === wordToSearch) {
        count++;
    }
}
document.write("<p>Number of occurrences of the word 'the': " + count + "</p>");