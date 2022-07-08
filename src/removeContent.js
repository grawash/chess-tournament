function removeContents(){
    const leftContent = document.querySelector('.leftContent')
    if(leftContent){
        const leftContentChildren = leftContent.childNodes
        while(leftContentChildren.length!==0){
            leftContentChildren.forEach(element => {
                element.remove()
            });
        }
    }
    const rightContent = document.querySelector('.rightContent')
    if(rightContent){
        const rightContentChildren = rightContent.childNodes
        while(rightContentChildren.length!==0){
            rightContentChildren.forEach(element => {
                element.remove()
            });
        }
    }

}

export default removeContents