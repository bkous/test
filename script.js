// console.log("It works!"); 

 let mainHeading = document.getElementsByTagName("h1");
 console.log(mainHeading);

let mainHeadingText = document.getElementsByTagName("h1")[0].textContent;

console.log(mainHeadingText);

let mainHeadingIdText = document.getElementById("hello").textContent;

console.log(mainHeadingIdText);

let mainHeadingClassText = document.getElementsByClassName("ninja")[0].textContent;

console.log(mainHeadingClassText);