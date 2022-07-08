//hides placeholders
function hideFunc(input){
    const pageIcon = document.querySelector('#currentPage')
    pageIcon.classList.add("current")
    let span = input.nextElementSibling;
    if(span.nodeName!=='IMG'){
      let asterisk = span.children[0];
      if(span)span.remove()
      if(asterisk)asterisk.remove()
    }
}

//shows placeholders
function showFunc(input){
  if(input.value===""){
  const wrapper = input.parentElement;
  const newSpan = document.createElement("span")
  if(input.type==="email"){
    newSpan.textContent="Email address "
  }
  if(input.id==="date"){
    newSpan.textContent="Date of birth "
  }
  if(input.type==="tel"){
    newSpan.textContent="Phone number "
  }
  if(input.type==="tel"){
    newSpan.textContent="Phone number "
  }
  if(input.id==="name"){
    newSpan.textContent="Name "
  }
  const asterisk = document.createElement("span")
  asterisk.textContent="*"
  asterisk.classList.add("asterisk")
  wrapper.insertBefore(newSpan, input.nextElementSibling)
  newSpan.appendChild(asterisk)
}
}
//toggles date input type from text to date (for easier styling purposes)
function toggleDate(){
    const datePicker = document.querySelector("#date")
    datePicker.addEventListener('focus', () => {
        if (datePicker.type==="text"){datePicker.type="date"}
    })
    datePicker.addEventListener('blur', () => {
        if(datePicker.type==="date" && datePicker.value===""){
            datePicker.type='text';
        }
    })
}
export {hideFunc, showFunc, toggleDate}
 