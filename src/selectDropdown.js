function dropdown(button) {
    const linkContainer = button.nextElementSibling
    button.addEventListener('click',function(event) {
        event.stopPropagation();
        document.querySelector('.page2').classList.add('current')
        button.lastChild.lastChild.style.transform="rotate(180deg)"
        if(button.nextElementSibling.id==='activeLevel' || button.nextElementSibling.id==='activeChamp'){
            button.nextElementSibling.removeAttribute('id')
            button.lastChild.lastChild.style.transform="rotate(0deg)"
        }else if(button.classList.contains('level')){
            button.nextElementSibling.setAttribute('id', 'activeLevel')
        } else {
            button.nextElementSibling.setAttribute('id', 'activeChamp')
        }
    })
    linkContainer.childNodes.forEach(element => {
        element.addEventListener('click', function(event) {
            event.stopPropagation();
            button.nextElementSibling.removeAttribute('id')
            button.lastChild.lastChild.style.transform="rotate(0deg)"
        })
    });
    window.addEventListener('click', () => {
        button.nextElementSibling.removeAttribute('id')
        button.lastChild.lastChild.style.transform="rotate(0deg)"
    })
  }
  export default dropdown