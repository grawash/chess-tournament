import removeContents from './removeContent'
import createErrorContainer from './createErrorModal'
import getData from './getData'
import dropdown from './selectDropdown'
import pageComlete from './img/pageComlete.svg'
import dropdownSvg from './img/dropdown.svg'
import arrowIcon from './img/arrow.svg'
import validateSelectForm from './validateSelectForm'
import {validate,populateForm} from './validateInputs'
import build from './createLandingPage'
import infoPage from './personalInfo'


function championPage(){
    removeContents()
    createLeftPanelSelect()
    createRightPanelSelect()

}

function createLeftPanelSelect(){
    const leftContent = document.querySelector('.leftContent')
    leftContent.setAttribute('id', 'experienceLeft')
    const siegbertQuote = document.createElement('p')
    const siegbert = document.createElement('p')
    siegbertQuote.classList.add('siegbertQuote')
    siegbert.classList.add('siegbert')
    siegbertQuote.textContent='“Many have become chess masters; no one has become the master of chess.””'
    siegbert.textContent='- Siegbert Tarrasch'
    leftContent.appendChild(siegbertQuote)
    leftContent.appendChild(siegbert)
}
function createRightPanelSelect(){
    //cleanRightPanel()
    const rightPanel = document.querySelector('.rightPanel')
    createHeader(rightPanel)
    createRightContent(rightPanel)
}
function createHeader(rightPanel){
    rightPanel.setAttribute('id', 'experienceRight')
    const registrationHeaderText = document.querySelector('.registrationHeaderText')
    registrationHeaderText.textContent='First step is done, continue to finish onboarding'
}
function createRightContent(rightPanel){
    const rightContent = document.querySelector('.rightContent')
    createPagination(rightContent)
    rightPanel.appendChild(rightContent)
    const infoHeading = document.createElement('h2')
    const subText = document.createElement('p')
    infoHeading.classList.add('infoHeading')
    subText.classList.add('subText')
    infoHeading.textContent='Chess experience'
    subText.textContent='This is basic informaton fields'
    rightContent.appendChild(infoHeading)
    rightContent.appendChild(subText)
    createErrorContainer(rightContent)
    createSelectForm(rightContent)
    createButtons(rightContent)
    
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
    page2.setAttribute('id','currentPage')
    connectingLine.classList.add('connectingLine')
    const pageContent1 = document.createElement('p')
    const pageContent2 = document.createElement('p')
    pageContent2.textContent='2'
    rightContent.appendChild(pageIndicators)
    pageIndicators.appendChild(pageIcons)
    pageIcons.appendChild(page1)
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
    page1.classList.add('current')
    const successImg = document.createElement('img')
    successImg.src=pageComlete
    page1.appendChild(successImg)

}
function removeSelectedOption(button){
    const linkContainer = button.nextElementSibling
    if (localStorage.getItem('experience_level') && linkContainer.classList.contains('levelOptions')){
        const span = button.childNodes[0]
        span.remove()
        const newSpan = document.createElement('span')
        newSpan.textContent=localStorage.getItem('experience_level')
        button.insertBefore(newSpan, button.childNodes[0])
    } else if(localStorage.getItem('character_id') && linkContainer.classList.contains('champOptions')){
        const span = button.childNodes[0]
        span.remove()
        const newSpan = document.createElement('span')
        newSpan.textContent=localStorage.getItem('character_name')
        button.insertBefore(newSpan, button.childNodes[0])
    }

    linkContainer.childNodes.forEach(element => {
        element.addEventListener('click',() =>{
            const span = button.childNodes[0]
            span.remove()
            const newSpan = document.createElement('span')
            newSpan.textContent=element.childNodes[0].textContent
            button.insertBefore(newSpan, button.childNodes[0])
            if(linkContainer.classList.contains('levelOptions')){
                localStorage.setItem('experience_level', element.childNodes[0].textContent)
            } else if(linkContainer.classList.contains('champOptions')){
                localStorage.setItem('character_id', element.id)
                localStorage.setItem('character_name', element.childNodes[0].textContent)
            }
        })
    })
}
function createSelectForm(rightContent){
    const form = document.createElement('form')
    const selectInputs = document.createElement('div')
    form.setAttribute('novalidate', true)
    form.classList.add('chooseForm')
    form.setAttribute('id', 'selectForm')
    selectInputs.classList.add('selectInputs')
    const selectWrapperExp = document.createElement('div')
    const selectWrapperChamp = document.createElement('div')
    selectWrapperExp.classList.add('selectWrapper')
    selectWrapperChamp.classList.add('selectWrapper')
    rightContent.appendChild(form)
    form.appendChild(selectInputs)
    selectInputs.appendChild(selectWrapperExp)
    selectInputs.appendChild(selectWrapperChamp)
    const selectLevel = document.createElement('button')
    const selectChamp = document.createElement('button')
    selectLevel.setAttribute('type', 'button')
    selectChamp.setAttribute('type', 'button')
    selectLevel.classList.add('selectButton')
    selectChamp.classList.add('selectButton')
    selectLevel.classList.add('level')
    selectChamp.classList.add('champion')
    selectWrapperExp.appendChild(selectLevel)
    selectWrapperChamp.appendChild(selectChamp)
    const levelPlaceholder = document.createElement('span')
    const champPlaceholder = document.createElement('span')
    levelPlaceholder.textContent='level of knowledge '
    champPlaceholder.textContent='Choose your character '
    const levelAsterisk = document.createElement('span')
    const champAsterisk = document.createElement('span')
    levelAsterisk.textContent='*'
    champAsterisk.textContent='*'
    levelAsterisk.style.color="red"
    champAsterisk.style.color="red"
    levelPlaceholder.appendChild(champAsterisk)
    champPlaceholder.appendChild(levelAsterisk)
    selectLevel.appendChild(levelPlaceholder)
    selectChamp.appendChild(champPlaceholder)
    const levelOptions = document.createElement('div')
    const champOptions = document.createElement('div')
    levelOptions.classList.add('levelOptions')
    champOptions.classList.add('champOptions')
    const begginer = document.createElement('a')
    const intermediate = document.createElement('a')
    const proffesional = document.createElement('a')
    const begginerText = document.createElement('p')
    const intermediateText = document.createElement('p')
    const proffesionalText = document.createElement('p')
    begginer.value='begginer'
    intermediate.value='intermediate'
    proffesional.value='proffesional'
    begginerText.textContent='Begginer'
    intermediateText.textContent='Intermediate'
    proffesionalText.textContent='Proffesional'
    begginer.appendChild(begginerText)
    intermediate.appendChild(intermediateText)
    proffesional.appendChild(proffesionalText)
    levelOptions.appendChild(begginer)
    levelOptions.appendChild(intermediate)
    levelOptions.appendChild(proffesional)
    selectWrapperExp.appendChild(levelOptions)
    const levelDropIcon = document.createElement('img')
    levelDropIcon.src=dropdownSvg
    const champDropIcon = document.createElement('img')
    champDropIcon.src=dropdownSvg
    const levelDropContainer = document.createElement('div')
    const champDropContainer = document.createElement('div')
    selectLevel.appendChild(levelDropContainer)
    selectChamp.appendChild(champDropContainer)
    levelDropContainer.appendChild(levelDropIcon)
    champDropContainer.appendChild(champDropIcon)
    levelDropContainer.classList.add('dropContainer')
    champDropContainer.classList.add('dropContainer')
    levelDropIcon.classList.add('dropdown')
    champDropIcon.classList.add('dropdown')
    dropdown(selectLevel)
    removeSelectedOption(selectLevel)
    getData().then((obj) => {
        const total = document.createElement('p')
        total.textContent = `(Total ${obj.length})`
        total.classList.add('totalOptions')
        champOptions.appendChild(total)
        obj.forEach(element => {
            const champion = document.createElement('a')
            const championText = document.createElement('p')
            const championImg = document.createElement('img')
            champion.value=element.name
            championText.textContent=element.name
            champion.setAttribute('id',element.id)
            championImg.src=`https://chess-tournament-api.devtest.ge/${element.image}`
            champion.appendChild(championText)
            champion.appendChild(championImg)
            champOptions.appendChild(champion)
            selectWrapperChamp.appendChild(champOptions)
        });
        dropdown(selectChamp)
        removeSelectedOption(selectChamp)
    })
    createRadio(form)
}
function changeRadio(radio){
    let radioValue = radio.value
    if(localStorage.getItem('already_participated')==='true' && radioValue==='yes'){
        radio.setAttribute('checked', true)

    } else if(localStorage.getItem('already_participated')==='false' && radioValue==='no'){
        radio.setAttribute('checked', true)
    }
    radio.addEventListener('change', () => {
        if(radioValue==='yes'){
            localStorage.setItem('already_participated', true)

        } else {
            localStorage.setItem('already_participated', false)
        }

    })
}
function createRadio(form){
    const radioContainer = document.createElement('div')
    radioContainer.classList.add('radioContainer')
    form.appendChild(radioContainer) 
    const radioHeaderContainer = document.createElement('div')
    radioHeaderContainer.classList.add('radioHeaderContainer')
    const radioHeader = document.createElement('p')
    radioHeader.textContent="Have you participated in the Redberry Championship? "
    radioHeader.classList.add('radioHeader')
    const radioAsterisk = document.createElement('p')
    radioAsterisk.textContent='*'
    radioAsterisk.style.color="red"
    radioAsterisk.style.paddingLeft="7px"
    radioAsterisk.style.paddingTop="5px"
    radioContainer.appendChild(radioHeaderContainer)
    radioHeaderContainer.appendChild(radioHeader)
    radioHeaderContainer.appendChild(radioAsterisk)
    const radioYes = document.createElement('input')
    radioYes.type='radio'
    const radioNo = document.createElement('input')
    radioNo.type='radio'
    radioYes.value='yes'
    radioNo.value='no'
    radioYes.setAttribute('name', 'participate')
    radioNo.setAttribute('name', 'participate')
    radioYes.setAttribute('id', 'yes')
    radioYes.setAttribute('checked', true)
    radioNo.setAttribute('id', 'no')
    const radioYesLabel = document.createElement('label')
    const radioNoLabel = document.createElement('label')
    radioYesLabel.setAttribute('for', 'yes')
    radioNoLabel.setAttribute('for', 'no')
    radioYesLabel.textContent='Yes'
    radioNoLabel.textContent='No'
    const radioDiv = document.createElement('div')
    radioDiv.classList.add('radioDiv')
    radioContainer.appendChild(radioDiv)
    const radioBoxYes = document.createElement('div')
    const radioBoxNo = document.createElement('div')
    radioBoxYes.classList.add('radioBox')
    radioBoxNo.classList.add('radioBox')
    radioBoxYes.appendChild(radioYes)
    radioBoxYes.appendChild(radioYesLabel)
    radioBoxNo.appendChild(radioNo)
    radioBoxNo.appendChild(radioNoLabel)
    radioDiv.appendChild(radioBoxYes)
    radioDiv.appendChild(radioBoxNo)
    changeRadio(radioYes)
    changeRadio(radioNo)
}

function createButtons(rightContent){
    const chessButtons = document.createElement('div')
    chessButtons.classList.add('chessButtons')
    const backButtonLink = document.createElement('a')
    const nextButtonLink = document.createElement('a')
    backButtonLink.classList.add('backChess')
    nextButtonLink.classList.add('nextChess')
    const backButton = document.createElement('button')
    const nextButton = document.createElement('button')
    backButton.classList.add('back')
    nextButton.classList.add('next')
    backButton.textContent='back'
    nextButton.textContent='next'
    backButtonLink.appendChild(backButton)
    nextButtonLink.appendChild(nextButton)
    chessButtons.appendChild(backButtonLink)
    chessButtons.appendChild(nextButtonLink)
    rightContent.appendChild(chessButtons)
    const nextImg = document.createElement('img')
    nextImg.src=arrowIcon
    nextImg.classList.add('arrow')
    nextButton.appendChild(nextImg)
    nextButton.setAttribute('form','selectForm')
    validateSelectForm()
    backButton.addEventListener('click',  () =>{displayPersonalInfo()})
}

function displayPersonalInfo(){
    build()
    infoPage()
    populateForm()
    localStorage.setItem('page', 'personal')
}

export default championPage