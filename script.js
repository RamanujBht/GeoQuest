/* script.js */

const game = {
    score: 0,
    currentImageIndex: 0,
    images: [
        { src: 'image1.jpg', location: 'City A' },
        { src: 'image2.jpg', location: 'City B' },
        // Add more images and their locations
    ],
};

function loadSatelliteImage() {
    const imageElement = document.getElementById('satellite-image');
    const currentImage = game.images[game.currentImageIndex];

    if (currentImage) {
        imageElement.src = currentImage.src;
    } else {
        // Game over logic
        alert('Game Over! Your final score is: ' + game.score);
    }
}

function checkGuess() {
    const userGuess = prompt('Enter your guess:');

    if (userGuess) {
        const currentImage = game.images[game.currentImageIndex];

        if (userGuess.toLowerCase() === currentImage.location.toLowerCase()) {
            alert('Correct! Well done!');
            game.score += 10;
        } else {
            alert('Incorrect! The correct answer is: ' + currentImage.location);
        }

        game.currentImageIndex++;
        loadSatelliteImage();
        updateScore();
    }
}

function updateScore() {
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = 'Score: ' + game.score;
}

// Initial load
loadSatelliteImage();
