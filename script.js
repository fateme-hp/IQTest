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
  img.setAttribute("src", "images/" + [i] + "/test" + [i] + ".png"); //----یادت باشه برگردونی !!!
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

// creat a div for result page

// create a div with form id
let resultPage = document.createElement("div");

// set id for div
resultPage.setAttribute("id", "result-page");

// append child to body
testSection.appendChild(resultPage);

// create a h2 with form id
let formTitleResultPage = document.createElement("h2");

// append child to first stage
resultPage.appendChild(formTitleResultPage);

//append h2
formTitleResultPage.append("Your Final Score!");

let scoreMessage = document.createElement("span");
resultPage.appendChild(scoreMessage);

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
}
// create a loop and add event listener for click
// let calc = [];
let testAnswer = document.querySelectorAll(".testOptions img");
console.log(testAnswer);
let score;
let output = []; // define an array for output
for (let i = 0; i < testAnswer.length; i++) {
  testAnswer[i].addEventListener("click", check);
  function check() {

    let Container = testAnswer[i];
    let nextContainer =
      Container.parentElement.parentElement.nextElementSibling;
  
    Container.parentElement.parentElement.style.display = "none";
    nextContainer.style.display = "flex";
  
    // push element if clicked element has correct class
    if (testAnswer[i].classList.contains("correct")) {
      output.push(testAnswer[i]);
    }
  
    result =  output.length;
    calc = 20 * result / 3;
    score = Math.round(calc);
  

    if (score  <= 90) {
      scoreMessage.append("Dear " + submittedName + ", you scored  " + score );
    } else if (90 < score  <= 109) {
      scoreMessage.append("Dear" + submittedName + ", you scored" + score );
    } else if (109 < score  <= 119) {score
      scoreMessage.append("Dear" + submittedName + ", you scored" + valueOfScore );
    } else if (119 < score  <= 129) {
      scoreMessage.append("Dear" + submittedName + ", you scored" + score );
    } else if (129 < score  <= 144) {
      scoreMessage.append("Dear" + submittedName + ", you scored" + score );
    } else if (144 < score ) {
      scoreMessage.append("Dear" + submittedName + ", you scored" + score );
    }
   
     
  
  
  
  }
}
/////////////////////////////////////////////////////////////////////////////
// creat timer
// creat article and append to body
let article = document.createElement("article");
body.appendChild(article)
// add class and id for article
article.classList.add("clock");
article.setAttribute("id","model3");
// crear a div for article and add class and add id and append to article
let artDiv = document.createElement("div");
artDiv.classList.add("count");
article.appendChild(artDiv)
// creat a div for artDiv 
let divDiv = document.createElement("div");
divDiv.setAttribute("id","timer");
artDiv.appendChild(divDiv)
let creattimer = document.createElement("h3");
article.appendChild(creattimer)





// if (score >=1 && score<=170) {
//   console.log("your good");
// }

///////////////////////////////
//timer
let sec = 15;
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
var h3 = document.getElementsByTagName("h3");
h3[0].innerHTML = "Countdown Timer With JS";

var sec         = 1800,
    countDiv    = document.getElementById("timer"),
    secpass,
    countDown   = setInterval(function () {
        'use strict';
        
        secpass();
    }, 1000);

function secpass() {
    'use strict';
    
    var min     = Math.floor(sec / 60),
        remSec  = sec % 60;
    
    if (remSec < 10) {
        
        remSec = '0' + remSec;
    
    }
    if (min < 10) {
        
        min = '0' + min;
    
    }
    countDiv.innerHTML = min + ":" + remSec;
    
    if (sec > 0) {
        
        sec = sec - 1;
        
    } else {
        
        clearInterval(countDown);
        
        countDiv.innerHTML = 'countdown done';
        
    }
  }


// // Set the date we're counting down to
// var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();

//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Output the result in an element with id="demo"
//   document.querySelectorAll(".demo").innerHTML = minutes + "m " + seconds + "s ";

//   // If the count down is over, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.querySelectorAll(".demo").innerHTML = "EXPIRED";
//   }
// }, 1000);

// ///////////////////////////////////////////////////////////
// var interval;
// var minutes = 1;
// var seconds = 5;
// window.onload = function() {
//     countdown('countdown');
// }

// function countdown(element) {
//     interval = setInterval(function() {
//         var el = document.getElementById(element);
//         if(seconds == 0) {
//             if(minutes == 0) {
//                 el.innerHTML = "countdown's over!";
//                 alert("countdown's over!");
//                 clearInterval(interval);
//                 return;
//               } else {
//                 minutes--;
//                 seconds = 60;
//             }
//         }
//         if(minutes > 0) {
//             var minute_text = minutes + (minutes > 1 ? ' minutes' : ' minute');
//         } else {
//             var minute_text = '';
//         }
//         var second_text = seconds > 1 ? 'seconds' : 'second';
//         el.innerHTML = minute_text + '"" ' + seconds + '"" ' + second_text + "' remaining'";
//         document.title = minute_text + ' ' + seconds + ' ' + second_text + ' remaining';
//         seconds--;
//     }, 1000);
// }
///////////////////////////////////////////////////////////

// // Creat a Div For Chart
// let ChartJS = document.createElement("div");
// // Append Child To Body
// body.appendChild(ChartJS);

//////////////////////////////////////////////////////////////////
// // Creat Canvas Tag
// let canvas = document.createElement("canvas");
// //Set Id For Div
// canvas.setAttribute("id","chart");
// //Append Child to ChartJS
// ChartJS.appendChild(canvas);
// // select chart
// let chartBox = document.getElementById("chart").getContext("2d")
// chart1 = new Chart(chartBox,{
//   type:'bar',
//   data:{
//     labels:["Your score is below average","You are in the middle class of intelligence","Your IQ is above average","congratulation! You are part of the smart class","The world needs smart people like you","You are unique, you are a genius !!!"],
//     datasets:[{
//       label:'The result of your IQ test in 2022',
//       data:[90,109,119,129,144,150],
//       backgroundColor:["red","#00ff00","blue","yellow","argb(255,165,60,1)"],
//       borderColor:["#000","#000","#000","#000","#000","#000"],
//       borderWidth:1
//     }]
//   }
// })





/////////////////////////////////////////////////////////////////////////////

// // create a form with form id
// let formTitleResultPage = document.createElement("h1");

// // append child to first stage
// resultPage.appendChild(formTitleResultPage);

// //append span
// formTitleResultPage.append("Your Final Score!");

// // create a form with form id
// let formResultPage = document.createElement("form");

// // set id for form
// formResultPage.setAttribute("id", "formResultPage");

// // append child to first stage
// resultPage.appendChild(formResultPage);

// // create a label for name
// let nameLabelRP = document.createElement("label");

// // set attribute for label
// nameLabelRP.setAttribute("for", "input");

// // append child to form
// form.appendChild(nameLabelRP);

// //append label
// nameLabelRP.append("Name: ");

// // create an input for name
// let userName = document.createElement("input");
// // set attributes for input
// userName.setAttribute("type", "text");
// userName.setAttribute("id", "name");
// userName.setAttribute("placeholder", " Your name . . .");
// // append child to form
// form.appendChild(userName);

// creat Chart By ChartJS
