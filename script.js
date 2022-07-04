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
  let span = input.nextElementSibling;
  let asterisk = span.children[0];
  console.log(asterisk)
  span.classList.add('invisible')
  asterisk.classList.add('invisible')
}
function showFunc(input){
    if(input.value===""){
        let span = input.nextElementSibling;
        let asterisk = span.children[0];
        console.log(asterisk)
        span.classList.toggle('invisible')
        asterisk.classList.toggle('invisible')
    }
}

const form  = document.getElementsByTagName('form')[0];
const email = document.getElementById('mail');
const emailError = document.querySelector('.error');


email.addEventListener('input', function (event) {
  const validMail ='@redberry.ge'
  let currentMail= email.value;
  if(confirmEnding(currentMail,validMail)){
  if (email.validity.valid) {
    emailError.textContent = ''; // Reset the content of the message
    emailError.className = 'error'; // Reset the visual state of the message
  } }else {
    showError();
  }
});

form.addEventListener('submit', function (event) {

  if(!email.validity.valid) {
    showError();
    event.preventDefault();
  }
});

function showError() {
  if(email.validity.valueMissing) {
    emailError.textContent = 'You need to enter an e-mail address.';
  } else if(email.validity.typeMismatch) {
    emailError.textContent = 'Entered value needs to be an e-mail address.';
  } else if(email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`;
  }

  emailError.className = 'error active';
}
function confirmEnding(string, target) {
    return string.endsWith(target);
  }