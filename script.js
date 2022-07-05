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
const datePicker = document.querySelector("#date")
datePicker.addEventListener('focus', () => {
    if (datePicker.type==="text"){datePicker.type="date"}
})
datePicker.addEventListener('blur', () => {
    if(datePicker.type==="date" && datePicker.value===""){
        datePicker.type='text';
    }
})


function hideFunc(input){
    const pageIcon = document.querySelector('#currentPage')
    pageIcon.classList.add("current")
    let span = input.nextElementSibling;
    if(span){
      console.log(span)
      let asterisk = span.children[0];
      console.log(asterisk)
      if(span)span.remove()
      if(asterisk)asterisk.remove()
    }
    // span.classList.add('invisible')
    // asterisk.classList.add('invisible')
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
  wrapper.appendChild(newSpan)
  newSpan.appendChild(asterisk)
}
    // if(input.value===""){
    //     let span = input.nextElementSibling;
    //     let asterisk = span.children[0];
    //     console.log(asterisk)
    //     span.classList.toggle('invisible')
    //     asterisk.classList.toggle('invisible')
    // }
}

const form  = document.getElementsByTagName('form')[0];
const email = document.querySelector('#mail');
const phoneNum = document.querySelector('#tel')
const nameField = document.querySelector('#name')
const emailError = document.querySelector('.error');
var regExp = /[a-zA-Z]/g;


// inputs.forEach(element =>{
//   element.addEventListener('input', function (event) {
//   
//   if(confirmEnding(currentMail,validMail)){
//     if (email.validity.valid) {
//         emailError.textContent = ''; // Reset the content of the message
//         emailError.className = 'error'; // Reset the visual state of the message
//   } }else {
//     showError();
//   }
// });
// });
const validMail ='@redberry.ge'
form.addEventListener('submit', function (event) {
  let currentMail= email.value;
  if(!nameField.validity.valid){
    showError();
    event.preventDefault();
  }else if(!email.validity.valid || !confirmEnding(currentMail,validMail)) {
    showError();
    event.preventDefault();
  }else if(!phoneNum.validity.valid || regExp.test(phoneNum.value)){
    showError();
    event.preventDefault();
  }
});

function showError() {
  if(nameField.validity.valueMissing) {
    emailError.textContent = 'You need to enter your name'
  }  else if(nameField.validity.tooShort) {
    emailError.textContent = 'Your name needs to be at least 2 characters long'
  } else if(email.validity.valueMissing) {
    emailError.textContent = 'You need to enter an e-mail address.';
  } else if(email.validity.typeMismatch) {
    emailError.textContent = 'Entered value needs to be an e-mail address.';
  } else if(email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`;
  } else if (!confirmEnding(email.value,validMail)) {
    emailError.textContent = `Please enter valid email adress`;
  } else if(phoneNum.validity.valueMissing){
    emailError.textContent = 'You need to enter your phone number'
  } else if (regExp.test(phoneNum.value)){
    emailError.textContent = 'Should only contain numbers'
  } else if (phoneNum.validity.tooShort){
    emailError.textContent = `should be ${ phoneNum.minLength } characters; you entered ${ phoneNum.value.length }.`
  }

  emailError.className = 'error active';
}
function confirmEnding(string, target) {
    return string.endsWith(target);
  }