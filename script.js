// define variables to select elements

// select body
let body = document.querySelector("body");

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
  testContainer.classList.add("container"+[i]);
  // append child to test section
  testSection.appendChild(testContainer);

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
    img.setAttribute("src" ,"images/"+[i]+"/test"+[i]+".png")  //----یادت باشه برگردونی !!!
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
// adding class of correct to correct answers 
// test 1
document.querySelector(".testOption1 img:nth-child(3)").classList.add("correct");
// test 2
document.querySelector(".testOption2 img:nth-child(1)").classList.add("correct");
// test 3
document.querySelector(".testOption3 img:nth-child(5)").classList.add("correct");
// test 4
document.querySelector(".testOption4 img:nth-child(5)").classList.add("correct");
// test 5
document.querySelector(".testOption5 img:nth-child(2)").classList.add("correct");
// test 6
document.querySelector(".testOption6 img:nth-child(1)").classList.add("correct");
// test 7
document.querySelector(".testOption7 img:nth-child(2)").classList.add("correct");
// test 8
document.querySelector(".testOption8 img:nth-child(2)").classList.add("correct");
// test 9
document.querySelector(".testOption9 img:nth-child(2)").classList.add("correct");
// test 10
document.querySelector(".testOption10 img:nth-child(6)").classList.add("correct");
// test 11
document.querySelector(".testOption11 img:nth-child(4)").classList.add("correct");
// test 12
document.querySelector(".testOption12 img:nth-child(1)").classList.add("correct");
// test 13
document.querySelector(".testOption13 img:nth-child(4)").classList.add("correct");
// test 14
document.querySelector(".testOption14 img:nth-child(7)").classList.add("correct");
// test 15
document.querySelector(".testOption15 img:nth-child(2)").classList.add("correct");
// test 16
document.querySelector(".testOption16 img:nth-child(3)").classList.add("correct");
// test 17
document.querySelector(".testOption17 img:nth-child(1)").classList.add("correct");
// test 18
document.querySelector(".testOption18 img:nth-child(6)").classList.add("correct");
// test 19
document.querySelector(".testOption19 img:nth-child(5)").classList.add("correct");
// test 20
document.querySelector(".testOption20 img:nth-child(8)").classList.add("correct");
// test 21
document.querySelector(".testOption21 img:nth-child(4)").classList.add("correct");
// test 22
document.querySelector(".testOption22 img:nth-child(4)").classList.add("correct");
// test 23
document.querySelector(".testOption23 img:nth-child(7)").classList.add("correct");
// test 24
document.querySelector(".testOption24 img:nth-child(6)").classList.add("correct");
// test 25
document.querySelector(".testOption25 img:nth-child(4)").classList.add("correct");
// test 26
document.querySelector(".testOption26 img:nth-child(7)").classList.add("correct");
// test 27
document.querySelector(".testOption27 img:nth-child(7)").classList.add("correct");
// test 28
document.querySelector(".testOption28 img:nth-child(3)").classList.add("correct");
// test 29
document.querySelector(".testOption29 img:nth-child(2)").classList.add("correct");
// test 30
document.querySelector(".testOption30 img:nth-child(8)").classList.add("correct");


// event listener 

// add event listener to submit name 
document.querySelector("#form").addEventListener('submit', submitName);
// add variable to get submitted name
let submittedName ;
//add event listener to get name change
document.querySelector("#name").addEventListener('change' , user);
// Get submitted name when name input changes
function user(event){
 console.log(event.target.value);
 submittedName = event.target.value;
 localStorage.setItem("name" , submittedName );

}
// when form is submitted change display 
function submitName(e) {
  e.preventDefault()
  document.getElementById("formContainer").style.display="none";
 document.querySelector(".container1").style.display="flex";
  

}
// create a loop and add event listener for click

let testAnswer = document.querySelectorAll(".testOptions img");
console.log(testAnswer);
let output = []; // define an array for output
for (let i = 0; i < testAnswer.length; i++) {
  testAnswer[i].addEventListener("click", check);
  function check() {
    // push element if clicked element has correct class 
    if (testAnswer[i].classList.contains("correct")) {
      output.push(testAnswer[i])
    }
    result = output.length;
    score = 20 * result / 3;
    console.log(score);
    // scoreMessage.append("Dear" + submittedName +", you scored" + score)

 let Container = testAnswer[i];
 Container.parentElement.parentElement.style.display ="none";
 let nextContainer = Container.parentElement.parentElement.nextElementSibling;
 nextContainer.style.display = "flex"
}
  
}






///////////////////////////////


// creat a div for result page

// create a div with form id
let resultPage = document.createElement("div");

// set id for div
resultPage.setAttribute("id", "result-page");

// append child to body
body.appendChild(resultPage);

// Creat a Div For Chart
let ChartJS = document.createElement("div");
// Append Child To Body 
body.appendChild(ChartJS);

ه





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

