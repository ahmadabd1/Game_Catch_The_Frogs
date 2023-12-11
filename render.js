
const urlImgFrog = "https://st3.depositphotos.com/1548395/13333/i/1600/depositphotos_133338594-stock-illustration-2d-cartoon-illustration-of-bufo.jpg"

const modelG = GameModel()
const parentWidth = Math.floor($("#playboard").width())-500;
const parentHeight = Math.floor($("#playboard").height())-500;
const childWidth = 20;
const childHeight = 20;
const makeRend = function () {
    // Set initial position
 
    const getRandomPosition = function (parentWidth, parentHeight, childWidth, childHeight) {
        const maxX = parentWidth - childWidth;
        const maxY = parentHeight - childHeight;

        const randomX = Math.floor(Math.random() * maxX)+100;
        const randomY = Math.floor(Math.random() * maxY)+100;

        return { x: randomX, y: randomY };
    }
  
    const rendTime = function () {
        $("#timer").text("Second left : " + gameM.getTime())
    }

    const startGame = function () {
        $("#playboard").empty()
        $("#textleft").val(modelG.getNumberFrog() + "~ Frog lefts")
        $("#textright").val("Level " + modelG.getLevel())
        $("#start").html('Catch the frog')
        for (let i = 0; i < modelG.getNumberFrog(); i++) {
        let newFrog = $("<img class='frog' src='https://st3.depositphotos.com/1548395/13333/i/1600/depositphotos_133338594-stock-illustration-2d-cartoon-illustration-of-bufo.jpg' alt='Frog' />");
        let initialPosition = getRandomPosition(parentWidth, parentHeight, childWidth, childHeight);
        newFrog.css({
            left: initialPosition.x + "px",
            top: initialPosition.y + "px",
            color: "red",
            cursor: "pointer"
        });
        
            $("#playboard").append(newFrog)
        }
    }

    const rendBoard = function (frog) {

        frog.empty()
        modelG.removeFrog()
        $("#playboard").empty()
        startGame()
        if (modelG.checkFrogCounter()) {
            modelG.nextLevel()
            rendTheSatatus()
        }
    }

    const rendTheSatatus = function () {
        $("#textleft").val(modelG.getNumberFrog() + "~ Frog lefts")
        $("#textright").val("Level " + modelG.getLevel())
        $("#start").html('Catch the frog')
    }

    return {
        rendTime, rendBoard, startGame
    }
}