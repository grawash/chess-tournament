import vector from './img/Vector.svg'
import crossImg from './img/cross.svg'

function createErrorContainer(rightContent){
    const errorContainer = document.createElement('div')
    const errorHeader = document.createElement('div')
    const errLine = document.createElement('div')
    const errorBody = document.createElement('div')
    errorContainer.classList.add('errorContainer')
    errorHeader.classList.add('errorHeader')
    errLine.classList.add('errLine')
    errorBody.classList.add('errorBody')
    rightContent.appendChild(errorContainer)
    errorContainer.appendChild(errorHeader)    
    errorContainer.appendChild(errLine)
    errorContainer.appendChild(errorBody)
    const warning = document.createElement('img')
    const errHeaderText = document.createElement('p')
    const crossDiv = document.createElement('div')
    warning.src=vector
    errHeaderText.classList.add('errHeaderText')
    crossDiv.classList.add('crossDiv')
    errorHeader.appendChild(warning)
    errorHeader.appendChild(errHeaderText)
    errorHeader.appendChild(crossDiv)
    const cross = document.createElement('img')
    cross.classList.add('cross')
    cross.src=crossImg
    crossDiv.appendChild(cross)
    const errorText = document.createElement('p')
    errorText.classList.add('error')
    errorBody.appendChild(errorText)

}

export default createErrorContainer