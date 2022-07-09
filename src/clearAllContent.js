function clearAll(){
    const container = document.querySelector('.container')
    const containerChildren = container.childNodes
    console.log(containerChildren)
    while(containerChildren.length!==0){
        containerChildren.forEach(element => {
            element.remove()
        });
    }
}

export default clearAll