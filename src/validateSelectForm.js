import constructObject from './objectConstructor'
import postData from './postData';
import onboardingPage from './onboardingPage'
function validateSelectForm(){
    const closeBtn = document.querySelector('.cross')
    closeBtn.addEventListener('click',closeModal);
    const form  = document.getElementsByTagName('form')[0];
    form.addEventListener('submit', function(event){
        const nextBtn = document.querySelector('.next');
        const errorModal = document.querySelector('.errorContainer')
        const emailError = document.querySelector('.error');
        const errorHeader = document.querySelector('.errHeaderText');
        event.preventDefault()
        const selectLevel = localStorage.getItem('experience_level')
        const selectChamp = localStorage.getItem('character_id')
        if(nextBtn.textContent==='Done'){
            console.log('done')
            let object = constructObject()
            postData(object)
            onboardingPage()
        } else if(!selectLevel){
            event.preventDefault()
            emailError.textContent = 'You need to enter your name'
            errorHeader.textContent='Invalid Select'
            emailError.className = 'error active';
            errorModal.style.display='block';
        } else if(!selectChamp){
            event.preventDefault()
            emailError.textContent = 'You need to enter your name'
            errorHeader.textContent='Invalid Select'
            emailError.className = 'error active';
            errorModal.style.display='block';
        } else {
            event.preventDefault()
            closeModal()
            nextBtn.childNodes.forEach(element =>{
                element.remove()
            })
            nextBtn.textContent='Done'
        }
    })
}
function closeModal(){
    const errorModal = document.querySelector('.errorContainer')
    errorModal.style.display='none';
  }
export default validateSelectForm