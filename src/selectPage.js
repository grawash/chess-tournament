import removeContents from './removeContent'
import createErrorContainer from './createErrorModal'
import getData from './getData'
import dropdown from './selectDropdown'
import pageComlete from './img/pageComlete.svg'
import dropdownSvg from './img/dropdown.svg'


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
            console.log(element)
        });
        dropdown(selectChamp)
    })
}


export default championPage