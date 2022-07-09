import { hideFunc } from "./hidePlaceholders";
import pageComlete from './img/pageComlete.svg'
import championPage from './selectPage'
const form  = document.querySelector('#infoForm');
const errorModal = document.querySelector('.errorContainer')
const email = document.querySelector('#mail');
const phoneNum = document.querySelector('#tel')
const nameField = document.querySelector('#name')
const emailError = document.querySelector('.error');
const errorHeader = document.querySelector('.errHeaderText');
const date = document.querySelector('#date')
const closeBtn = document.querySelector('.cross')
const validMail ='@redberry.ge'
const nextBtn = document.querySelector('.next')
var regExp = /[a-zA-Z]/g;

//checks every input field for errors 
function validate(){
    const closeBtn = document.querySelector('.cross')
    closeBtn.addEventListener('click',closeModal);
    const form  = document.getElementsByTagName('form')[0];
    form.addEventListener('submit', function (event) {
        const email = document.querySelector('#mail');
        const phoneNum = document.querySelector('#tel')
        const nameField = document.querySelector('#name')
        const date = document.querySelector('#date')
        const validMail ='@redberry.ge'
        let currentMail= email.value;
        event.preventDefault();
        if(nameField.value==='' || nameField.value.length<2){
        showError();
        event.preventDefault();
        nameField.parentNode.classList.add('invalid')
        }else if(email.value==='' || !confirmEnding(currentMail,validMail)) {
        showError();
        event.preventDefault();
        email.parentNode.classList.add('invalid')
        showCheck()
        }else if(phoneNum.value==='' || !(/^\d+$/.test(phoneNum.value)) || phoneNum.value.length<9){
        showError();
        event.preventDefault();
        phoneNum.parentNode.classList.add('invalid')
        showCheck();
        }else if (date.value===''){
        showError();
        event.preventDefault();
        date.parentNode.classList.add('invalid')
        showCheck();
        }else{
        event.preventDefault();
        localStorage.setItem('page','select')
        showCheck();
        closeModal();
        succesfulSubmit()
        localStorage.setItem('name', nameField.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('number', phoneNum.value);
        localStorage.setItem('date_of_birth', date.value);
        championPage();
        }
        localStorage.setItem('name', nameField.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('number', phoneNum.value);
        localStorage.setItem('date_of_birth', date.value);
    });
}
  function succesfulSubmit(){
    const pageIcon = document.querySelector('#currentPage')
    const successImg = document.createElement('img')
    successImg.src=pageComlete
    pageIcon.children[0].remove()
    pageIcon.appendChild(successImg)
    showCheck();
    localStorage.setItem('personalInfo', 'success')
  }
  //displays check sign if error not found
  function showCheck(){
    const inputs = document.querySelectorAll('input')
    inputs.forEach(element => {
      if(!element.parentNode.classList.contains('invalid') && element.value!==''){
        element.nextElementSibling.style.display='block'
      } else if ( element.nextElementSibling.nodeName==='SPAN' ){
        element.nextElementSibling.style.display='block'
      } else {
        element.nextElementSibling.style.display='none'
      }
    })
  }
  
  //displays error message
  function showError() {
    const email = document.querySelector('#mail');
    const phoneNum = document.querySelector('#tel')
    const nameField = document.querySelector('#name')
    const date = document.querySelector('#date')
    const errorModal = document.querySelector('.errorContainer')
    const emailError = document.querySelector('.error');
    const errorHeader = document.querySelector('.errHeaderText');
    if(nameField.value==='') {
      emailError.textContent = 'You need to enter your name'
      errorHeader.textContent='Invalid Name'
    } else if(nameField.value.length < 2) {
      emailError.textContent = 'Your name needs to be at least 2 characters long'
      errorHeader.textContent='Invalid Name'
    } else if(email.value==='') {
      emailError.textContent = 'You need to enter an e-mail address.';
      errorHeader.textContent='Invalid Email'
    } else if(email.validity.typeMismatch) {
      emailError.textContent = 'Entered value needs to be an e-mail address.';
      errorHeader.textContent='Invalid Email'
    } else if(email.value.length<8) {
      emailError.textContent = `Email should be at least 9 characters; you entered ${ email.value.length }.`;
      errorHeader.textContent='Invalid Email'
    } else if (!confirmEnding(email.value,validMail)) {
      emailError.textContent = `Please enter valid email adress`;
      errorHeader.textContent='Invalid Email'
    } else if (phoneNum.value===''){
      emailError.textContent = 'You need to enter your phone number'
      errorHeader.textContent='Invalid Number'
    } else if (!(/^\d+$/.test(phoneNum.value))){
      emailError.textContent = 'Should only contain numbers'
      errorHeader.textContent = 'Invalid Number'
    } else if (phoneNum.value.length<9){
      emailError.textContent = `should be ${ phoneNum.minLength } characters; you entered ${ phoneNum.value.length }.`
      errorHeader.textContent='Invalid Number'
    } else if (date.value===''){
      emailError.textContent = `Please enter date`
      errorHeader.textContent='Invalid Date'
    }
  
    emailError.className = 'error active';
    errorModal.style.display='block';
  }
  function confirmEnding(string, target) {
      return string.endsWith(target);
  }
  function closeModal(){
    const errorModal = document.querySelector('.errorContainer')
    errorModal.style.display='none';
  }
  function populateForm(){
    const email = document.querySelector('#mail');
    const phoneNum = document.querySelector('#tel')
    const nameField = document.querySelector('#name')
    const date = document.querySelector('#date')
    const inputs = document.querySelectorAll('input')
    nameField.value=localStorage.getItem('name');
    email.value=localStorage.getItem('email');
    phoneNum.value=localStorage.getItem('number');
    date.value=localStorage.getItem('date_of_birth');
    inputs.forEach(element =>{
      if(!element.validity.valueMissing){
        hideFunc(element)
      }
    })
    if(localStorage.getItem('personalInfo')=='success'){
      succesfulSubmit();
    }
  }

  export {validate,populateForm}