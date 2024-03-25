let generateRandomNumbers =() =>{
    return Math.floor(Math.random() * 100) + 1; 
}

function restartGame() {
    document.getElementById('firstNumber').innerText = generateRandomNumbers();
    document.getElementById('secondNumber').innerText = generateRandomNumbers();
    document.getElementById('gameResult').innerText = '';
    document.getElementById('userInput').value = '';
}

let checkResult=()=> {
    let firstNumber = parseInt(document.getElementById('firstNumber').innerText);
    let secondNumber = parseInt(document.getElementById('secondNumber').innerText);
    let userInput = parseInt(document.getElementById('userInput').value);

    if (userInput === (firstNumber + secondNumber)) {
        document.getElementById('gameResult').innerText = 'Correct! ';
    } else {
        document.getElementById('gameResult').innerText = 'Wrong Try again!';
    }
}

document.getElementById('checkButton').addEventListener('click', checkResult);
document.getElementById('restartButton').addEventListener('click', restartGame);

onload = restartGame;
