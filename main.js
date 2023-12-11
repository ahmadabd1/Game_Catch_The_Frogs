const gameM = GameModel();
const rend = makeRend();


$("#start").on("click", function(){
    if (!isTimerRunning) {
        startTimer(5); // Start the timer if it's not running
        isTimerRunning = true;
    }
    rend.startGame(); // Initialize the game
});

$("#playboard").on("click", ".frog", function(){
    rend.rendBoard($(this)); // Handle the frog click rend
    rend.startGame();
    resetTimer(5); // Reset the timer when trying again
});
