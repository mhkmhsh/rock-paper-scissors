
//let scoreBoard = parseInt(document.getElementById('scoreBoard').value)


let challengerName = `${userName}`
let nameDisplayed = document.getElementById('nameDisplay')

function nameDisplay() {
    let userName = document.getElementById('userName')
    if (typeof userName === 'string') {
        nameDisplay.textContent = userName
    }
    else{
        prompt("PLEASE ENTER USERNAME")
    }
}