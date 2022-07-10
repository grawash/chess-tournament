import constructObject from './objectConstructor'
import postData from './postData'
import onboardingPage from './onboardingPage'

function closeModal() {
    const errorModal = document.querySelector('.errorContainer')
    errorModal.style.display = 'none'
}

function validateSelectForm() {
    const closeBtn = document.querySelector('.cross')
    closeBtn.addEventListener('click', closeModal)
    const form = document.getElementsByTagName('form')[0]
    form.addEventListener('submit', (event) => {
        const nextBtn = document.querySelector('.next')
        const errorModal = document.querySelector('.errorContainer')
        const emailError = document.querySelector('.error')
        const errorHeader = document.querySelector('.errHeaderText')
        event.preventDefault()
        const selectLevel = localStorage.getItem('experience_level')
        const selectChamp = localStorage.getItem('character_id')
        if (nextBtn.textContent === 'Done') {
            const object = constructObject()
            postData(object)
            onboardingPage()
        } else if (!selectLevel) {
            event.preventDefault()
            emailError.textContent = 'You need to choose level'
            errorHeader.textContent = 'Invalid Select'
            emailError.className = 'error active'
            errorModal.style.display = 'block'
        } else if (!selectChamp) {
            event.preventDefault()
            emailError.textContent = 'You need to select champion'
            errorHeader.textContent = 'Invalid Select'
            emailError.className = 'error active'
            errorModal.style.display = 'block'
        } else {
            event.preventDefault()
            closeModal()
            nextBtn.childNodes.forEach((element) => {
                element.remove()
            })
            nextBtn.textContent = 'Done'
        }
    })
}

export default validateSelectForm
