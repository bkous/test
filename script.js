// console.log("It works!"); 

 let mainHeading = document.getElementsByTagName("h1");
 console.log(mainHeading);

let mainHeadingText = document.getElementsByTagName("h1")[0].textContent;

console.log(mainHeadingText);

let mainHeadingIdText = document.getElementById("hello").textContent;

console.log(mainHeadingIdText);

let mainHeadingClassText = document.getElementsByClassName("ninja")[0].textContent;

console.log(mainHeadingClassText);

let mainHeadingId = document.getElementById("hello");
mainHeadingId.textContent = "Hello, new heading!";

// mainHeadingId.style.color = "red";

mainHeadingId.classList.add("green-text");

mainHeadingId.classList.remove("green.text");
mainHeadingId.classList.add("blue-text");

function changeToRed() {
    let mainHeadingId = document.getElementById("Smart");
    mainHeadingId.classList.add("red-text");

}
