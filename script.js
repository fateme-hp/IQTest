// define variables to select elements

// select body
let body = document.querySelector("body");

// creat a p for timer
let p = document.createElement("p");
// set att id ("demo")
p.setAttribute("id", "demo");
// append
body.appendChild(p);

// creat elements for result page
// create elements for the first stage

// create a div with form id
let firstStage = document.createElement("div");
// set id for div
firstStage.setAttribute("id", "formContainer");
// append child to body
body.appendChild(firstStage);
// create a form with form id
let formTitle = document.createElement("h1");
// append child to first stage
firstStage.appendChild(formTitle);
//append span
formTitle.append("IQ TEST");
// create a form with form id
let form = document.createElement("form");
// set id for form
form.setAttribute("id", "form");
// append child to first stage
firstStage.appendChild(form);
// create a label for name
let nameLabel = document.createElement("label");
// set attribute for label
nameLabel.setAttribute("for", "input");
// append child to form
form.appendChild(nameLabel);
//append label
nameLabel.append("Name: ");
// create an input for name
let userName = document.createElement("input");
// set attributes for input
userName.setAttribute("type", "text");
userName.setAttribute("id", "name");
userName.setAttribute("placeholder", " Your name . . .");
// append child to form
form.appendChild(userName);
// create an input for submit
let submit = document.createElement("input");
// set attributes for input
submit.setAttribute("type", "submit");
submit.setAttribute("id", "submit");
// append child to form
form.appendChild(submit);
// submit statement
let formSpan = document.createElement("span");
// append child to first stage
firstStage.appendChild(formSpan);
//append span
formSpan.append("IQ test will start after submitting name.");

// create elements for the second stage (test)

// create section for test
let testSection = document.createElement("section");
// append child to body
body.appendChild(testSection);

// create elements for test
for (let i = 1; i <= 30; i++) {
  // create a div container for test elements
  let testContainer = document.createElement("div");
  // set class for div
  testContainer.classList.add("testContainer");
  testContainer.classList.add("container" + [i]);
  // append child to test section
  testSection.appendChild(testContainer);

  //create a div container for containerTop
  let top = document.createElement("div");
  // set class for div
  top.classList.add("top");
  // append child to test container
  testContainer.appendChild(top);
  //create span for top
  let topSpan = document.createElement("span");
  // append child to first stage
  top.appendChild(topSpan);
  //append span
  topSpan.append(i + "/30");

  // create a div container for test img
  let testImage = document.createElement("div");
  // set class for div
  testImage.classList.add("testImage");
  testImage.classList.add("test" + [i]);
  // append child to test container
  testContainer.appendChild(testImage);

  // create an image element
  let img = document.createElement("img");
  // set attributes for img
  img.setAttribute("src", "./images/" + [i] + "/test" + [i] + ".png"); //----یادت باشه برگردونی !!!
  //append child to test image
  testImage.appendChild(img);

  // create a div container for test options
  let testOptions = document.createElement("div");
  // set class for div
  testOptions.classList.add("testOptions");
  testOptions.classList.add("testOption" + [i]);
  // append child to test container
  testContainer.appendChild(testOptions);

  // create loop for test options
  if (i <= 12) {
    for (let j = 1; j <= 6; j++) {
      let option = document.createElement("img");
      // set attributes for img
      option.setAttribute(
        "src",
        "images/" + [i] + "/" + [i] + "-" + [j] + ".png"
      );
      //append child to test image
      testOptions.appendChild(option);
    }
  } else {
    for (let j = 1; j <= 8; j++) {
      let option = document.createElement("img");
      // set attributes for img
      option.setAttribute(
        "src",
        "images/" + [i] + "/" + [i] + "-" + [j] + ".png"
      );
      //append child to test image
      testOptions.appendChild(option);
    }
  }
}

// create a div for result page

// create a div with form id
let resultPage = document.createElement("div");

// set id for div
resultPage.setAttribute("id", "result-page");

// append child to body
testSection.appendChild(resultPage);

// create a h2 for result page
let formTitleResultPage = document.createElement("h2");
// append child to result page
resultPage.appendChild(formTitleResultPage);
//append h2
formTitleResultPage.append("Your Final Score!");

let scoreMessage = document.createElement("span");
resultPage.appendChild(scoreMessage);

// create a img for result page
let resultImage = document.createElement("img");
// append child to result page
resultPage.appendChild(resultImage);

// adding class of correct to correct answers
// test 1
document
  .querySelector(".testOption1 img:nth-child(3)")
  .classList.add("correct");
// test 2
document
  .querySelector(".testOption2 img:nth-child(1)")
  .classList.add("correct");
// test 3
document
  .querySelector(".testOption3 img:nth-child(5)")
  .classList.add("correct");
// test 4
document
  .querySelector(".testOption4 img:nth-child(5)")
  .classList.add("correct");
// test 5
document
  .querySelector(".testOption5 img:nth-child(2)")
  .classList.add("correct");
// test 6
document
  .querySelector(".testOption6 img:nth-child(1)")
  .classList.add("correct");
// test 7
document
  .querySelector(".testOption7 img:nth-child(2)")
  .classList.add("correct");
// test 8
document
  .querySelector(".testOption8 img:nth-child(2)")
  .classList.add("correct");
// test 9
document
  .querySelector(".testOption9 img:nth-child(2)")
  .classList.add("correct");
// test 10
document
  .querySelector(".testOption10 img:nth-child(6)")
  .classList.add("correct");
// test 11
document
  .querySelector(".testOption11 img:nth-child(4)")
  .classList.add("correct");
// test 12
document
  .querySelector(".testOption12 img:nth-child(1)")
  .classList.add("correct");
// test 13
document
  .querySelector(".testOption13 img:nth-child(4)")
  .classList.add("correct");
// test 14
document
  .querySelector(".testOption14 img:nth-child(7)")
  .classList.add("correct");
// test 15
document
  .querySelector(".testOption15 img:nth-child(2)")
  .classList.add("correct");
// test 16
document
  .querySelector(".testOption16 img:nth-child(3)")
  .classList.add("correct");
// test 17
document
  .querySelector(".testOption17 img:nth-child(1)")
  .classList.add("correct");
// test 18
document
  .querySelector(".testOption18 img:nth-child(6)")
  .classList.add("correct");
// test 19
document
  .querySelector(".testOption19 img:nth-child(5)")
  .classList.add("correct");
// test 20
document
  .querySelector(".testOption20 img:nth-child(8)")
  .classList.add("correct");
// test 21
document
  .querySelector(".testOption21 img:nth-child(4)")
  .classList.add("correct");
// test 22
document
  .querySelector(".testOption22 img:nth-child(4)")
  .classList.add("correct");
// test 23
document
  .querySelector(".testOption23 img:nth-child(7)")
  .classList.add("correct");
// test 24
document
  .querySelector(".testOption24 img:nth-child(6)")
  .classList.add("correct");
// test 25
document
  .querySelector(".testOption25 img:nth-child(4)")
  .classList.add("correct");
// test 26
document
  .querySelector(".testOption26 img:nth-child(7)")
  .classList.add("correct");
// test 27
document
  .querySelector(".testOption27 img:nth-child(7)")
  .classList.add("correct");
// test 28
document
  .querySelector(".testOption28 img:nth-child(3)")
  .classList.add("correct");
// test 29
document
  .querySelector(".testOption29 img:nth-child(2)")
  .classList.add("correct");
// test 30
document
  .querySelector(".testOption30 img:nth-child(8)")
  .classList.add("correct");

// event listener

// add event listener to submit name
document.querySelector("#form").addEventListener("submit", submitName);
// add variable to get submitted name
let submittedName;
//add event listener to get name change
document.querySelector("#name").addEventListener("change", user);
// Get submitted name when name input changes
function user(event) {
  console.log(event.target.value);
  submittedName = event.target.value;
  localStorage.setItem("name", submittedName);
}
// when form is submitted change display
function submitName(e) {
  e.preventDefault();
  document.getElementById("formContainer").style.display = "none";
  document.querySelector(".container1").style.display = "flex";
  //timer
  let sec = 600;
  let time = setInterval(myTimer, 1000);

  function myTimer() {
    let timer = document.getElementById("demo");
    timer.innerHTML = sec + "sec left";
    sec--;

    for (let i = 0; i < 30; i++) {
      testBox = document.querySelectorAll(".testContainer");
      if (sec == -1) {
        clearInterval(time);
        testBox[i].style.display = "none";
        resultPage.style.display = "flex";
      }      
    }
  }
}
// create a loop and add event listener for click
// let calc = [];
let testAnswer = document.querySelectorAll(".testOptions img");
console.log(testAnswer);
let score;
let output = []; // define an array for output
for (let i = 0; i < testAnswer.length; i++) {
  testAnswer[i].addEventListener("click", next);
  function next() {
    let Container = testAnswer[i].parentElement;
    let nextContainer = Container.parentElement.nextElementSibling;
    Container.parentElement.style.display = "none";
    nextContainer.style.display = "flex";
  }
}
let correctAnswer = document.querySelectorAll(".correct");
let correctArray = Array.from(correctAnswer)
console.log(correctArray);

testAnswer.forEach(function (img) {
  clickedItem = img.addEventListener("click", check);
  console.log(clickedItem);
});
// clickedItem;
 matchingAnswer= [];
 let result;
function check(clickedItem) {

  output.push(clickedItem.srcElement);
  
  
  matchingAnswer = correctArray.filter(e => output.includes(e) );
  console.log(matchingAnswer);

 
  localStorage.setItem("result" , matchingAnswer.length);

  if (resultPage.style.display =="flex"){
    p.style.display = "none";
    result =localStorage.getItem("result");
    submittedName = localStorage.getItem("name")
    calc = 20 * result / 3;
    score = Math.round(calc);
    scoreMessage.append("Dear " + submittedName + ", you scored  " + score+",  " );
      // set attributes for img
      resultImage.setAttribute( "src","images/brain.webp");
    if (score  <= 90) {
      scoreMessage.append("Your IQ score is lower than average!");
      } else if (90 < score  <= 109) {
      scoreMessage.append("You are in the middle class of intelligence." );
      } else if (109 < score  <= 119) {score
      scoreMessage.append("Your intelligence is higher than average.");
      } else if (119 < score  <= 129) {
      scoreMessage.append("Congratulations! you are smart" );
      } else if (129 < score  <= 144) {
      scoreMessage.append("The world needs brilliant people like you" );
      } else if (144 < score ) {
      scoreMessage.append("Wonderful! you are a gifted");
      }
  }

  
  
}
