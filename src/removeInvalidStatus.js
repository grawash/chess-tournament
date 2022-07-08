function controllInvStatus(){
    const inputs = document.querySelectorAll('input')
    inputs.forEach(element =>{
        console.log('a')
        element.addEventListener('input', function (event) {
        element.nextElementSibling.style.display='none'
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