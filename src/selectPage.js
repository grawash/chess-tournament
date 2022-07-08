import removeContents from './removeContent'
import createErrorContainer from './createErrorModal'

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
function createSelectForm(rightContent){
    const form = document.createElement('form')
    const selectInputs = document.createElement('div')
    form.setAttribute('novalidate', true)
    form.classList.add('chooseForm')
    selectInputs.classList.add('selectInputs')
    const selectWrapperExp = document.createElement('div')
    const selectWrapperChamp = document.createElement('div')
    selectWrapperExp.classList.add('selectWrapper')
    selectWrapperChamp.classList.add('selectWrapper')
    rightContent.appendChild(form)
    form.appendChild(selectInputs)
    selectInputs.appendChild(selectWrapperExp)
    selectInputs.appendChild(selectWrapperChamp)
    const selectLevel = document.createElement('select')
    const selectChamp = document.createElement('select')
    selectLevel.classList.add('level')
    selectChamp.classList.add('champion')
    selectWrapperExp.appendChild(selectLevel)
    selectWrapperChamp.appendChild(selectChamp)
}


export default championPage