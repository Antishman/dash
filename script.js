let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('submitGuess').addEventListener('click', function() {
    const userGuess = Number(document.getElementById('guessInput').value);
    attempts++;
    const messageElement = document.getElementById('message');

    if (userGuess < 1 || userGuess > 100) {
        messageElement.textContent = 'Please enter a number between 1 and 100.';
    } else if (userGuess === randomNumber) {
        messageElement.textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
        document.getElementById('restartButton').style.display = 'block';
    } else if (userGuess < randomNumber) {
        messageElement.textContent = 'Too low! Try again.';
    } else {
        messageElement.textContent = 'Too high! Try again.';
    }
});

document.getElementById('restartButton').addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById('message').textContent = '';
    document.getElementById('guessInput').value = '';
    document.getElementById('restartButton').style.display = 'none';
});