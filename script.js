// define variables to select elements

// select body
let body = document.querySelector('body');


// create elements for the first stage 

// create a div with form id 
let firstStage = document.createElement('div');
// set id for div 
firstStage.setAttribute('id','formContainer');
// append child to body
body.appendChild(firstStage);
// create a form with form id 
let formTitle = document.createElement('h1');
// append child to first stage
firstStage.appendChild(formTitle);
//append span 
formTitle.append('IQ TEST')
// create a form with form id 
let form = document.createElement('form');
// set id for form
form.setAttribute('id','form');
// append child to first stage
firstStage.appendChild(form);
// create a label for name 
let nameLabel = document.createElement('label');
// set attribute for label
nameLabel.setAttribute('for','input');
// append child to form
form.appendChild(nameLabel);
//append label 
nameLabel.append('Name: ')
// create an input for name 
let userName = document.createElement('input');
// set attributes for input
userName.setAttribute('type','text');
userName.setAttribute('id','name');
userName.setAttribute('placeholder',' Your name . . .');
// append child to form
form.appendChild(userName);
// create an input for submit
let submit = document.createElement('input');
// set attributes for input
submit.setAttribute('type','submit');
submit.setAttribute('id','submit');
// append child to form
form.appendChild(submit);
// submit statement
let formSpan = document.createElement('span');
// append child to first stage
firstStage.appendChild(formSpan);
//append span 
formSpan.append('IQ test will start after submitting name.')