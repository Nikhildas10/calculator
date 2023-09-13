displayData=(data)=>{
display.value+=data
}

allClear=()=>{
    display.value=""
}

submit=()=>{
display.value=eval(display.value)
}
backspace=()=>{
    display.value=display.value.slice(0,-1)
}