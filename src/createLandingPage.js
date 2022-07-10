/* eslint-disable no-restricted-globals */
import './style.css'
import arrowSvg from './img/arrow.svg'
import logoPhoto from './img/Vector.png'
import logoTxtPhoto from './img/Redberry Knight Cup.png'
import clearAll from './clearAllContent'

const container = document.createElement('div')
const body = document.querySelector('body')
container.classList.add('container')
body.appendChild(container)

function createHeader(logoBox) {
    const logo = document.createElement('img')
    const logoText = document.createElement('img')
    logo.classList.add('logo')
    logoText.classList.add('logoText')
    logo.src = logoPhoto
    logoText.src = logoTxtPhoto
    logoBox.appendChild(logo)
    logoBox.appendChild(logoText)
}
function createLeftContent(leftPanel) {
    const leftContent = document.createElement('div')
    leftContent.classList.add('leftContent')
    leftContent.setAttribute('id', 'landingContent')
    leftPanel.appendChild(leftContent)
}

function createRightPanel() {
    const rightPanel = document.createElement('div')
    const getStarted = document.createElement('div')
    const paraContainer = document.createElement('div')
    const chessSays = document.createElement('p')
    const alot = document.createElement('p')
    const whoWeAre = document.createElement('p')
    const getStartedBtn = document.createElement('a')
    const arrow = document.createElement('img')
    rightPanel.classList.add('rightPanel')
    rightPanel.setAttribute('id', 'landingRigtPanel')
    getStarted.classList.add('getStarted')
    paraContainer.classList.add('paraContainer')
    chessSays.classList.add('chessSays')
    alot.classList.add('alot')
    whoWeAre.classList.add('whoWeAre')
    getStartedBtn.classList.add('getStartedBtn')
    arrow.classList.add('arrow')
    chessSays.textContent = 'chess says'
    alot.textContent = 'a lot about'
    whoWeAre.textContent = 'who we are'
    getStartedBtn.textContent = 'Get Started'
    // index.js displays correct pagge according do page key of localstorage
    getStartedBtn.addEventListener('click', () => {
        localStorage.setItem('page', 'personal')
        location.reload()
    })
    arrow.src = arrowSvg
    container.appendChild(rightPanel)
    rightPanel.appendChild(getStarted)
    getStarted.appendChild(paraContainer)
    paraContainer.appendChild(chessSays)
    paraContainer.appendChild(alot)
    getStarted.appendChild(whoWeAre)
    getStarted.appendChild(getStartedBtn)
    getStartedBtn.appendChild(arrow)
}

function createLeftPanel(parent) {
    const leftPanel = document.createElement('div')
    leftPanel.classList.add('leftPanel')
    const heading = document.createElement('div')
    heading.classList.add('heading')
    const logoBox = document.createElement('div')
    logoBox.classList.add('logoBox')
    parent.appendChild(leftPanel)
    leftPanel.appendChild(heading)
    heading.appendChild(logoBox)
    createHeader(logoBox)
    createLeftContent(leftPanel)
}
function build() {
    clearAll()
    createLeftPanel(container)
    createRightPanel()
}
export default build
