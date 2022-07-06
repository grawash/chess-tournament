// async function getData() {
//     const img = document.querySelector('.temp')
//     const response = await fetch(
//       `https://chess-tournament-api.devtest.ge/api/grandmasters`,
//       { mode: 'cors' },
//     );
//     const data = await response.json();
//     const image = await data[0].image.blob();
//     img.src = data[0].image;
//     console.log(image);
//     return data;
//   }
//     getData();
// const form = document.querySelector('form')
// let formInputs = form.childNodes;
// formInputs.forEach(element =>{
//     console.log(element)
// })
// const input = document.querySelector('input')
// input.addEventListener('click', )
const inputs = document.querySelectorAll('input')
inputs.forEach(element => {
    element.addEventListener('click',() =>{ hideFunc(element)})
    element.addEventListener('focus',() =>{ hideFunc(element)})
    element.addEventListener('blur',() =>{ showFunc(element)})
})



function hideFunc(input){
    const pageIcon = document.querySelector('#currentPage')
    pageIcon.classList.add("current")
    let span = input.nextElementSibling;
    if(span.nodeName!=='IMG'){
      console.log(span)
      let asterisk = span.children[0];
      console.log(asterisk)
      if(span)span.remove()
      if(asterisk)asterisk.remove()
    }

}
function showFunc(input){
  if(input.value===""){
  const wrapper = input.parentElement;
  const newSpan = document.createElement("span")
  if(input.type==="email"){
    newSpan.textContent="Email address "
  }
  if(input.type==="date"){
    newSpan.textContent="Date of birth "
  }
  if(input.type==="tel"){
    newSpan.textContent="Phone number "
  }
  if(input.type==="tel"){
    newSpan.textContent="Phone number "
  }
  if(input.id==="name"){
    newSpan.textContent="Name "
  }
  const asterisk = document.createElement("span")
  asterisk.textContent="*"
  asterisk.classList.add("asterisk")
  wrapper.insertBefore(newSpan, input.nextElementSibling)
  newSpan.appendChild(asterisk)
}
}

const datePicker = document.querySelector("#date")
datePicker.addEventListener('focus', () => {
    if (datePicker.type==="text"){datePicker.type="date"}
})
datePicker.addEventListener('blur', () => {
    if(datePicker.type==="date" && datePicker.value===""){
        datePicker.type='text';
    }
})

const form  = document.getElementsByTagName('form')[0];
const errorModal = document.querySelector('.errorContainer')
const email = document.querySelector('#mail');
const phoneNum = document.querySelector('#tel')
const nameField = document.querySelector('#name')
const emailError = document.querySelector('.error');
const errorHeader = document.querySelector('.errHeaderText');
const date = document.querySelector('#date')
const closeBtn = document.querySelector('.cross')
const validMail ='@redberry.ge'
var regExp = /[a-zA-Z]/g;

//removes invalid class when correcting invalid field
inputs.forEach(element =>{
  element.addEventListener('input', function (event) {
    if(element.parentNode.classList.contains('invalid')){element.parentNode.classList.remove('invalid')}
});
});

//checks every input field for errors 
form.addEventListener('submit', function (event) {
  let currentMail= email.value;
  if(!nameField.validity.valid){
    showError();
    event.preventDefault();
    nameField.parentNode.classList.add('invalid')
  }else if(!email.validity.valid || !confirmEnding(currentMail,validMail)) {
    showError();
    event.preventDefault();
    email.parentNode.classList.add('invalid')
    showCheck()
  }else if(!phoneNum.validity.valid || regExp.test(phoneNum.value)){
    showError();
    event.preventDefault();
    showCheck();
    phoneNum.parentNode.classList.add('invalid')
  }else if (!date.validity.valid){
    showError();
    event.preventDefault();
    date.parentNode.classList.add('invalid')
    showCheck();
  }
});

//displays check sign if error not found
function showCheck(){
  inputs.forEach(element => {
    if(!element.parentNode.classList.contains('invalid') && element.value!==''){
      element.nextElementSibling.style.display='block'
    }
  })
}

//displays error message
function showError() {
  if(nameField.validity.valueMissing) {
    emailError.textContent = 'You need to enter your name'
    errorHeader.textContent='Invalid Name'
  }  else if(nameField.validity.tooShort) {
    emailError.textContent = 'Your name needs to be at least 2 characters long'
    errorHeader.textContent='Invalid Name'
  } else if(email.validity.valueMissing) {
    emailError.textContent = 'You need to enter an e-mail address.';
    errorHeader.textContent='Invalid Email'
  } else if(email.validity.typeMismatch) {
    emailError.textContent = 'Entered value needs to be an e-mail address.';
    errorHeader.textContent='Invalid Email'
  } else if(email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`;
    errorHeader.textContent='Invalid Email'
  } else if (!confirmEnding(email.value,validMail)) {
    emailError.textContent = `Please enter valid email adress`;
    errorHeader.textContent='Invalid Email'
  } else if(phoneNum.validity.valueMissing){
    emailError.textContent = 'You need to enter your phone number'
    errorHeader.textContent='Invalid Number'
  } else if (regExp.test(phoneNum.value)){
    emailError.textContent = 'Should only contain numbers'
    errorHeader.textContent='Invalid Number'
  } else if (phoneNum.validity.tooShort){
    emailError.textContent = `should be ${ phoneNum.minLength } characters; you entered ${ phoneNum.value.length }.`
    errorHeader.textContent='Invalid Number'
  } else if (date.validity.valueMissing){
    emailError.textContent = `Please enter date`
    errorHeader.textContent='Invalid Date'
  }

  emailError.className = 'error active';
  errorModal.style.display='block';
}
function confirmEnding(string, target) {
    return string.endsWith(target);
}

closeBtn.addEventListener('click',closeModal);
function closeModal(){
  errorModal.style.display='none';
}