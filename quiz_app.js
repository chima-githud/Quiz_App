function showScore(){
            resetState();
            questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
            nextButton.innerHTML = "Play Again"
            nextButton.style.display = "block"
        };