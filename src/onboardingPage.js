import onboarding from './img/onboarding.png'
import removeContents from './removeContent'
import successRocket from './img/Succsess rocket.svg'

function onboardingPage(){
    console.log('hi')
    createLeftContent()
    createRightContent()
}
function createLeftContent(){
    const leftContent = document.querySelector('.leftContent')
    leftContent.setAttribute('id', 'onboardingLeft')
    leftContent.style.backgroundImage=`url(${onboarding})`
    removeContents()
    const rightPanel= document.querySelector('.rightPanel')
    const rightPanelChildren = rightPanel.childNodes
    while(rightPanelChildren.length!==0){
        rightPanelChildren.forEach(element => {
            element.remove()
        });
    }
}

function createRightContent(){
    const rightPanel= document.querySelector('.rightPanel')
    rightPanel.style.display='flex'
    rightPanel.style.justifyContent='center'
    rightPanel.style.alignItems='center'
    const onboardingDiv = document.createElement('div')
    onboardingDiv.classList.add('onboardingDiv')
    rightPanel.appendChild(onboardingDiv)
    const rocketImg = document.createElement('img')
    rocketImg.src=successRocket
    onboardingDiv.appendChild(rocketImg)
    const onboardingText = document.createElement('p')
    onboardingText.classList.add('onboardingText')
    onboardingText.textContent='Onboarding completed!'
    onboardingDiv.appendChild(onboardingText)
}

export default onboardingPage