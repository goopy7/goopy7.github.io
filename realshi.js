const btn = document.getElementById("update");
const marquee = document.querySelector(".marquee-container .marquee-content");
const input = document.getElementById("textBox");

let timer = 10; // in seconds
let timerID;

btn.addEventListener("click",function() {
    timer = input.value;
    clearInterval(timerID);
    timerID = setInterval(alternateText, timer * 1000);
    alternateText()

    marquee.style.animationDuration = timer + "s";
    element.style.animation = "spin "+ timer +"s linear infinite"; 
    document.getElementById("response").innerHTML("Changed to " + timer + "seconds");
});


let tips = ["The birch canoe slid on the smooth planks.",
        "Glue the sheet to the dark blue background.",
        "It's easy to tell the depth of a well.",
        "These days a chicken leg is a rare dish.",
        "Rice is often served in round bowls.",
        "The juice of lemons makes fine punch.",
        "The box was thrown beside the parked truck.",
        "The hogs were fed chopped corn and garbage.",
        "Four hours of steady work faced us.",
        "A large size in stockings is hard to sell."];

let index = 0;
function alternateText() {
    marquee.innerHTML = tips[index];
    if (index + 1 > tips.length) {
        index = 0;
    } else {
        index++;
    }
}

alternateText(); //once to initialize
timerID = setInterval(alternateText, timer * 1000);