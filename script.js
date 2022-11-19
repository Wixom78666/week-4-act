// Variables

var questAns = document.querySelector("#gameBox");
var startBtn = document.querySelector("#ignition");
var tik = document.querySelector("#tikTok");
var wrap = document.querySelector("#perim");
var points = 0;
var whichQues = 0;
var beginning = 0;
var remainTime = 60;

var preguntas = [
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    }
];

startBtn.addEventListener("click", function () {
    if (beginning === 0) {
        beginning = setInterval(function () {
            remainTime--;
            tik.textContent = remainTime;

        }, 1000);
    }
});

