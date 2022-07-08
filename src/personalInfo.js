import vector from './img/Vector.svg'
import crossImg from './img/cross.svg'
import check from './img/check.svg'
import arrowIcon from './img/arrow.svg'
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

function createRightPanelInfo(){
    cleanRightPanel()
    const rightPanel = document.querySelector('.rightPanel')
    createHeader(rightPanel)
    createRightContent(rightPanel)
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
    DateInput.setAttribute('id', 'date')
    wrapperText.appendChild(nameInput)
    wrapperEmail.appendChild(emailInput)
    wrapperPhone.appendChild(phoneInput)
    wrapperDate.appendChild(DateInput)
    const wrappers = document.querySelectorAll('.wrapper')
    wrappers.forEach(element =>{
        const span = document.createElement('span')
        const asteriskSpan = document.createElement('span')
        const checkMark = document.createElement('img')
        console.log(element.children[0])
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
                console.log('nah fam')
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
    const backButton = document.createElement('btn')
    const nextButton = document.createElement('btn')
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
}
function createErrorContainer(rightContent){
    const errorContainer = document.createElement('div')
    const errorHeader = document.createElement('div')
    const errLine = document.createElement('div')
    const errorBody = document.createElement('div')
    errorContainer.classList.add('errorContainer')
    errorHeader.classList.add('errorHeader')
    errLine.classList.add('errLine')
    errorBody.classList.add('errorBody')
    rightContent.appendChild(errorContainer)
    errorContainer.appendChild(errorHeader)    
    errorContainer.appendChild(errLine)
    errorContainer.appendChild(errorBody)
    const warning = document.createElement('img')
    const errHeaderText = document.createElement('p')
    const crossDiv = document.createElement('div')
    warning.src=vector
    errHeaderText.classList.add('errHeaderText')
    crossDiv.classList.add('crossDiv')
    errorHeader.appendChild(warning)
    errorHeader.appendChild(errHeaderText)
    errorHeader.appendChild(crossDiv)
    const cross = document.createElement('img')
    cross.classList.add('cross')
    cross.src=crossImg
    crossDiv.appendChild(cross)
    const errorText = document.createElement('p')
    errorText.classList.add('error')
    errorBody.appendChild(errorText)

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
function removeContents(){
    const leftContent = document.querySelector('.leftContent')
    if(leftContent){
        const leftContentChildren = leftContent.childNodes
        if(leftContentChildren){
            leftContentChildren.forEach(element => {
                element.remove()
            });
        }
    }
    const rightContent = document.querySelector('.rightContent')
    if(rightContent){
        const rightContentChildren = rightContent.childNodes
        if(rightContentChildren){
            rightContentChildren.forEach(element => {
                element.remove()
            });
        }
    }

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
function infoPage(){
    removeContents()
    createLeftPanelInfo()
    createRightPanelInfo()
}

export default infoPage