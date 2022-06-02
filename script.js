// define variables to select elements

// select body
let body = document.querySelector("body");

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

// create elements for test
for (let i = 1; i <= 30; i++) {
  // create a div container for test elements
  let testContainer = document.createElement("div");
  // set class for div
  testContainer.classList.add("testContainer");
  // append child to body
  body.appendChild(testContainer);

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
  //   img.setAttribute("src" ,"images/"+[i]+"/test"+[i]+".png")  ----یادت باشه برگردونی !!!
  //append child to test image
  testImage.appendChild(img);

  // create a div container for test options
  let testOptions = document.createElement("div");
  // set class for div
  testOptions.classList.add("testOptions");
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
