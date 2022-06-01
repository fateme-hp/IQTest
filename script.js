// define variables to select elements

// select body
let body = document.querySelector('body');


// create elements for the first stage 

// create a div with form id 
let firstStage = document.createElement('div');
// set id for div 
firstStage.setAttribute('id','form');
// append child to body
body.appendChild(firstStage);
// create a label for name 
let nameLabel = document.createElement('label');
// set attribute for label
nameLabel.setAttribute('for','input');
// append child to form
firstStage.appendChild(nameLabel);
//append label 
nameLabel.append('Name: ')
// create an input for name 
let userName = document.createElement('input');
// set attributes for input
userName.setAttribute('type','text');
userName.setAttribute('id','input');
userName.setAttribute('placeholder','name');
// append child to form
firstStage.appendChild(userName);
// create an input for submit
let submit = document.createElement('input');
// set attributes for input
submit.setAttribute('type','submit');
userName.setAttribute('id','submit');
// append child to form
firstStage.appendChild(submit);
// submit statement
let formSpan = document.createElement('span');
// append child to form
firstStage.appendChild(formSpan);
//append span 
formSpan.append('IQ test will start after submitting name.')