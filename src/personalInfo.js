/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-globals */
import check from './img/check.svg'
import arrowIcon from './img/arrow.svg'
import {hideFunc,showFunc, toggleDate} from './hidePlaceholders'
import { validate } from './validateInputs'
import controllInvStatus from './removeInvalidStatus'
import removeContents from './removeContent'
import createErrorContainer from './createErrorModal'


function createLeftPanelInfo(){
    const leftContent = document.querySelector('.leftContent')
    leftContent.setAttribute('id', 'personalInfoLeft')
    const emanuelContainer = document.createElement('div')
    const emanuelQuote = document.createElement('p')
    const emanuelText = document.createElement('p')
    emanuelContainer.classList.add('emanuelContainer')
    emanuelQuote.classList.add('emanuelQuote')
    emanuelText.classList.add('emanuelText')
    emanuelQuote.textContent='“When you see a good move, look for a better one.”'
    emanuelText.textContent='Emanuel Lasker'
    emanuelContainer.appendChild(emanuelQuote)
    emanuelContainer.appendChild(emanuelText)
    leftContent.appendChild(emanuelContainer)
}


function createHeader(rightPanel){
    rightPanel.setAttribute('id', 'personalInfoRight')
    const registrationHeader = document.createElement('div')
    const registrationHeaderText = document.createElement('h2')
    registrationHeader.classList.add('registrationHeader')
    registrationHeaderText.classList.add('registrationHeaderText')
    registrationHeaderText.textContent='Start creating your account'
    rightPanel.appendChild(registrationHeader)
    registrationHeader.appendChild(registrationHeaderText)
}

function createInfoForm(rightContent){
    const informationForm = document.createElement('div')
    const form = document.createElement('form')
    form.setAttribute('id','infoForm')
    form.setAttribute('novalidate', true)
    informationForm.classList.add('informationForm')
    const wrapperText = document.createElement('div')
    const wrapperEmail = document.createElement('div')
    const wrapperPhone = document.createElement('div')
    const wrapperDate = document.createElement('div')
    wrapperText.classList.add('wrapper')
    wrapperEmail.classList.add('wrapper')
    wrapperPhone.classList.add('wrapper')
    wrapperDate.classList.add('wrapper')
    form.appendChild(wrapperText)
    form.appendChild(wrapperEmail)
    form.appendChild(wrapperPhone)
    form.appendChild(wrapperDate)
    informationForm.appendChild(form)
    rightContent.appendChild(informationForm)
    const nameInput = document.createElement('input')
    nameInput.type='name'
    const emailInput = document.createElement('input')
    emailInput.type='email'
    const phoneInput = document.createElement('input')
    phoneInput.type='tel'
    const DateInput = document.createElement('input')
    DateInput.type='text'
    nameInput.setAttribute('id','name')
    emailInput.setAttribute('id','mail')
    phoneInput.setAttribute('id','tel')
    DateInput.setAttribute('id', 'date')
    emailInput.setAttribute('minlength','8')
    phoneInput.setAttribute('minlength','9')
    phoneInput.setAttribute('maxlength','9')
    wrapperText.appendChild(nameInput)
    wrapperEmail.appendChild(emailInput)
    wrapperPhone.appendChild(phoneInput)
    wrapperDate.appendChild(DateInput)
    const wrappers = document.querySelectorAll('.wrapper')
    wrappers.forEach(element =>{
        const span = document.createElement('span')
        const asteriskSpan = document.createElement('span')
        const checkMark = document.createElement('img')
        switch(element.children[0].type){
            case 'text':
                span.textContent='Name ';
                break;
            case 'email':
                span.textContent='Email adress ';
                break;
            case 'tel' :
                span.textContent='Phone number ';
                break;
            default:
                console.log('YOU SHOULD NOT BE SEEING THIS!')
        }
        if(element.children[0].id==='date')
        span.textContent='Date of birth'
        asteriskSpan.textContent='*'
        asteriskSpan.classList.add('asterisk')
        checkMark.classList.add('check')
        checkMark.src=check
        span.appendChild(asteriskSpan)
        element.appendChild(span)
        element.appendChild(checkMark)

    })
    const buttons = document.createElement('div')
    buttons.classList.add('buttons')
    const backButtonLink = document.createElement('a')
    const nextButtonLink = document.createElement('a')
    backButtonLink.classList.add('backPersonal')
    nextButtonLink.classList.add('nextPersonalInfo')
    const backButton = document.createElement('button')
    const nextButton = document.createElement('button')
    backButton.classList.add('back')
    nextButton.classList.add('next')
    backButton.textContent='back'
    nextButton.textContent='next'
    informationForm.appendChild(buttons)
    buttons.appendChild(backButtonLink)
    buttons.appendChild(nextButtonLink)
    backButtonLink.appendChild(backButton)
    nextButtonLink.appendChild(nextButton)
    const nextImg = document.createElement('img')
    nextImg.src=arrowIcon
    nextImg.classList.add('arrow')
    nextButton.appendChild(nextImg)
    nextButton.setAttribute('form','infoForm')
    // nextButton.addEventListener('click', () =>{validate()})
    const inputs = document.querySelectorAll('input')
    // adds hideFunc/showFunc to input elements for displaying/hiding "placeholders"
    inputs.forEach(element => {
        element.required=true
        element.addEventListener('click',() =>{ hideFunc(element)})
        element.addEventListener('focus',() =>{ hideFunc(element)})
        element.addEventListener('blur',() =>{ showFunc(element)})
        toggleDate();
    })
    // index.js displays correct pagge according do page key of localstorage
    backButton.addEventListener('click', () => {
        localStorage.setItem('page', 'landing')
        location.reload()
    }) 
    
    // disables invalid/checked status when correcting input
    controllInvStatus()
    // ads form validation logic to submit button
    validate();
}

function createPagination(rightContent){
    const pageIndicators = document.createElement('div')
    const pageIcons = document.createElement('div')
    rightContent.classList.add('rightContent')
    pageIndicators.classList.add('pageIndicators')
    pageIcons.classList.add('pageIcons')
    const page1 =document.createElement('div')
    const connectingLine = document.createElement('div')
    const page2 =document.createElement('div')
    page1.classList.add('page1')
    page2.classList.add('page2')
    page1.classList.add('pageIcon')
    page2.classList.add('pageIcon')
    page1.setAttribute('id','currentPage')
    page2.setAttribute('id', 'inactive')
    connectingLine.classList.add('connectingLine')
    const pageContent1 = document.createElement('p')
    const pageContent2 = document.createElement('p')
    pageContent1.textContent='1'
    pageContent2.textContent='2'
    rightContent.appendChild(pageIndicators)
    pageIndicators.appendChild(pageIcons)
    pageIcons.appendChild(page1)
    page1.appendChild(pageContent1)
    pageIcons.appendChild(connectingLine)
    pageIcons.appendChild(page2)
    page2.appendChild(pageContent2)
    const pageNames = document.createElement('div')
    const pageName1 = document.createElement('p')
    const pageName2 = document.createElement('p')
    pageName1.textContent='Personal information'
    pageName2.textContent='Chess experience'
    pageNames.classList.add('pageNames')
    pageName1.classList.add('pageName')
    pageName2.classList.add('pageName')
    pageIndicators.appendChild(pageNames)
    pageNames.appendChild(pageName1)
    pageNames.appendChild(pageName2)

}

function cleanRightPanel(){
    const rightPanel = document.querySelector('.rightPanel')
    if(rightPanel){
        const rightPanelChildrem = rightPanel.childNodes
        if(rightPanelChildrem){
            rightPanelChildrem.forEach(element => {
                element.remove()
            });
        }
    }
}

function createRightContent(rightPanel){
    const rightContent = document.createElement('div')
    createPagination(rightContent)
    rightPanel.appendChild(rightContent)
    const infoHeading = document.createElement('h2')
    const subText = document.createElement('p')
    infoHeading.classList.add('infoHeading')
    subText.classList.add('subText')
    infoHeading.textContent='Personal information'
    subText.textContent='This is basic informaton fields'
    rightContent.appendChild(infoHeading)
    rightContent.appendChild(subText)
    createErrorContainer(rightContent)
    createInfoForm(rightContent)
    
}
function createRightPanelInfo(){
    cleanRightPanel()
    const rightPanel = document.querySelector('.rightPanel')
    createHeader(rightPanel)
    createRightContent(rightPanel)
}
function infoPage(){
    removeContents()
    createLeftPanelInfo()
    createRightPanelInfo()
}

export default infoPage