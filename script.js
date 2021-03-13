let blueCircleCheckbox = document.getElementById('blue-circle-checkbox')
let greenCircleCheckbox = document.getElementById('green-circle-checkbox')
let redCircleCheckbox = document.getElementById('red-circle-checkbox')

let redCircle = document.getElementById('red-circle')
let blueCircle = document.getElementById('blue-circle')
let greenCircle = document.getElementById('green-circle')

// Red Circle 
redCircleCheckbox.onclick= () => {
    if(!redCircleCheckbox.checked) {
        redCircle.style.display = 'none'
    } else {
        redCircle.style.display = 'block'
    }
}

blueCircleCheckbox.onclick= () => {
    if(!blueCircleCheckbox.checked) {
        blueCircle.style.display = 'none'
    } else {
        blueCircle.style.display = 'block'
    }
}


greenCircleCheckbox.onclick= () => {
    if(!greenCircleCheckbox.checked) {
        greenCircle.style.display = 'none'
    } else {
        greenCircle.style.display = 'block'
    }
}

