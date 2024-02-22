
//let scoreBoard = parseInt(document.getElementById('scoreBoard').value)


let challengerName = `${userName}`
let nameDisplayed = document.getElementById('nameDisplay')

function nameDisplay() {
    let userName = document.getElementById('userName')
    if (typeof userName === null) {
        nameDisplay.textContent = userName
    }
    else{
        alert("PLEASE ENTER USERNAME")
    }
}