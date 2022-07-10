/* eslint-disable no-cond-assign */
/* eslint-disable no-constant-condition */
/* eslint-disable no-param-reassign */

// removes invalid status from input fields when making correction, also saves values on localstorage
function controllInvStatus(){
    const inputs = document.querySelectorAll('input')
    inputs.forEach(element =>{
        element.addEventListener('input', () => {
        element.nextElementSibling.style.display='none'
        if(element.id==='name'){
            localStorage.setItem('name', element.value);
        } else if (element.type==='email'){
            localStorage.setItem('email', element.value);
        } else if (element.type==='tel'){
            localStorage.setItem('number', element.value);
        } else if (element.id==='date'){
            localStorage.setItem('date_of_birth', element.value);
        }
        const pageIcon = document.querySelector('#currentPage')
        if(element.parentNode.classList.contains('invalid')){element.parentNode.classList.remove('invalid')}
        localStorage.setItem('personalInfo', 'none')
        pageIcon.classList.remove('succes')
        if(pageIcon.children[0].type='img'){
            pageIcon.children[0].remove()
            const pageContent=document.createElement('p')
            if(pageIcon.classList.contains('page1')){
            pageContent.textContent='1'
            }
            else{pageContent.textContent='2'}
            pageIcon.appendChild(pageContent)
        }
    });
    });
}

export default controllInvStatus